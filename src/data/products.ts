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
  // ── HGH ───────────────────────────────────────────────────────────────────────
  { id: "hgh-1", name: "HGH", spec: "10IU", price: 85,   category: "HGH", description: "Human Growth Hormone studied for growth and metabolic research. FOR RESEARCH USE ONLY" },
  { id: "hgh-2", name: "HGH", spec: "36IU Pen",        price: 95,   category: "HGH", description: "Human Growth Hormone pen studied for growth and metabolic research. FOR RESEARCH USE ONLY" },

  // ── Semaglutide ───────────────────────────────────────────────────────────────
  { id: "SM2",  name: "Semaglutide", spec: "2mg",  price: 21.99, category: "Semaglutide", description: "GLP-1 receptor agonist studied for metabolic research and appetite regulation. FOR RESEARCH USE ONLY" },
  { id: "SM5",  name: "Semaglutide", spec: "5mg",  price: 25.99, category: "Semaglutide", description: "GLP-1 receptor agonist studied for metabolic research and appetite regulation. FOR RESEARCH USE ONLY" },
  { id: "SM10", name: "Semaglutide", spec: "10mg", price: 34.99, category: "Semaglutide", description: "GLP-1 receptor agonist studied for metabolic research and appetite regulation. FOR RESEARCH USE ONLY" },
  { id: "SM15", name: "Semaglutide", spec: "15mg", price: 44.99, category: "Semaglutide", description: "GLP-1 receptor agonist studied for metabolic research and appetite regulation. FOR RESEARCH USE ONLY" },
  { id: "SM20", name: "Semaglutide", spec: "20mg", price: 54.99, category: "Semaglutide", description: "GLP-1 receptor agonist studied for metabolic research and appetite regulation. FOR RESEARCH USE ONLY" },
  { id: "SM30", name: "Semaglutide", spec: "30mg", price: 72.99, category: "Semaglutide", description: "GLP-1 receptor agonist studied for metabolic research and appetite regulation. FOR RESEARCH USE ONLY" },

  // ── Tirzepatide ───────────────────────────────────────────────────────────────
  { id: "TR5",  name: "Tirzepatide", spec: "5mg",  price: 25.99,  category: "Tirzepatide", description: "Dual GLP-1/GIP agonist studied for advanced metabolic research. FOR RESEARCH USE ONLY" },
  { id: "TR10", name: "Tirzepatide", spec: "10mg", price: 34.99,  category: "Tirzepatide", description: "Dual GLP-1/GIP agonist studied for advanced metabolic research. FOR RESEARCH USE ONLY" },
  { id: "TR15", name: "Tirzepatide", spec: "15mg", price: 44.99,  category: "Tirzepatide", description: "Dual GLP-1/GIP agonist studied for advanced metabolic research. FOR RESEARCH USE ONLY" },
  { id: "TR20", name: "Tirzepatide", spec: "20mg", price: 54.99,  category: "Tirzepatide", description: "Dual GLP-1/GIP agonist studied for advanced metabolic research. FOR RESEARCH USE ONLY" },
  { id: "TR30", name: "Tirzepatide", spec: "30mg", price: 72.99,  category: "Tirzepatide", description: "Dual GLP-1/GIP agonist studied for advanced metabolic research. FOR RESEARCH USE ONLY" },
  { id: "TR40", name: "Tirzepatide", spec: "40mg", price: 92.99,  category: "Tirzepatide", description: "Dual GLP-1/GIP agonist studied for advanced metabolic research. FOR RESEARCH USE ONLY" },
  { id: "TR45", name: "Tirzepatide", spec: "45mg", price: 103.99, category: "Tirzepatide", description: "Dual GLP-1/GIP agonist studied for advanced metabolic research. FOR RESEARCH USE ONLY" },
  { id: "TR50", name: "Tirzepatide", spec: "50mg", price: 109.99, category: "Tirzepatide", description: "Dual GLP-1/GIP agonist studied for advanced metabolic research. FOR RESEARCH USE ONLY" },
  { id: "TR60", name: "Tirzepatide", spec: "60mg", price: 127.99, category: "Tirzepatide", description: "Dual GLP-1/GIP agonist studied for advanced metabolic research. FOR RESEARCH USE ONLY" },

  // ── Retatrutide ───────────────────────────────────────────────────────────────
  { id: "RT5",  name: "Retatrutide", spec: "5mg",  price: 39.99,  category: "Retatrutide", description: "Triple agonist (GLP-1/GIP/Glucagon) studied for next-generation metabolic research. FOR RESEARCH USE ONLY" },
  { id: "RT10", name: "Retatrutide", spec: "10mg", price: 63.99,  category: "Retatrutide", description: "Triple agonist (GLP-1/GIP/Glucagon) studied for next-generation metabolic research. FOR RESEARCH USE ONLY" },
  { id: "RT15", name: "Retatrutide", spec: "15mg", price: 88.99,  category: "Retatrutide", description: "Triple agonist (GLP-1/GIP/Glucagon) studied for next-generation metabolic research. FOR RESEARCH USE ONLY" },
  { id: "RT20", name: "Retatrutide", spec: "20mg", price: 106.99, category: "Retatrutide", description: "Triple agonist (GLP-1/GIP/Glucagon) studied for next-generation metabolic research. FOR RESEARCH USE ONLY" },
  { id: "RT24", name: "Retatrutide", spec: "24mg", price: 120.99, category: "Retatrutide", description: "Triple agonist (GLP-1/GIP/Glucagon) studied for next-generation metabolic research. FOR RESEARCH USE ONLY" },
  { id: "RT30", name: "Retatrutide", spec: "30mg", price: 149.99, category: "Retatrutide", description: "Triple agonist (GLP-1/GIP/Glucagon) studied for next-generation metabolic research. FOR RESEARCH USE ONLY" },
  { id: "RT36", name: "Retatrutide", spec: "36mg", price: 166.99, category: "Retatrutide", description: "Triple agonist (GLP-1/GIP/Glucagon) studied for next-generation metabolic research. FOR RESEARCH USE ONLY" },
  { id: "RT40", name: "Retatrutide", spec: "40mg", price: 198.99, category: "Retatrutide", description: "Triple agonist (GLP-1/GIP/Glucagon) studied for next-generation metabolic research. FOR RESEARCH USE ONLY" },
  { id: "RT50", name: "Retatrutide", spec: "50mg", price: 248.99, category: "Retatrutide", description: "Triple agonist (GLP-1/GIP/Glucagon) studied for next-generation metabolic research. FOR RESEARCH USE ONLY" },
  { id: "RT60", name: "Retatrutide", spec: "60mg", price: 276.99, category: "Retatrutide", description: "Triple agonist (GLP-1/GIP/Glucagon) studied for next-generation metabolic research. FOR RESEARCH USE ONLY" },

  // ── Cagrilintide ──────────────────────────────────────────────────────────────
  { id: "CGL5",  name: "Cagrilintide", spec: "5mg",  price: 88.99,  category: "Cagrilintide", description: "Amylin receptor agonist studied for appetite and metabolic research. FOR RESEARCH USE ONLY" },
  { id: "CGL10", name: "Cagrilintide", spec: "10mg", price: 140.99, category: "Cagrilintide", description: "Amylin receptor agonist studied for appetite and metabolic research. FOR RESEARCH USE ONLY" },

  // ── Weight Loss ───────────────────────────────────────────────────────────────
  { id: "SUR10", name: "Survodutide",    spec: "10mg", price: 226.99, category: "Weight Loss", description: "Dual GLP-1/Glucagon receptor agonist studied for metabolic and weight management research. FOR RESEARCH USE ONLY" },
  { id: "MDT5",  name: "Mazdutide",     spec: "5mg",  price: 81.99,  category: "Weight Loss", description: "GLP-1/Glucagon dual receptor agonist studied for metabolic and weight management research. FOR RESEARCH USE ONLY" },
  { id: "MDT10", name: "Mazdutide",     spec: "10mg", price: 147.99, category: "Weight Loss", description: "GLP-1/Glucagon dual receptor agonist studied for metabolic and weight management research. FOR RESEARCH USE ONLY" },
  { id: "AOD5",  name: "AOD9604",       spec: "5mg",  price: 84.99,  category: "Weight Loss", description: "Growth hormone peptide fragment studied for fat metabolism and weight management research. FOR RESEARCH USE ONLY" },
  { id: "LC120", name: "LIPO-C",        spec: "120mg/ml", price: 53.99, category: "Weight Loss", description: "Lipotropic compound blend studied for fat metabolism and liver function research. FOR RESEARCH USE ONLY" },
  { id: "LC216", name: "LIPO-C",        spec: "216mg/ml", price: 53.99, category: "Weight Loss", description: "Lipotropic compound blend studied for fat metabolism and liver function research. FOR RESEARCH USE ONLY" },

  // ── Healing Peptides ──────────────────────────────────────────────────────────
  { id: "BC5",   name: "BPC-157",                  spec: "5mg",  price: 29.99, category: "Healing Peptides", description: "Body Protection Compound studied for gut health and tissue repair research. FOR RESEARCH USE ONLY" },
  { id: "BC10",  name: "BPC-157",                  spec: "10mg", price: 53.99, category: "Healing Peptides", description: "Body Protection Compound studied for gut health and tissue repair research. FOR RESEARCH USE ONLY" },
  { id: "TB5",   name: "TB-500",                   spec: "5mg",  price: 59.99, category: "Healing Peptides", description: "Thymosin Beta-4 fragment studied for tissue repair and recovery research. FOR RESEARCH USE ONLY" },
  { id: "TB10",  name: "TB-500",                   spec: "10mg", price: 111.99, category: "Healing Peptides", description: "Thymosin Beta-4 fragment studied for tissue repair and recovery research. FOR RESEARCH USE ONLY" },
  { id: "KPV5",  name: "Lysine-Proline-Valine (KPV)", spec: "5mg",  price: 28.99, category: "Healing Peptides", description: "Anti-inflammatory tripeptide studied for gut and skin healing research. FOR RESEARCH USE ONLY" },
  { id: "KPV10", name: "Lysine-Proline-Valine (KPV)", spec: "10mg", price: 38.99, category: "Healing Peptides", description: "Anti-inflammatory tripeptide studied for gut and skin healing research. FOR RESEARCH USE ONLY" },
  { id: "RA10",  name: "Ara-290",                  spec: "10mg", price: 44.99, category: "Healing Peptides", description: "Erythropoietin-derived peptide studied for neuroprotection and anti-inflammatory research. FOR RESEARCH USE ONLY" },

  // ── Blends ────────────────────────────────────────────────────────────────────
  { id: "BB10",  name: "BPC-157 + TB-500",           spec: "5mg + 5mg",             price: 74.99,  category: "Blends", nickname: "(Wolverine)", description: "Classic healing stack studied for tissue repair research. FOR RESEARCH USE ONLY" },
  { id: "BB20",  name: "BPC-157 + TB-500",           spec: "10mg + 10mg",           price: 138.99, category: "Blends", nickname: "(Wolverine)", description: "Classic healing stack studied for tissue repair research. FOR RESEARCH USE ONLY" },
  { id: "BBG50", name: "GLOW50",                     spec: "BPC-157 5mg + GHK-Cu 35mg + TB-500 10mg",   price: 109.99, category: "Blends", nickname: "(Wolverine Glow)", description: "Advanced healing blend studied for tissue repair and recovery research. FOR RESEARCH USE ONLY" },
  { id: "BBG70", name: "GLOW70",                     spec: "BPC-157 10mg + GHK-Cu 50mg + TB-500 10mg",  price: 147.99, category: "Blends", nickname: "(Wolverine Glow)", description: "Advanced healing blend studied for tissue repair and recovery research. FOR RESEARCH USE ONLY" },
  { id: "KLOW",  name: "KLOW",                       spec: "GHK-Cu 50mg + TB-500 10mg + BPC-157 10mg + KPV 10mg", price: 177.99, category: "Blends", description: "Multi-peptide healing blend studied for advanced recovery research. FOR RESEARCH USE ONLY" },
  { id: "CS5",   name: "Cagrilintide + Semaglutide", spec: "5mg + 5mg",             price: 88.99,  category: "Blends", description: "Dual amylin/GLP-1 combination blend studied for synergistic metabolic research. FOR RESEARCH USE ONLY" },
  { id: "CS10",  name: "Cagrilintide + Semaglutide", spec: "10mg + 10mg",           price: 155.99, category: "Blends", description: "Dual amylin/GLP-1 combination blend studied for synergistic metabolic research. FOR RESEARCH USE ONLY" },

  // ── Skin & Anti-Aging ─────────────────────────────────────────────────────────
  { id: "CU50",  name: "GHK-CU",      spec: "50mg",  price: 24.99, category: "Skin & Anti-Aging", description: "Copper peptide studied for skin regeneration, wound healing and anti-aging research. FOR RESEARCH USE ONLY" },
  { id: "CU100", name: "GHK-CU",      spec: "100mg", price: 35.99, category: "Skin & Anti-Aging", description: "Copper peptide studied for skin regeneration, wound healing and anti-aging research. FOR RESEARCH USE ONLY" },
  { id: "NP810", name: "Snap-8",      spec: "10mg",  price: 28.99, category: "Skin & Anti-Aging", description: "Acetyl Octapeptide-3 studied for anti-wrinkle and skin smoothing research. FOR RESEARCH USE ONLY" },
  { id: "ML10",  name: "Melanotan-2", spec: "10mg",  price: 35.99, category: "Skin & Anti-Aging", description: "Melanocortin receptor agonist studied for skin pigmentation and photoprotection research. FOR RESEARCH USE ONLY" },
  { id: "MT1",   name: "Melanotan-1", spec: "10mg",  price: 35.99, category: "Skin & Anti-Aging", description: "Alpha-MSH analog studied for skin pigmentation and UV protection research. FOR RESEARCH USE ONLY" },
  { id: "LB",    name: "Lemon Bottle", spec: "10ml", price: 48.99, category: "Skin & Anti-Aging", description: "Deoxycholic acid-based fat-dissolving compound studied for subcutaneous adipolytic research. FOR RESEARCH USE ONLY" },

  // ── Antioxidants ──────────────────────────────────────────────────────────────
  { id: "GTT600",  name: "Glutathione", spec: "600mg",  price: 24.99, category: "Antioxidants", description: "Powerful antioxidant studied for detoxification and cellular protection research. FOR RESEARCH USE ONLY" },
  { id: "GTT1200", name: "Glutathione", spec: "1200mg", price: 39.99, category: "Antioxidants", description: "Powerful antioxidant studied for detoxification and cellular protection research. FOR RESEARCH USE ONLY" },
  { id: "GTT1500", name: "Glutathione", spec: "1500mg", price: 49.99, category: "Antioxidants", description: "Powerful antioxidant studied for detoxification and cellular protection research. FOR RESEARCH USE ONLY" },

  // ── Cognitive ─────────────────────────────────────────────────────────────────
  { id: "XA5",   name: "Semax",       spec: "5mg",  price: 29.99, category: "Cognitive", description: "Heptapeptide studied for cognitive enhancement and neuroprotection research. FOR RESEARCH USE ONLY" },
  { id: "XA11",  name: "Semax",       spec: "11mg", price: 37.99, category: "Cognitive", description: "Heptapeptide studied for cognitive enhancement and neuroprotection research. FOR RESEARCH USE ONLY" },
  { id: "SK5",   name: "Selank",      spec: "5mg",  price: 28.99, category: "Cognitive", description: "Anxiolytic peptide studied for stress reduction and cognitive research. FOR RESEARCH USE ONLY" },
  { id: "SK11",  name: "Selank",      spec: "11mg", price: 44.99, category: "Cognitive", description: "Anxiolytic peptide studied for stress reduction and cognitive research. FOR RESEARCH USE ONLY" },
  { id: "PI5",   name: "Pinealon",    spec: "5mg",  price: 31.99, category: "Cognitive", description: "Pineal gland-derived tripeptide studied for neurological protection and circadian rhythm research. FOR RESEARCH USE ONLY" },
  { id: "PI10",  name: "Pinealon",    spec: "10mg", price: 45.99, category: "Cognitive", description: "Pineal gland-derived tripeptide studied for neurological protection and circadian rhythm research. FOR RESEARCH USE ONLY" },
  { id: "PI20",  name: "Pinealon",    spec: "20mg", price: 70.99, category: "Cognitive", description: "Pineal gland-derived tripeptide studied for neurological protection and circadian rhythm research. FOR RESEARCH USE ONLY" },
  { id: "DS2",   name: "DSIP",        spec: "2mg",  price: 21.99, category: "Cognitive", description: "Delta Sleep Inducing Peptide studied for sleep regulation and stress response research. FOR RESEARCH USE ONLY" },
  { id: "DS5",   name: "DSIP",        spec: "5mg",  price: 29.99, category: "Cognitive", description: "Delta Sleep Inducing Peptide studied for sleep regulation and stress response research. FOR RESEARCH USE ONLY" },
  { id: "DS15",  name: "DSIP",        spec: "15mg", price: 68.99, category: "Cognitive", description: "Delta Sleep Inducing Peptide studied for sleep regulation and stress response research. FOR RESEARCH USE ONLY" },
  { id: "DR5",   name: "Dermorphin",  spec: "5mg",  price: 38.99, category: "Cognitive", description: "Opioid heptapeptide studied for pain modulation and receptor binding research. FOR RESEARCH USE ONLY" },
  { id: "CBL60", name: "Cerebrolysin", spec: "60mg", price: 15.99, category: "Cognitive", description: "Neuropeptide complex studied for neurotrophic activity and cognitive function research. FOR RESEARCH USE ONLY" },
  { id: "OT2",   name: "Oxytocin",    spec: "2mg",  price: 19.99, category: "Cognitive", description: "Hypothalamic neuropeptide studied for social bonding, stress, and neurological research. FOR RESEARCH USE ONLY" },

  // ── Growth Factors ────────────────────────────────────────────────────────────
  { id: "IG01",  name: "IGF-1 LR3",             spec: "0.1mg",       price: 25.99,  category: "Growth Factors", description: "Long-acting insulin-like growth factor studied for muscle and tissue growth research. FOR RESEARCH USE ONLY" },
  { id: "IG1",   name: "IGF-1 LR3",             spec: "1mg",         price: 147.99, category: "Growth Factors", description: "Long-acting insulin-like growth factor studied for muscle and tissue growth research. FOR RESEARCH USE ONLY" },
  { id: "TSM5",  name: "Tesamorelin",           spec: "5mg",         price: 77.99,  category: "Growth Factors", description: "Growth hormone releasing hormone analog studied for fat reduction and GH research. FOR RESEARCH USE ONLY" },
  { id: "TSM10", name: "Tesamorelin",           spec: "10mg",        price: 147.99, category: "Growth Factors", description: "Growth hormone releasing hormone analog studied for fat reduction and GH research. FOR RESEARCH USE ONLY" },
  { id: "TSM15", name: "Tesamorelin",           spec: "15mg",        price: 205.99, category: "Growth Factors", description: "Growth hormone releasing hormone analog studied for fat reduction and GH research. FOR RESEARCH USE ONLY" },
  { id: "G65",   name: "GHRP-6",               spec: "5mg",         price: 17.99,  category: "Growth Factors", description: "Growth hormone releasing hexapeptide studied for GH secretion and appetite research. FOR RESEARCH USE ONLY" },
  { id: "G610",  name: "GHRP-6",               spec: "10mg",        price: 38.99,  category: "Growth Factors", description: "Growth hormone releasing hexapeptide studied for GH secretion and appetite research. FOR RESEARCH USE ONLY" },
  { id: "IGD",   name: "IGF-DES",              spec: "1mg",         price: 38.99,  category: "Growth Factors", description: "Truncated insulin-like growth factor studied for local tissue growth research. FOR RESEARCH USE ONLY" },
  { id: "CND5",  name: "CJC-1295 (No DAC)",    spec: "5mg",         price: 54.99,  category: "Growth Factors", description: "Growth hormone releasing hormone analog studied for pulsatile GH release research. FOR RESEARCH USE ONLY" },
  { id: "CND10", name: "CJC-1295 (No DAC)",    spec: "10mg",        price: 94.99,  category: "Growth Factors", description: "Growth hormone releasing hormone analog studied for pulsatile GH release research. FOR RESEARCH USE ONLY" },
  { id: "CD5",   name: "CJC-1295 (With DAC)",  spec: "5mg",         price: 117.99, category: "Growth Factors", description: "Long-acting growth hormone releasing hormone analog studied for sustained GH elevation research. FOR RESEARCH USE ONLY" },
  { id: "CP10",  name: "CJC-1295 + Ipamorelin", spec: "10mg + 10mg", price: 77.99,  category: "Growth Factors", description: "Synergistic growth hormone releasing peptide blend studied for GH secretion research. FOR RESEARCH USE ONLY" },

  // ── Longevity ─────────────────────────────────────────────────────────────────
  { id: "MS10",   name: "MOTS-c",       spec: "10mg", price: 46.99,  category: "Longevity", description: "Mitochondrial-derived peptide studied for metabolic and longevity research. FOR RESEARCH USE ONLY" },
  { id: "MS40",   name: "MOTS-c",       spec: "40mg", price: 147.99, category: "Longevity", description: "Mitochondrial-derived peptide studied for metabolic and longevity research. FOR RESEARCH USE ONLY" },
  { id: "VIP5",   name: "VIP",          spec: "5mg",  price: 58.99,  category: "Longevity", description: "Vasoactive intestinal peptide studied for anti-inflammatory and neuroprotective research. FOR RESEARCH USE ONLY" },
  { id: "VIP10",  name: "VIP",          spec: "10mg", price: 107.99, category: "Longevity", description: "Vasoactive intestinal peptide studied for anti-inflammatory and neuroprotective research. FOR RESEARCH USE ONLY" },
  { id: "2S10",   name: "SS-31",        spec: "10mg", price: 68.99,  category: "Longevity", description: "Mitochondria-targeted antioxidant peptide studied for cellular energy and cardioprotection research. FOR RESEARCH USE ONLY" },
  { id: "2S50",   name: "SS-31",        spec: "50mg", price: 255.99, category: "Longevity", description: "Mitochondria-targeted antioxidant peptide studied for cellular energy and cardioprotection research. FOR RESEARCH USE ONLY" },
  { id: "ET10",   name: "Epithalon",    spec: "10mg", price: 33.99,  category: "Longevity", description: "Tetrapeptide studied for telomerase activation and longevity research. FOR RESEARCH USE ONLY" },
  { id: "ET50",   name: "Epithalon",    spec: "50mg", price: 98.99,  category: "Longevity", description: "Tetrapeptide studied for telomerase activation and longevity research. FOR RESEARCH USE ONLY" },
  { id: "SLU322", name: "SLU-PP-322",  spec: "10mg", price: 98.99,  category: "Longevity", description: "Small molecule exercise mimetic studied for metabolic and mitochondrial research. FOR RESEARCH USE ONLY" },
  { id: "PNC5",   name: "PNC-27",       spec: "5mg",  price: 68.99,  category: "Longevity", description: "Anticancer peptide studied for selective cancer cell membrane disruption research. FOR RESEARCH USE ONLY" },
  { id: "PNC10",  name: "PNC-27",       spec: "10mg", price: 118.99, category: "Longevity", description: "Anticancer peptide studied for selective cancer cell membrane disruption research. FOR RESEARCH USE ONLY" },

  // ── Immune ────────────────────────────────────────────────────────────────────
  { id: "TA5",   name: "Thymosin Alpha-1", spec: "5mg",  price: 62.99,  category: "Immune", description: "Thymic peptide studied for immune modulation and anti-infective research. FOR RESEARCH USE ONLY" },
  { id: "TA10",  name: "Thymosin Alpha-1", spec: "10mg", price: 117.99, category: "Immune", description: "Thymic peptide studied for immune modulation and anti-infective research. FOR RESEARCH USE ONLY" },
  { id: "TY10",  name: "Thymalin",         spec: "10mg", price: 43.99,  category: "Immune", description: "Thymus-derived peptide studied for immune system regulation and longevity research. FOR RESEARCH USE ONLY" },
  { id: "LL375", name: "LL-37",            spec: "5mg",  price: 64.99,  category: "Immune", description: "Cathelicidin-derived antimicrobial peptide studied for immune defense and wound healing research. FOR RESEARCH USE ONLY" },

  // ── Hormonal ──────────────────────────────────────────────────────────────────
  { id: "GHCG5K", name: "HCG",                spec: "5000IU",  price: 58.99,  category: "Hormonal", description: "Human chorionic gonadotropin studied for hormonal and reproductive research. FOR RESEARCH USE ONLY" },
  { id: "G10K",   name: "HCG",                spec: "10000IU", price: 114.99, category: "Hormonal", description: "Human chorionic gonadotropin studied for hormonal and reproductive research. FOR RESEARCH USE ONLY" },
  { id: "G75",    name: "HMG",                spec: "75IU",    price: 49.99,  category: "Hormonal", description: "Human menopausal gonadotropin studied for follicular stimulation and reproductive research. FOR RESEARCH USE ONLY" },
  { id: "KS5",    name: "KissPeptin-10",      spec: "5mg",    price: 45.99,  category: "Hormonal", description: "Hypothalamic neuropeptide studied for reproductive hormonal regulation research. FOR RESEARCH USE ONLY" },
  { id: "KS10",   name: "KissPeptin-10",      spec: "10mg",   price: 77.99,  category: "Hormonal", description: "Hypothalamic neuropeptide studied for reproductive hormonal regulation research. FOR RESEARCH USE ONLY" },
  { id: "rtISU",  name: "Recombinant Insulin", spec: "100IU/ml", price: 251.99, category: "Hormonal", description: "Recombinant human insulin studied for glucose metabolism and cellular signaling research. FOR RESEARCH USE ONLY" },

  // ── Performance ───────────────────────────────────────────────────────────────
  { id: "E5K",  name: "EPO",    spec: "5000IU", price: 99.99,  category: "Performance", description: "Erythropoietin studied for red blood cell production and oxygen utilization research. FOR RESEARCH USE ONLY" },
  { id: "P41",  name: "PT-141", spec: "10mg",  price: 45.99,  category: "Performance", description: "Melanocortin receptor agonist studied for sexual function and appetite research. FOR RESEARCH USE ONLY" },

  // ── Supplies ──────────────────────────────────────────────────────────────────
  { id: "BA3",  name: "BAC Water",     spec: "3ml",  price: 5.99,  category: "Supplies", description: "Bacteriostatic water for peptide reconstitution. FOR RESEARCH USE ONLY" },
  { id: "BA10", name: "BAC Water",     spec: "10ml", price: 7.99,  category: "Supplies", description: "Bacteriostatic water for peptide reconstitution. FOR RESEARCH USE ONLY" },
  { id: "WA3",  name: "Sterile Water", spec: "3ml",  price: 5.99,  category: "Supplies", description: "Sterile water for research use. FOR RESEARCH USE ONLY" },
  { id: "WA10", name: "Sterile Water", spec: "10ml", price: 7.99,  category: "Supplies", description: "Sterile water for research use. FOR RESEARCH USE ONLY" },
  { id: "B12",  name: "Vitamin B12",   spec: "1mg",  price: 29.99, category: "Supplies", description: "Essential vitamin studied for neurological function and cellular metabolism research. FOR RESEARCH USE ONLY" },
];

