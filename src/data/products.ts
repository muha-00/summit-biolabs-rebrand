export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  subcategory?: string;
}

export const products: Product[] = [
  // Test
  { id: "test-c-1", name: "Test C 250mg/ml", price: 45, category: "Test", subcategory: "Test C" },
  { id: "test-c-2", name: "Test C 200mg/ml", price: 40, category: "Test", subcategory: "Test C" },
  { id: "test-e-1", name: "Test E 250mg/ml", price: 42, category: "Test", subcategory: "Test E" },
  { id: "test-e-2", name: "Test E 300mg/ml", price: 48, category: "Test", subcategory: "Test E" },
  { id: "test-p-1", name: "Test P 100mg/ml", price: 38, category: "Test", subcategory: "Test P" },
  { id: "test-u-1", name: "Test U 250mg/ml", price: 55, category: "Test", subcategory: "Test U" },
  { id: "sust-1", name: "Sustanon 250mg/ml", price: 50, category: "Test", subcategory: "Sust" },
  { id: "sust-2", name: "Sustanon 400mg/ml", price: 60, category: "Test", subcategory: "Sust" },
  // HGH
  { id: "hgh-1", name: "HGH 10IU", price: 85, category: "HGH" },
  { id: "hgh-2", name: "HGH 36IU Pen", price: 95, category: "HGH" },
  // Trestolone (MENT)
  { id: "ment-1", name: "MENT 50mg/ml", price: 65, category: "Trestolone (MENT)" },
  { id: "ment-2", name: "MENT Ace 100mg/ml", price: 75, category: "Trestolone (MENT)" },
  // Tren
  { id: "tren-a-1", name: "Tren A 100mg/ml", price: 55, category: "Tren" },
  { id: "tren-e-1", name: "Tren E 200mg/ml", price: 60, category: "Tren" },
  // Mast
  { id: "mast-e-1", name: "Mast E 200mg/ml", price: 52, category: "Mast" },
  { id: "mast-p-1", name: "Mast P 100mg/ml", price: 48, category: "Mast" },
  // DHB
  { id: "dhb-1", name: "DHB 100mg/ml", price: 70, category: "DHB" },
  // Deca
  { id: "deca-1", name: "Deca 250mg/ml", price: 45, category: "Deca" },
  { id: "deca-2", name: "Deca 300mg/ml", price: 50, category: "Deca" },
  // Primo
  { id: "primo-1", name: "Primo E 200mg/ml", price: 85, category: "Primo" },
  // EQ
  { id: "eq-1", name: "EQ 300mg/ml", price: 48, category: "EQ" },
  { id: "eq-2", name: "EQ 500mg/ml", price: 65, category: "EQ" },
  // NPP
  { id: "npp-1", name: "NPP 100mg/ml", price: 42, category: "NPP" },
  // Orals
  { id: "oral-1", name: "Anavar 25mg", price: 55, category: "Orals" },
  { id: "oral-2", name: "Dianabol 25mg", price: 35, category: "Orals" },
  { id: "oral-3", name: "Winstrol 25mg", price: 38, category: "Orals" },
  { id: "oral-4", name: "Anadrol 50mg", price: 40, category: "Orals" },
  // Peptides
  { id: "pep-1", name: "BPC-157 5mg", price: 35, category: "Peptides" },
  { id: "pep-2", name: "TB-500 5mg", price: 38, category: "Peptides" },
  { id: "pep-3", name: "Ipamorelin 5mg", price: 30, category: "Peptides" },
  // Nootropics
  { id: "noo-1", name: "Noopept 20mg/ml", price: 32, category: "Nootropics" },
  { id: "noo-2", name: "Phenylpiracetam 100mg", price: 45, category: "Nootropics" },
  { id: "noo-3", name: "Alpha-GPC 300mg/ml", price: 38, category: "Nootropics" },
  { id: "noo-4", name: "Semax 0.1%", price: 42, category: "Nootropics" },
  { id: "noo-5", name: "Selank 0.15%", price: 40, category: "Nootropics" },
  // HCG
  { id: "hcg-1", name: "HCG 5000IU", price: 35, category: "HCG" },
  { id: "hcg-2", name: "HCG 10000IU", price: 55, category: "HCG" },
  // BAC Water
  { id: "bac-1", name: "BAC Water 30ml", price: 25, category: "BAC Water" },
  // L-Carnitine
  { id: "lcar-1", name: "L-Carnitine 500mg/ml", price: 35, category: "L-Carnitine" },
  // Vitamin B12
  { id: "b12-1", name: "Vitamin B12 1000mcg/ml", price: 28, category: "Vitamin B12" },
];

export const categories = [
  { name: "Test", subcategories: ["Test C", "Test E", "Test P", "Test U", "Sust"] },
  { name: "HGH" },
  { name: "Trestolone (MENT)" },
  { name: "Tren" },
  { name: "Mast" },
  { name: "DHB" },
  { name: "Deca" },
  { name: "Primo" },
  { name: "EQ" },
  { name: "NPP" },
  { name: "Orals" },
  { name: "Peptides" },
  { name: "Nootropics" },
  { name: "HCG" },
  { name: "BAC Water" },
  { name: "L-Carnitine" },
  { name: "Vitamin B12" },
];
