import { Product } from "../types";

export const products: Product[] = [
  {
    "id": 1,
    "title": "GHK-Cu",
    "price": 149.99,
    "status": "in_stock",
    "image": "/images/ghk-cu-50mg.png",
    "category": "Peptides",
    "description": "GHK-Cu is a premium-quality research copper peptide intended exclusively for laboratory and scientific research applications. Manufactured to high purity standards, this compound is utilized in research involving cellular signaling pathways, tissue-related biological processes, and extracellular matrix remodeling. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Lyophilized Powder",
    "researchArea": "Cellular Signaling & Biochemistry",
    "variants": [
      { "id": "50mg", "name": "50mg", "price": 149.99, "status": "in_stock" }
    ]
  },
  {
    "id": 2,
    "title": "Bacteriostatic Water",
    "price": 74.99,
    "status": "in_stock",
    "image": "/images/bacteriostatic-water-30ml.png",
    "category": "Research Solutions",
    "description": "Bacteriostatic Water is a high-grade laboratory solution for scientific research and reconstituted peptide applications. Prepared under stringent laboratory parameters to ensure consistency and reliability. Research Use Only (RUO). Not for human consumption.",
    "purity": "Sterile Grade / Research Quality",
    "form": "Liquid Solution",
    "researchArea": "Laboratory Reconstitution & Storage",
    "variants": [
      { "id": "30ml", "name": "30ML", "price": 74.99, "status": "in_stock" }
    ]
  },
  {
    "id": 3,
    "title": "LIPO C+B12",
    "price": 174.99,
    "status": "in_transit",
    "image": "/images/lipo-c.png",
    "category": "Research Solutions",
    "description": "LIPO C+B12 is a specialized research formulation designed for metabolic pathway studies, lipotropic compound characterization, and cellular biochemical assays. Supplied in sterile research grade packaging. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Liquid Formulation",
    "researchArea": "Metabolic Signaling & Lipotropic Research",
    "variants": [
      { "id": "500mg", "name": "500mg", "price": 174.99, "status": "in_transit" }
    ]
  },
  {
    "id": 4,
    "title": "Ipamorelin",
    "price": 109.99,
    "status": "in_transit",
    "image": "/images/ipamorelin-10mg.png",
    "category": "Peptides",
    "description": "Ipamorelin is a selective growth hormone secretagogue receptor agonist research peptide. Synthesized for high purity to support reproducible scientific investigations in endocrine and receptor signaling models. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Lyophilized Powder",
    "researchArea": "Endocrine Signaling & Receptor Binding",
    "variants": [
      { "id": "10mg", "name": "10mg", "price": 109.99, "status": "in_transit" }
    ]
  },
  {
    "id": 6,
    "title": "CJC+IPA",
    "price": 119.99,
    "status": "in_transit",
    "image": "/images/cjc-ipa-10mg.png",
    "category": "Blends",
    "description": "CJC+IPA is a dual-peptide combination formulated for synergistic laboratory research into neuroendocrine dynamics and growth hormone secretagogue receptor kinetics. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Lyophilized Powder",
    "researchArea": "Synergistic Neuroendocrine Kinetics",
    "variants": [
      { "id": "10mg", "name": "10mg", "price": 119.99, "status": "in_transit" }
    ]
  },
  {
    "id": 7,
    "title": "BPC+GHK+CU+TB",
    "price": 104.99,
    "status": "in_transit",
    "image": "/images/bpc157-tb500-20mg.png",
    "category": "Blends",
    "description": "BPC+GHK+CU+TB combines multi-target regenerative research peptides for laboratory analysis of tissue migration, cellular repair pathways, and extracellular matrix interactions. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Lyophilized Powder",
    "researchArea": "Tissue Regeneration & Cellular Repair",
    "variants": [
      { "id": "10mg", "name": "10mg", "price": 104.99, "status": "in_transit" }
    ]
  },
  {
    "id": 35,
    "title": "CU35 + TB10 + BPC5",
    "price": 129.99,
    "status": "in_transit",
    "image": "/images/bpc157-tb500-20mg.png",
    "category": "Blends",
    "description": "CU35 + TB10 + BPC5 (GLOW Ultra Blend) is a high-concentration triple research peptide formulation created for multi-target extracellular matrix remodeling and cellular kinetics analysis. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Lyophilized Powder",
    "researchArea": "Advanced Regenerative & Matrix Remodeling Kinetics",
    "variants": [
      { "id": "50mg", "name": "50mg", "price": 129.99, "status": "in_transit" }
    ]
  },
  {
    "id": 8,
    "title": "5-Amino-1MQ",
    "price": 109.99,
    "status": "in_stock",
    "image": "/images/5-amino-1mq-50mg.png",
    "category": "Peptides",
    "description": "5-Amino-1MQ is a targeted NNMT inhibitor compound studied in metabolic modulation, cellular energy flux, and adipose signaling pathways. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Lyophilized Powder",
    "researchArea": "NNMT Enzymatic Modulation & Metabolism",
    "variants": [
      { "id": "10mg", "name": "10mg", "price": 109.99, "status": "in_stock" },
      { "id": "50mg", "name": "50mg", "price": 149.99, "status": "in_stock" }
    ]
  },
  {
    "id": 9,
    "title": "SNAP-8",
    "price": 119.99,
    "status": "in_transit",
    "image": "/images/snap-8-10mg.png",
    "category": "Peptides",
    "description": "SNAP-8 is an octapeptide analog modeled after SNAP-25, utilized in neuromuscular transmission research, peptide folding dynamics, and membrane vesicle exocytosis assays. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Lyophilized Powder",
    "researchArea": "SNARE Complex Dynamics & Neurotransmission",
    "variants": [
      { "id": "10mg", "name": "10mg", "price": 119.99, "status": "in_transit" }
    ]
  },
  {
    "id": 10,
    "title": "Cagrilintide",
    "price": 109.99,
    "status": "in_transit",
    "image": "/images/cagrilintide-10mg.png",
    "category": "Peptides",
    "description": "Cagrilintide is a novel long-acting amylin receptor agonist peptide studied for dual-receptor metabolic regulation, satiety signal transduction, and peptide interaction kinetics. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Lyophilized Powder",
    "researchArea": "Amylin Signaling & Metabolic Homeostasis",
    "variants": [
      { "id": "10mg", "name": "10mg", "price": 109.99, "status": "in_transit" }
    ]
  },
  {
    "id": 11,
    "title": "MOTS-C",
    "price": 109.99,
    "status": "in_stock",
    "image": "/images/mots-c-10mg.png",
    "category": "Peptides",
    "description": "MOTS-c is a mitochondrial-derived peptide involved in metabolic regulation, AMP-activated protein kinase (AMPK) activation, and nuclear translocation assays. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Lyophilized Powder",
    "researchArea": "Mitochondrial Signaling & Metabolic Energetics",
    "variants": [
      { "id": "10mg", "name": "10mg", "price": 109.99, "status": "in_stock" },
      { "id": "40mg", "name": "40mg", "price": 149.99, "status": "sold_out" }
    ]
  },
  {
    "id": 13,
    "title": "SEMAX",
    "price": 119.99,
    "status": "in_transit",
    "image": "/images/semax-10mg.png",
    "category": "Peptides",
    "description": "Semax is a heptapeptide analog of ACTH(4-10) widely investigated for BDNF expression, neuroprotective mechanism signaling, and synaptic plasticity pathways. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Lyophilized Powder",
    "researchArea": "Neurotrophic Factor Expression & Plasticity",
    "variants": [
      { "id": "10mg", "name": "10mg", "price": 119.99, "status": "in_transit" }
    ]
  },
  {
    "id": 14,
    "title": "Klow",
    "price": 179.99,
    "status": "in_stock",
    "image": "/images/klow-80mg.png",
    "category": "Peptides",
    "description": "Klow is a specialized multi-target research compound formulated for advanced cellular signaling and peptide degradation kinetic assays. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Lyophilized Powder",
    "researchArea": "Cellular Signaling & Degradation Kinetics",
    "variants": [
      { "id": "80mg", "name": "80mg", "price": 179.99, "status": "in_stock" }
    ]
  },
  {
    "id": 15,
    "title": "NAD+",
    "price": 199.99,
    "status": "in_transit",
    "image": "/images/nad-plus-500mg.png",
    "category": "Peptides",
    "description": "NAD+ (Nicotinamide Adenine Dinucleotide) is a critical coenzyme utilized in sirtuin activation assays, PARP enzyme dynamics, and cellular redox kinetics. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Lyophilized Powder",
    "researchArea": "Cellular Bioenergetics & Sirtuin Activation",
    "variants": [
      { "id": "500mg", "name": "500mg", "price": 199.99, "status": "in_transit" },
      { "id": "1000mg", "name": "1000mg", "price": 249.99, "status": "sold_out" }
    ]
  },
  {
    "id": 16,
    "title": "Retatrutide",
    "price": 199.99,
    "status": "in_stock",
    "image": "/images/retatrutide-10mg.png",
    "category": "Peptides",
    "description": "Retatrutide is a triple agonist peptide targeting GIP, GLP-1, and glucagon receptors. Utilized in multi-receptor interaction studies and metabolic signaling cascades. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Lyophilized Powder",
    "researchArea": "Triple Agonist Receptor Kinetics & Metabolism",
    "variants": [
      { "id": "10mg", "name": "10mg", "price": 199.99, "status": "in_stock" },
      { "id": "20mg", "name": "20mg", "price": 274.99, "status": "sold_out" },
      { "id": "30mg", "name": "30mg", "price": 299.99, "status": "sold_out" }
    ]
  },
  {
    "id": 18,
    "title": "Tesamorelin",
    "price": 109.99,
    "status": "in_stock",
    "image": "/images/tesamorelin-10mg.png",
    "category": "Peptides",
    "description": "Tesamorelin is a growth hormone-releasing factor (GRF) analog studied for pituitary GHRH receptor stimulation and somatotroph transcription dynamics. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Lyophilized Powder",
    "researchArea": "GHRH Receptor Activation & Pituitary Kinetics",
    "variants": [
      { "id": "10mg", "name": "10mg", "price": 109.99, "status": "in_stock" }
    ]
  },
  {
    "id": 19,
    "title": "Tirzepatide",
    "price": 174.99,
    "status": "in_stock",
    "image": "/images/tirzepatide-20mg.png",
    "category": "Peptides",
    "description": "Tirzepatide is a dual GIP and GLP-1 receptor co-agonist peptide manufactured to high purity standards for metabolic pathway research and receptor binding kinetic models. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Lyophilized Powder",
    "researchArea": "Dual GIP/GLP-1 Co-agonist Signaling",
    "variants": [
      { "id": "10mg", "name": "10mg", "price": 174.99, "status": "in_stock" },
      { "id": "20mg", "name": "20mg", "price": 274.99, "status": "in_stock" }
    ]
  },
  {
    "id": 22,
    "title": "KPV",
    "price": 109.99,
    "status": "in_transit",
    "image": "/images/kpv-10mg.png",
    "category": "Peptides",
    "description": "KPV is a tripeptide fragment (Lys-Pro-Val) derived from alpha-MSH, investigated in mucosal cellular signaling, inflammatory pathway downregulation, and antimicrobial peptide dynamics. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Lyophilized Powder",
    "researchArea": "Mucosal Signaling & Anti-inflammatory Cascades",
    "variants": [
      { "id": "10mg", "name": "10mg", "price": 109.99, "status": "in_transit" }
    ]
  },
  {
    "id": 24,
    "title": "AOD-9604",
    "price": 109.99,
    "status": "in_stock",
    "image": "/images/aod-9604-5mg.png",
    "category": "Peptides",
    "description": "AOD-9604 is a C-terminal fragment peptide derived from human growth hormone (hGH 177-191), studied for lipolytic pathway modulation and cartilage matrix interactions. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Lyophilized Powder",
    "researchArea": "Lipolytic Pathway Modulation & Matrix Studies",
    "variants": [
      { "id": "5mg", "name": "5mg", "price": 109.99, "status": "in_stock" },
      { "id": "10mg", "name": "10mg", "price": 139.99, "status": "in_stock" }
    ]
  },
  {
    "id": 25,
    "title": "Selank",
    "price": 109.99,
    "status": "in_transit",
    "image": "/images/selank-10mg.png",
    "category": "Peptides",
    "description": "Selank is a synthetic hexapeptide derivative of tuftsin, utilized in laboratory research exploring GABAergic system modulations, enkephalin degradation inhibition, and immune-neural crosstalk. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Lyophilized Powder",
    "researchArea": "GABAergic Modulation & Neuro-Immune Crosstalk",
    "variants": [
      { "id": "10mg", "name": "10mg", "price": 109.99, "status": "in_transit" }
    ]
  },
  {
    "id": 31,
    "title": "Kisspeptin",
    "price": 109.99,
    "status": "sold_out",
    "image": "/images/kisspeptin-10mg.png",
    "category": "Peptides",
    "description": "Kisspeptin is an endogenous neuropeptide ligand for GPR54 (KISS1R), studied in hypothalamic GnRH pulse generation dynamics and reproductive neuroendocrinology. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Lyophilized Powder",
    "researchArea": "Neuroendocrine Signaling & GPR54 Binding",
    "variants": [
      { "id": "10mg", "name": "10mg", "price": 109.99, "status": "sold_out" }
    ]
  },
  {
    "id": 32,
    "title": "PT-141",
    "price": 109.99,
    "status": "in_transit",
    "image": "/images/pt-141-10mg.png",
    "category": "Peptides",
    "description": "PT-141 (Bremelanotide) is a cyclic peptide melanocortin receptor agonist targeting MC3R and MC4R in central nervous system pathway models. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Lyophilized Powder",
    "researchArea": "Central Melanocortin Receptor Kinetics",
    "variants": [
      { "id": "10mg", "name": "10mg", "price": 109.99, "status": "in_transit" }
    ]
  },
  {
    "id": 34,
    "title": "Insulin",
    "price": 74.99,
    "status": "in_transit",
    "image": "/images/insulin.png",
    "category": "Peptides",
    "description": "Insulin is a high-purity research peptide intended for laboratory investigations into glucose transporter dynamics, insulin receptor signaling cascades, and cellular energy metabolism. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Liquid Solution (3ml)",
    "researchArea": "Receptor Signaling & Glucose Transport Dynamics",
    "variants": [
      { "id": "3ml", "name": "3ML", "price": 74.99, "status": "in_transit" }
    ]
  },
  {
    "id": 36,
    "title": "Lemon Bottle Solution",
    "price": 129.99,
    "status": "in_stock",
    "image": "/images/lemon-bottle.png",
    "category": "Research Solutions",
    "description": "Lemon Bottle Lipolytic Solution is a high-performance research formulation utilizing riboflavin (Vitamin B2), lecithin, and bromelain for targeted adipocyte metabolism and lipid cell degradation kinetics studies. Research Use Only (RUO). Not for human consumption.",
    "purity": "99%+ HPLC Verified",
    "form": "Liquid Solution (50ml)",
    "researchArea": "Adipocyte Metabolism & Lipolytic Kinetics",
    "variants": [
      { "id": "10mg", "name": "10mg", "price": 129.99, "status": "in_stock" }
    ]
  }
];
