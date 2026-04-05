import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import heroMountain from '@/assets/hero-mountain.jpg';

// ─── Shaders ──────────────────────────────────────────────────────────────────
//
//  Renders the dot-grid + scan-line overlay with a transparent background
//  so the photo layer beneath shows through.
//
const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv         = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec2  uMouse;
  uniform vec2  uResolution;

  varying vec2 vUv;

  float hash21(vec2 p) {
    p = fract(p * vec2(234.34, 435.345));
    p += dot(p, p + 34.23);
    return fract(p.x * p.y);
  }

  void main() {
    vec2 uv = vUv + uMouse * vec2(0.010, 0.006);

    // ── Dot grid ──────────────────────────────────────────
    float aspect   = uResolution.x / uResolution.y;
    vec2  gUv      = vec2(uv.x * aspect, uv.y);
    float tiling   = 80.0;

    vec2  cellId   = floor(gUv * tiling);
    vec2  cellUv   = fract(gUv * tiling) * 2.0 - 1.0;

    float rnd      = hash21(cellId);
    float dotDist  = length(cellUv);
    float dotVal   = smoothstep(0.52, 0.38, dotDist) * rnd;

    // ── Scan line ─────────────────────────────────────────
    float scanY    = sin(uTime * 0.40) * 0.5 + 0.5;
    float scanDist = abs(uv.y - scanY);

    float scanCore = 1.0 - smoothstep(0.000, 0.004, scanDist);
    float scanHalo = 1.0 - smoothstep(0.000, 0.120, scanDist);
    float flow     = 1.0 - smoothstep(0.000, 0.072, scanDist);

    // ── Icy-cyan palette ──────────────────────────────────
    vec3 cyanBright = vec3(0.00, 0.898, 1.000);
    vec3 cyanSoft   = vec3(0.40, 0.910, 0.976);
    vec3 cyanDim    = vec3(0.00, 0.240, 0.480);

    // Accumulate effect colour
    vec3 col   = vec3(0.0);
    float alpha = 0.0;

    // Dots — brighter near scan, dim elsewhere
    float dotBright = 0.50 + flow * 4.8;
    vec3 dotCol     = mix(cyanDim * 0.45, cyanBright, flow * 0.85);
    col   += dotCol * dotVal * dotBright;
    alpha += dotVal * (0.35 + flow * 0.55);

    // Scan beam core
    col   += cyanBright * scanCore * 1.1;
    alpha += scanCore * 0.90;

    // Scan halo
    col   += cyanSoft * scanHalo * 0.18;
    alpha += scanHalo * 0.14;

    // Faint horizontal sub-grid lines
    float subGrid = smoothstep(0.010, 0.0, abs(fract(uv.y * 9.5) - 0.5) - 0.488);
    col   += vec3(0.0, 0.20, 0.42) * subGrid * 0.09;
    alpha += subGrid * 0.06;

    // Vignette on the effect (pulls it inward, doesn't darken the photo)
    vec2  vc  = vUv * 2.0 - 1.0;
    float vig = clamp(pow(1.0 - dot(vc * vec2(0.55, 0.68), vc * vec2(0.55, 0.68)), 1.2), 0.0, 1.0);
    alpha *= vig;
    col   *= vig;

    // Screen-space pseudo-bloom
    vec3 bloom = max(col - 0.55, 0.0);
    col += bloom * 0.80;

    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
  }
