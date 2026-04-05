import { Link } from "react-router-dom";

interface Button3DProps {
  /** Text displayed on the button */
  label: string;
  /** If provided, renders as a router Link */
  to?: string;
  onClick?: () => void;
  className?: string;
}

/**
 * Summit BioLabs 3D button.
 *
 * Features (all CSS-driven, no JS animation):
 *  • Staggered char-by-char flip animation on hover
 *  • SVG path that draws itself around the pill shape on hover
 *  • Burst / splash SVG lines on hover
 *  • 3D bottom-ledge depth effect via layered box-shadow
 *  • Press-down on :active
 *  • Icy-cyan / deep-blue Summit BioLabs palette
 */
export const Button3D = ({ label, to, onClick, className }: Button3DProps) => {
  const chars = Array.from(label); // supports emoji / multi-byte chars

  const inner = (
    <span className={`summit-btn${className ? ` ${className}` : ""}`}>
      {/* Gradient 3D background */}
      <span className="s-bg" />

      {/* Splash burst lines — stroke animated on hover */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 342 208"
        height={208}
        width={342}
        className="s-splash"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeWidth={3} d="M54.1054 99.7837C54.1054 99.7837 40.0984 90.7874 26.6893 97.6362C13.2802 104.485 1.5 97.6362 1.5 97.6362" />
        <path strokeLinecap="round" strokeWidth={3} d="M285.273 99.7841C285.273 99.7841 299.28 90.7879 312.689 97.6367C326.098 104.486 340.105 95.4893 340.105 95.4893" />
        <path strokeLinecap="round" strokeWidth={3} strokeOpacity="0.35" d="M281.133 64.9917C281.133 64.9917 287.96 49.8089 302.934 48.2295C317.908 46.6501 319.712 36.5272 319.712 36.5272" />
        <path strokeLinecap="round" strokeWidth={3} strokeOpacity="0.35" d="M281.133 138.984C281.133 138.984 287.96 154.167 302.934 155.746C317.908 157.326 319.712 167.449 319.712 167.449" />
        <path strokeLinecap="round" strokeWidth={3} d="M230.578 57.4476C230.578 57.4476 225.785 41.5051 236.061 30.4998C246.337 19.4945 244.686 12.9998 244.686 12.9998" />
        <path strokeLinecap="round" strokeWidth={3} d="M230.578 150.528C230.578 150.528 225.785 166.471 236.061 177.476C246.337 188.481 244.686 194.976 244.686 194.976" />
        <path strokeLinecap="round" strokeWidth={3} strokeOpacity="0.35" d="M170.392 57.0278C170.392 57.0278 173.89 42.1322 169.571 29.54C165.252 16.9478 168.751 2.05227 168.751 2.05227" />
        <path strokeLinecap="round" strokeWidth={3} strokeOpacity="0.35" d="M170.392 150.948C170.392 150.948 173.89 165.844 169.571 178.436C165.252 191.028 168.751 205.924 168.751 205.924" />
        <path strokeLinecap="round" strokeWidth={3} d="M112.609 57.4476C112.609 57.4476 117.401 41.5051 107.125 30.4998C96.8492 19.4945 98.5 12.9998 98.5 12.9998" />
        <path strokeLinecap="round" strokeWidth={3} d="M112.609 150.528C112.609 150.528 117.401 166.471 107.125 177.476C96.8492 188.481 98.5 194.976 98.5 194.976" />
        <path strokeLinecap="round" strokeWidth={3} strokeOpacity="0.35" d="M62.2941 64.9917C62.2941 64.9917 55.4671 49.8089 40.4932 48.2295C25.5194 46.6501 23.7159 36.5272 23.7159 36.5272" />
        <path strokeLinecap="round" strokeWidth={3} strokeOpacity="0.35" d="M62.2941 145.984C62.2941 145.984 55.4671 161.167 40.4932 162.746C25.5194 164.326 23.7159 174.449 23.7159 174.449" />
      </svg>

      {/* Inner wrap — fixed 221×42 matches the path SVG viewBox */}
      <span className="s-wrap">
        {/* Path SVG — draws around the pill on hover */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 221 42"
          height={42}
          width={221}
          className="s-path"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeWidth={3}
            d="M182.674 2H203C211.837 2 219 9.16344 219 18V24C219 32.8366 211.837 40 203 40H18C9.16345 40 2 32.8366 2 24V18C2 9.16344 9.16344 2 18 2H47.8855"
          />
        </svg>

        <span className="s-outline" />

        <span className="s-content">
          {/* State 1 — visible by default, chars fly up on hover */}
          <span className="s-char s-char-1" aria-hidden="true">
            {chars.map((ch, i) => (
              <span
                key={i}
                data-label={ch}
                style={{ "--i": i + 1 } as React.CSSProperties}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </span>

          {/* Arrow icon */}
          <span className="s-icon" aria-hidden="true">
            <span />
          </span>

          {/* State 2 — hidden below, chars rise up on hover */}
          <span className="s-char s-char-2">
            {chars.map((ch, i) => (
              <span
                key={i}
                data-label={ch}
                style={{ "--i": i + 1 } as React.CSSProperties}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </span>
        </span>
      </span>
    </span>
  );

  if (to) {
    return (
      <Link to={to} className="inline-block" aria-label={label}>
        {inner}
      </Link>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-block bg-transparent border-0 p-0 cursor-pointer"
      aria-label={label}
    >
      {inner}
    </button>
  );
};

export default Button3D;
