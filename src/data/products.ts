export interface Product {
  id: string;
  name: string;
  spec: string;
  price: number;
  category: string;
  subcategory?: string;
  description: string;
  nickname?: string;
}

export const products: Product[] = [
  // ── HGH (kept from original catalog) ───────────────────────────────────────
  { id: "hgh-1", name: "HGH", spec: "10IU * 10 vials", price: 85,  category: "HGH", description: "Human Growth Hormone studied for growth and metabolic research. FOR RESEARCH USE ONLY" },
  { id: "hgh-2", name: "HGH", spec: "36IU Pen",        price: 95,  category: "HGH", description: "Human Growth Hormone pen studied for growth and metabolic research. FOR RESEARCH USE ONLY" },

  // ── Semaglutide ─────────────────────────────────────────────────────────────
  { id: "SM2",  name: "Semaglutide", spec: "2mg * 10 vials",  price: 30,  category: "Semaglutide", description: "GLP-1 receptor agonist studied for metabolic research and appetite regulation. FOR RESEARCH USE ONLY" },
  { id: "SM5",  name: "Semaglutide", spec: "5mg * 10 vials",  price: 36,  category: "Semaglutide", description: "GLP-1 receptor agonist studied for metabolic research and appetite regulation. FOR RESEARCH USE ONLY" },
  { id: "SM10", name: "Semaglutide", spec: "10mg * 10 vials", price: 48,  category: "Semaglutide", description: "GLP-1 receptor agonist studied for metabolic research and appetite regulation. FOR RESEARCH USE ONLY" },
  { id: "SM15", name: "Semaglutide", spec: "15mg * 10 vials", price: 62,  category: "Semaglutide", description: "GLP-1 receptor agonist studied for metabolic research and appetite regulation. FOR RESEARCH USE ONLY" },
  { id: "SM20", name: "Semaglutide", spec: "20mg * 10 vials", price: 76,  category: "Semaglutide", description: "GLP-1 receptor agonist studied for metabolic research and appetite regulation. FOR RESEARCH USE ONLY" },
  { id: "SM30", name: "Semaglutide", spec: "30mg * 10 vials", price: 102, category: "Semaglutide", description: "GLP-1 receptor agonist studied for metabolic research and appetite regulation. FOR RESEARCH USE ONLY" },

  // ── Tirzepatide ─────────────────────────────────────────────────────────────
  { id: "TR5",  name: "Tirzepatide", spec: "5mg * 10 vials",  price: 36,  category: "Tirzepatide", description: "Dual GLP-1/GIP agonist studied for advanced metabolic research. FOR RESEARCH USE ONLY" },
  { id: "TR10", name: "Tirzepatide", spec: "10mg * 10 vials", price: 48,  category: "Tirzepatide", description: "Dual GLP-1/GIP agonist studied for advanced metabolic research. FOR RESEARCH USE ONLY" },
  { id: "TR15", name: "Tirzepatide", spec: "15mg * 10 vials", price: 62,  category: "Tirzepatide", description: "Dual GLP-1/GIP agonist studied for advanced metabolic research. FOR RESEARCH USE ONLY" },
  { id: "TR20", name: "Tirzepatide", spec: "20mg * 10 vials", price: 76,  category: "Tirzepatide", description: "Dual GLP-1/GIP agonist studied for advanced metabolic research. FOR RESEARCH USE ONLY" },
  { id: "TR30", name: "Tirzepatide", spec: "30mg * 10 vials", price: 102, category: "Tirzepatide", description: "Dual GLP-1/GIP agonist studied for advanced metabolic research. FOR RESEARCH USE ONLY" },
  { id: "TR40", name: "Tirzepatide", spec: "40mg * 10 vials", price: 130, category: "Tirzepatide", description: "Dual GLP-1/GIP agonist studied for advanced metabolic research. FOR RESEARCH USE ONLY" },
  { id: "TR45", name: "Tirzepatide", spec: "45mg * 10 vials", price: 146, category: "Tirzepatide", description: "Dual GLP-1/GIP agonist studied for advanced metabolic research. FOR RESEARCH USE ONLY" },
  { id: "TR50", name: "Tirzepatide", spec: "50mg * 10 vials", price: 155, category: "Tirzepatide", description: "Dual GLP-1/GIP agonist studied for advanced metabolic research. FOR RESEARCH USE ONLY" },
  { id: "TR60", name: "Tirzepatide", spec: "60mg * 10 vials", price: 180, category: "Tirzepatide", description: "Dual GLP-1/GIP agonist studied for advanced metabolic research. FOR RESEARCH USE ONLY" },

  // ── Retatrutide ─────────────────────────────────────────────────────────────
  { id: "RT5",  name: "Retatrutide", spec: "5mg * 10 vials",  price: 56,  category: "Retatrutide", description: "Triple agonist (GLP-1/GIP/Glucagon) studied for next-generation metabolic research. FOR RESEARCH USE ONLY" },
  { id: "RT10", name: "Retatrutide", spec: "10mg * 10 vials", price: 90,  category: "Retatrutide", description: "Triple agonist (GLP-1/GIP/Glucagon) studied for next-generation metabolic research. FOR RESEARCH USE ONLY" },
  { id: "RT15", name: "Retatrutide", spec: "15mg * 10 vials", price: 125, category: "Retatrutide", description: "Triple agonist (GLP-1/GIP/Glucagon) studied for next-generation metabolic research. FOR RESEARCH USE ONLY" },
  { id: "RT20", name: "Retatrutide", spec: "20mg * 10 vials", price: 150, category: "Retatrutide", description: "Triple agonist (GLP-1/GIP/Glucagon) studied for next-generation metabolic research. FOR RESEARCH USE ONLY" },
  { id: "RT24", name: "Retatrutide", spec: "24mg * 10 vials", price: 170, category: "Retatrutide", description: "Triple agonist (GLP-1/GIP/Glucagon) studied for next-generation metabolic research. FOR RESEARCH USE ONLY" },
  { id: "RT30", name: "Retatrutide", spec: "30mg * 10 vials", price: 210, category: "Retatrutide", description: "Triple agonist (GLP-1/GIP/Glucagon) studied for next-generation metabolic research. FOR RESEARCH USE ONLY" },
  { id: "RT36", name: "Retatrutide", spec: "36mg * 10 vials", price: 235, category: "Retatrutide", description: "Triple agonist (GLP-1/GIP/Glucagon) studied for next-generation metabolic research. FOR RESEARCH USE ONLY" },
  { id: "RT40", name: "Retatrutide", spec: "40mg * 10 vials", price: 280, category: "Retatrutide", description: "Triple agonist (GLP-1/GIP/Glucagon) studied for next-generation metabolic research. FOR RESEARCH USE ONLY" },
  { id: "RT50", name: "Retatrutide", spec: "50mg * 10 vials", price: 350, category: "Retatrutide", description: "Triple agonist (GLP-1/GIP/Glucagon) studied for next-generation metabolic research. FOR RESEARCH USE ONLY" },
  { id: "RT60", name: "Retatrutide", spec: "60mg * 10 vials", price: 390, category: "Retatrutide", description: "Triple agonist (GLP-1/GIP/Glucagon) studied for next-generation metabolic research. FOR RESEARCH USE ONLY" },

  // ── Cagrilintide ────────────────────────────────────────────────────────────
  { id: "CGL5",  name: "Cagrilintide", spec: "5mg * 10 vials",  price: 125, category: "Cagrilintide", description: "Amylin receptor agonist studied for appetite and metabolic research. FOR RESEARCH USE ONLY" },
  { id: "CGL10", name: "Cagrilintide", spec: "10mg * 10 vials", price: 198, category: "Cagrilintide", description: "Amylin receptor agonist studied for appetite and metabolic research. FOR RESEARCH USE ONLY" },

  // ── Healing Peptides ────────────────────────────────────────────────────────
  { id: "BC5",  name: "BPC-157", spec: "5mg * 10 vials",  price: 42,  category: "Healing Peptides", description: "Body Protection Compound studied for gut health and tissue repair research. FOR RESEARCH USE ONLY" },
  { id: "BC10", name: "BPC-157", spec: "10mg * 10 vials", price: 75,  category: "Healing Peptides", description: "Body Protection Compound studied for gut health and tissue repair research. FOR RESEARCH USE ONLY" },
  { id: "TB5",  name: "TB-500",  spec: "5mg * 10 vials",  price: 84,  category: "Healing Peptides", description: "Thymosin Beta-4 fragment studied for tissue repair and recovery research. FOR RESEARCH USE ONLY" },
  { id: "TB10", name: "TB-500",  spec: "10mg * 10 vials", price: 158, category: "Healing Peptides", description: "Thymosin Beta-4 fragment studied for tissue repair and recovery research. FOR RESEARCH USE ONLY" },
  { id: "KPV5",  name: "Lysine-Proline-Valine (KPV)", spec: "5mg * 10 vials",  price: 41, category: "Healing Peptides", description: "Anti-inflammatory tripeptide studied for gut and skin healing research. FOR RESEARCH USE ONLY" },
  { id: "KPV10", name: "Lysine-Proline-Valine (KPV)", spec: "10mg * 10 vials", price: 55, category: "Healing Peptides", description: "Anti-inflammatory tripeptide studied for gut and skin healing research. FOR RESEARCH USE ONLY" },

  // ── Skin & Anti-Aging ───────────────────────────────────────────────────────
  { id: "CU50",  name: "GHK-CU", spec: "50mg * 10 vials",  price: 35, category: "Skin & Anti-Aging", description: "Copper peptide studied for skin regeneration, wound healing and anti-aging research. FOR RESEARCH USE ONLY" },
  { id: "CU100", name: "GHK-CU", spec: "100mg * 10 vials", price: 50, category: "Skin & Anti-Aging", description: "Copper peptide studied for skin regeneration, wound healing and anti-aging research. FOR RESEARCH USE ONLY" },
  { id: "NP810", name: "Snap-8",  spec: "10mg * 10 vials",  price: 41, category: "Skin & Anti-Aging", description: "Acetyl Octapeptide-3 studied for anti-wrinkle and skin smoothing research. FOR RESEARCH USE ONLY" },

  // ── Antioxidants ────────────────────────────────────────────────────────────
  { id: "GTT600",  name: "Glutathione", spec: "600mg * 10 vials",  price: 35, category: "Antioxidants", description: "Powerful antioxidant studied for detoxification and cellular protection research. FOR RESEARCH USE ONLY" },
  { id: "GTT1200", name: "Glutathione", spec: "1200mg * 10 vials", price: 56, category: "Antioxidants", description: "Powerful antioxidant studied for detoxification and cellular protection research. FOR RESEARCH USE ONLY" },
  { id: "GTT1500", name: "Glutathione", spec: "1500mg * 10 vials", price: 70, category: "Antioxidants", description: "Powerful antioxidant studied for detoxification and cellular protection research. FOR RESEARCH USE ONLY" },

  // ── Cognitive ───────────────────────────────────────────────────────────────
  { id: "XA5",  name: "Semax", spec: "5mg * 10 vials",  price: 42, category: "Cognitive", description: "Heptapeptide studied for cognitive enhancement and neuroprotection research. FOR RESEARCH USE ONLY" },
  { id: "XA11", name: "Semax", spec: "11mg * 10 vials", price: 53, category: "Cognitive", description: "Heptapeptide studied for cognitive enhancement and neuroprotection research. FOR RESEARCH USE ONLY" },
  { id: "SK5",  name: "Selank", spec: "5mg * 10 vials",  price: 41, category: "Cognitive", description: "Anxiolytic peptide studied for stress reduction and cognitive research. FOR RESEARCH USE ONLY" },
  { id: "SK11", name: "Selank", spec: "11mg * 10 vials", price: 63, category: "Cognitive", description: "Anxiolytic peptide studied for stress reduction and cognitive research. FOR RESEARCH USE ONLY" },

  // ── Growth Factors ──────────────────────────────────────────────────────────
  { id: "IG01", name: "IGF-1 LR3", spec: "0.1mg * 10 vials", price: 36,  category: "Growth Factors", description: "Long-acting insulin-like growth factor studied for muscle and tissue growth research. FOR RESEARCH USE ONLY" },
  { id: "IG1",  name: "IGF-1 LR3", spec: "1mg * 10 vials",   price: 208, category: "Growth Factors", description: "Long-acting insulin-like growth factor studied for muscle and tissue growth research. FOR RESEARCH USE ONLY" },
  { id: "TSM5",  name: "Tesamorelin", spec: "5mg * 10 vials",  price: 110, category: "Growth Factors", description: "Growth hormone releasing hormone analog studied for fat reduction and GH research. FOR RESEARCH USE ONLY" },
  { id: "TSM10", name: "Tesamorelin", spec: "10mg * 10 vials", price: 208, category: "Growth Factors", description: "Growth hormone releasing hormone analog studied for fat reduction and GH research. FOR RESEARCH USE ONLY" },
  { id: "TSM15", name: "Tesamorelin", spec: "15mg * 10 vials", price: 290, category: "Growth Factors", description: "Growth hormone releasing hormone analog studied for fat reduction and GH research. FOR RESEARCH USE ONLY" },

  // ── Longevity ───────────────────────────────────────────────────────────────
  { id: "MS10", name: "MOTS-c", spec: "10mg * 10 vials", price: 66,  category: "Longevity", description: "Mitochondrial-derived peptide studied for metabolic and longevity research. FOR RESEARCH USE ONLY" },
  { id: "MS40", name: "MOTS-c", spec: "40mg * 10 vials", price: 208, category: "Longevity", description: "Mitochondrial-derived peptide studied for metabolic and longevity research. FOR RESEARCH USE ONLY" },
  { id: "VIP5",  name: "VIP", spec: "5mg * 10 vials",  price: 83,  category: "Longevity", description: "Vasoactive intestinal peptide studied for anti-inflammatory and neuroprotective research. FOR RESEARCH USE ONLY" },
  { id: "VIP10", name: "VIP", spec: "10mg * 10 vials", price: 152, category: "Longevity", description: "Vasoactive intestinal peptide studied for anti-inflammatory and neuroprotective research. FOR RESEARCH USE ONLY" },

  // ── Blends ──────────────────────────────────────────────────────────────────
  { id: "BB10",  name: "BPC-157 + TB-500", spec: "5mg + 5mg * 10 vials",   price: 105, category: "Blends", nickname: "(Wolverine)", description: "Classic healing stack studied for tissue repair research. FOR RESEARCH USE ONLY" },
  { id: "BB20",  name: "BPC-157 + TB-500", spec: "10mg + 10mg * 10 vials", price: 195, category: "Blends", nickname: "(Wolverine)", description: "Classic healing stack studied for tissue repair research. FOR RESEARCH USE ONLY" },
  { id: "BBG50", name: "GLOW50", spec: "BPC-157 5mg + GHK-Cu 35mg + TB-500 10mg",                     price: 155, category: "Blends", nickname: "(Wolverine Glow)", description: "Advanced healing blend studied for tissue repair and recovery research. FOR RESEARCH USE ONLY" },
  { id: "BBG70", name: "GLOW70", spec: "BPC-157 10mg + GHK-Cu 50mg + TB-500 10mg",                    price: 208, category: "Blends", nickname: "(Wolverine Glow)", description: "Advanced healing blend studied for tissue repair and recovery research. FOR RESEARCH USE ONLY" },
  { id: "KLOW",  name: "KLOW",   spec: "GHK-Cu 50mg + TB-500 10mg + BPC-157 10mg + KPV 10mg",         price: 250, category: "Blends", description: "Multi-peptide healing blend studied for advanced recovery research. FOR RESEARCH USE ONLY" },

  // ── Supplies ─────────────────────────────────────────────────────────────────
  { id: "BA3",  name: "BAC Water",    spec: "3ml * 10 vials",  price: 8,  category: "Supplies", description: "Bacteriostatic water for peptide reconstitution. FOR RESEARCH USE ONLY" },
  { id: "BA10", name: "BAC Water",    spec: "10ml * 10 vials", price: 11, category: "Supplies", description: "Bacteriostatic water for peptide reconstitution. FOR RESEARCH USE ONLY" },
  { id: "WA3",  name: "Sterile Water", spec: "3ml * 10 vials",  price: 8,  category: "Supplies", description: "Sterile water for research use. FOR RESEARCH USE ONLY" },
  { id: "WA10", name: "Sterile Water", spec: "10ml * 10 vials", price: 11, category: "Supplies", description: "Sterile water for research use. FOR RESEARCH USE ONLY" },
];

export const categories = [
  { name: "HGH" },
  { name: "Semaglutide" },
  { name: "Tirzepatide" },
  { name: "Retatrutide" },
  { name: "Cagrilintide" },
  { name: "Healing Peptides" },
  { name: "Blends" },
  { name: "Skin & Anti-Aging" },
  { name: "Antioxidants" },
  { name: "Cognitive" },
  { name: "Growth Factors" },
  { name: "Longevity" },
  { name: "Supplies" },
];