`;

// ─── Shader overlay mesh ──────────────────────────────────────────────────────

function HeroMesh() {
  const targetMouse = useRef(new THREE.Vector2(0, 0));
  const smoothMouse = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      targetMouse.current.set(
        (e.clientX / window.innerWidth  - 0.5) * 2,
        -(e.clientY / window.innerHeight - 0.5) * 2,
      );
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader:   VERT,
        fragmentShader: FRAG,
        uniforms: {
          uTime:       { value: 0 },
          uMouse:      { value: new THREE.Vector2(0, 0) },
          uResolution: { value: new THREE.Vector2(1920, 1080) },
        },
        transparent: true,
        depthTest:   false,
        depthWrite:  false,
      }),
    [],
  );

  useFrame(({ clock, size }) => {
    smoothMouse.current.lerp(targetMouse.current, 0.045);
    material.uniforms.uTime.value = clock.getElapsedTime();
    material.uniforms.uMouse.value.copy(smoothMouse.current);
    material.uniforms.uResolution.value.set(size.width, size.height);
  });

  return (
    <mesh material={material}>
      <planeGeometry args={[2, 2]} />
    </mesh>
  );
}

// ─── Animated text + CTA overlay ─────────────────────────────────────────────

function HeroOverlay() {
  const WORDS = ['SUMMIT', 'OF', 'SCIENCE'];

  const [visible, setVisible] = useState(0);
  const [subVis,  setSubVis]  = useState(false);
  const [btnVis,  setBtnVis]  = useState(false);
  const [delays,  setDelays]  = useState<number[]>([]);

  useEffect(() => {
    setDelays(WORDS.map(() => Math.random() * 0.06));
  }, []);

  useEffect(() => {
    if (visible < WORDS.length) {
      const t = setTimeout(() => setVisible(v => v + 1), 520);
      return () => clearTimeout(t);
    }
    const t1 = setTimeout(() => setSubVis(true),  560);
    const t2 = setTimeout(() => setBtnVis(true), 1180);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [visible]);

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center
                 text-center px-6 pointer-events-none select-none"
      style={{ zIndex: 30 }}
    >
      {/* Company name — prominent, icy cyan, clearly legible brand anchor */}
      <p
        className="font-heading font-black text-2xl md:text-4xl lg:text-5xl tracking-[0.12em] uppercase mb-4"
        style={{
          color:      '#00E5FF',
          textShadow: '0 0 32px rgba(0,229,255,0.75), 0 0 64px rgba(0,200,255,0.35)',
          letterSpacing: '0.18em',
        }}
      >
        Summit BioLabs
      </p>

      {/* Staggered word-drop title */}
      <h1 className="font-heading font-black uppercase leading-none mb-7">
        <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-7 text-5xl md:text-7xl lg:text-8xl xl:text-[7.5rem]">
          {WORDS.map((word, i) => {
            const isLast = i === WORDS.length - 1;
            const show   = i < visible;
            return (
              <span
                key={word}
                className={show ? 'hero-word-in' : ''}
                style={{
                  display:              'inline-block',
                  // Hidden before word's turn; keyframe takes over once class applied
                  opacity:              show ? undefined : 0,
                  // stagger × index + per-word random jitter = the shudder offset
                  animationDelay:       show ? `${i * 0.13 + (delays[i] ?? 0)}s` : undefined,
                  color:                isLast ? 'transparent' : 'white',
                  backgroundImage:      isLast ? 'linear-gradient(120deg,#00E5FF 0%,#67E8F9 55%,#bae6fd 100%)' : undefined,
                  WebkitBackgroundClip: isLast ? 'text' : undefined,
                  backgroundClip:       isLast ? 'text' : undefined,
                  textShadow:           !isLast ? '0 2px 32px rgba(0,150,255,0.35)' : undefined,
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
      </h1>

      {/* Subtitle */}
      <p
        className={`font-body font-light tracking-wide text-sm md:text-lg lg:text-xl max-w-xl mb-11${subVis ? ' hero-sub-in' : ''}`}
        style={{
          color:          'rgba(255,255,255,0.70)',
          textShadow:     '0 1px 18px rgba(0,80,160,0.55)',
          opacity:        subVis ? undefined : 0,
          animationDelay: subVis ? `${WORDS.length * 0.13 + 0.18}s` : undefined,
        }}
      >
        Premium research peptides &amp; nootropics engineered
        for peak human performance
      </p>

      {/* CTA button */}
      <div
        className="pointer-events-auto"
        style={{
          opacity:    btnVis ? 1 : 0,
          transform:  btnVis ? 'translateY(0)' : 'translateY(18px)',
          transition: 'opacity .8s ease, transform .8s ease',
        }}
      >
        <Link
          to="/shop"
          className="group relative inline-flex items-center gap-3 px-10 py-4
                     font-heading font-bold text-sm tracking-[0.28em] uppercase text-white
                     transition-all duration-300"
          style={{
            border:         '1px solid rgba(0,229,255,0.40)',
            background:     'rgba(0,20,50,0.40)',
            backdropFilter: 'blur(14px)',
            boxShadow:      '0 0 28px rgba(0,229,255,0.10), inset 0 0 20px rgba(0,229,255,0.05)',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = 'rgba(0,229,255,0.90)';
            el.style.background  = 'rgba(0,30,70,0.55)';
            el.style.boxShadow   = '0 0 44px rgba(0,229,255,0.30), inset 0 0 28px rgba(0,229,255,0.10)';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = 'rgba(0,229,255,0.40)';
            el.style.background  = 'rgba(0,20,50,0.40)';
            el.style.boxShadow   = '0 0 28px rgba(0,229,255,0.10), inset 0 0 20px rgba(0,229,255,0.05)';
          }}
        >
          <span className="relative z-10">Shop Now</span>
          <svg
            className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            width="18" height="18" viewBox="0 0 18 18" fill="none"
          >
            <path d="M3 9H15"          stroke="#00E5FF" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M10 4L15 9L10 14" stroke="#00E5FF" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

// ─── Exported component ───────────────────────────────────────────────────────

export function FuturisticHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', background: '#060c1a' }}
    >
      {/* ── Layer 1: mountain photograph ──────────────────── */}
      <img
        src={heroMountain}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* ── Layer 2: dark cinematic overlay ───────────────── */}
      <div
        className="absolute inset-0"
        style={{
          zIndex:     1,
          background: 'linear-gradient(180deg, rgba(3,7,24,0.52) 0%, rgba(3,7,24,0.28) 45%, rgba(3,7,24,0.70) 100%)',
        }}
      />

      {/* ── Layer 3: animated dot-grid + scan shader ──────── */}
      <Canvas
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2 }}
        camera={{ position: [0, 0, 1], near: 0.01, far: 10 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
        frameloop="always"
      >
        <HeroMesh />
      </Canvas>

      {/* ── Layer 4: text + CTA ───────────────────────────── */}
      <HeroOverlay />

      {/* ── Layer 5: bottom fade into page background ─────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none
                   bg-gradient-to-t from-background to-transparent"
        style={{ zIndex: 40 }}
      />
    </section>
  );
}

export default FuturisticHero;