// ── Grouped products (one card per compound, variants in dropdown) ────────────

export interface GroupedProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  nickname?: string;
  variants: { id: string; spec: string; price: number }[];
}

export const groupedProducts: GroupedProduct[] = (() => {
  const map = new Map<string, GroupedProduct>();
  for (const p of products) {
    const key = `${p.category}__${p.name}`;
    if (!map.has(key)) {
      map.set(key, {
        id: p.id,
        name: p.name,
        category: p.category,
        description: p.description,
        nickname: p.nickname,
        variants: [],
      });
    }
    map.get(key)!.variants.push({ id: p.id, spec: p.spec, price: p.price });
  }
  return Array.from(map.values());
})();

export const categories = [
  { name: "HGH" },
  { name: "Semaglutide" },
  { name: "Tirzepatide" },
  { name: "Retatrutide" },
  { name: "Cagrilintide" },
  { name: "Weight Loss" },
  { name: "Healing Peptides" },
  { name: "Blends" },
  { name: "Skin & Anti-Aging" },
  { name: "Antioxidants" },
  { name: "Cognitive" },
  { name: "Growth Factors" },
  { name: "Longevity" },
  { name: "Immune" },
  { name: "Hormonal" },
  { name: "Performance" },
  { name: "Supplies" },
];
