export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'Daily Essentials' | 'Performance' | 'Longevity' | 'Cognitive Health';
  price: number;
  salePrice?: number;
  subscriptionDiscount: number; // e.g. 15 for 15% off
  rating: number;
  reviewsCount: number;
  shortDescription: string;
  description: string;
  benefits: string[];
  ingredients: { name: string; dosage: string; dailyValue?: string }[];
  howToUse: string;
  servingSize: string;
  servingsPerContainer: number;
  tags: string[];
  imageUrl: string;
  galleryUrls: string[];
}

export const products: Product[] = [
  {
    id: 'omega-3',
    name: 'Omega-3 Pure Antarctic Fish Oil',
    slug: 'omega-3-fish-oil',
    category: 'Daily Essentials',
    price: 1499,
    salePrice: 1299,
    subscriptionDiscount: 15,
    rating: 4.9,
    reviewsCount: 342,
    shortDescription: 'Ultra-concentrated, molecularly distilled Omega-3 fatty acids for cognitive synergy, cardiovascular health, and joint mobility.',
    description: 'Our Omega-3 Pure Antarctic Fish Oil is sourced from wild-caught, sustainable marine reserves. Utilizing an advanced multi-stage molecular distillation process, we achieve clinical concentration levels of EPA (800mg) and DHA (600mg) per serving, completely free from heavy metals, PCBs, and oxidation products.',
    benefits: [
      'Enhances cognitive performance, memory recall, and focus',
      'Supports healthy cardiovascular function and arterial elasticity',
      'Reduces systemic inflammation to aid joint comfort and recovery',
      'Optimizes cellular membrane health throughout the body'
    ],
    ingredients: [
      { name: 'Total Omega-3 Fatty Acids', dosage: '1500 mg' },
      { name: 'EPA (Eicosapentaenoic Acid)', dosage: '800 mg' },
      { name: 'DHA (Docosahexaenoic Acid)', dosage: '600 mg' },
      { name: 'Other Omega-3 Fatty Acids', dosage: '100 mg' },
      { name: 'Astaxanthin (Antarctic Krill extract)', dosage: '2 mg' }
    ],
    howToUse: 'Take 2 softgels daily in the morning with a fat-containing meal to maximize absorption, or as directed by your healthcare professional.',
    servingSize: '2 Softgels',
    servingsPerContainer: 30,
    tags: ['Heart Health', 'Brain Health', 'Joint Support', 'Daily Essential'],
    imageUrl: '/Producta/Fish Oil.png',
    galleryUrls: [
      '/Producta/Fish Oil.png',
    ]
  },
  {
    id: 'creatine',
    name: 'Creatine Monohydrate (Micro-milled Elite)',
    slug: 'creatine-monohydrate',
    category: 'Performance',
    price: 999,
    salePrice: 899,
    subscriptionDiscount: 15,
    rating: 4.8,
    reviewsCount: 521,
    shortDescription: '100% pure micro-milled creatine monohydrate to maximize cellular ATP production, muscle power, output, and cognitive stamina.',
    description: 'Engineered for absolute purity and absorption. Our Creatine Monohydrate is micro-milled to 200 mesh, ensuring instantaneous mixability and preventing GI discomfort. Creatine is the most scientifically validated performance supplement in the world, essential for rapid ATP synthesis and cellular energy buffering.',
    benefits: [
      'Accelerates muscular strength, explosive power, and work output',
      'Increases cellular hydration for muscle fullness and recovery',
      'Enhances cognitive performance under physical and mental fatigue',
      'Supports neuroprotective pathways and cellular energy buffer'
    ],
    ingredients: [
      { name: 'Pure Creatine Monohydrate', dosage: '5000 mg', dailyValue: '100%' }
    ],
    howToUse: 'Mix 1 scoop (5g) with 250ml of water, juice, or your post-workout shake. Consume daily. No loading phase required, but consistency is key for muscle saturation.',
    servingSize: '1 Scoop (5g)',
    servingsPerContainer: 60,
    tags: ['Strength', 'ATP Output', 'Brain Support', 'Clean Sport'],
    imageUrl: '/Producta/Creatine Monohydrate (Micronized).png',
    galleryUrls: [
      '/Producta/Creatine Monohydrate (Micronized).png',
    ]
  },
  {
    id: 'vit-d3-k2',
    name: 'Vitamin D3 + K2 (Liposomal Synergy)',
    slug: 'vitamin-d3-k2',
    category: 'Daily Essentials',
    price: 799,
    salePrice: 699,
    subscriptionDiscount: 15,
    rating: 4.95,
    reviewsCount: 289,
    shortDescription: 'High-potency D3 combined with bioactive K2 (MK-7) in a liposomal matrix to optimize calcium absorption and arterial defense.',
    description: 'Vitamin D3 requires Vitamin K2 to ensure calcium is properly deposited in the bones and teeth rather than arterial walls. Our liposomal delivery system encapsulation shields these fat-soluble vitamins from digestive enzymes, allowing direct cellular uptake for skeletal strength, immune vigor, and vascular health.',
    benefits: [
      'Coordinates correct calcium distribution to bones and teeth',
      'Supports peak immune response and respiratory health',
      'Promotes cardiovascular safety and arterial flexibility',
      'Enhances mood regulation and natural hormone balance'
    ],
    ingredients: [
      { name: 'Vitamin D3 (as Cholecalciferol from Lichen)', dosage: '5000 IU (125 mcg)', dailyValue: '625%' },
      { name: 'Vitamin K2 (as Menaquinone-7 / MK-7)', dosage: '100 mcg', dailyValue: '83%' },
      { name: 'Liposomal Phospholipid Complex', dosage: '200 mg' }
    ],
    howToUse: 'Take 1 capsule daily with food, preferably in the morning to align with your natural circadian rhythm.',
    servingSize: '1 Liquid Capsule',
    servingsPerContainer: 60,
    tags: ['Bone Density', 'Immune Defense', 'Longevity', 'Vegan Resource'],
    imageUrl: '/Producta/D3 + K2.png',
    galleryUrls: [
      '/Producta/D3 + K2.png',
    ]
  },
  {
    id: 'magnesium',
    name: 'Magnesium L-Threonate (Neuro-Mag)',
    slug: 'magnesium-l-threonate',
    category: 'Cognitive Health',
    price: 1699,
    salePrice: 1499,
    subscriptionDiscount: 15,
    rating: 4.9,
    reviewsCount: 176,
    shortDescription: 'The only form of magnesium validated to effectively cross the blood-brain barrier to promote synapse density, sleep quality, and calm.',
    description: 'Magnesium L-Threonate was developed at MIT to solve a critical limitation of other magnesium forms: brain bioavailability. By crossing the blood-brain barrier, it elevates cerebrospinal fluid magnesium, supporting synaptic density, calming nervous system excitability, and optimizing slow-wave sleep cycles.',
    benefits: [
      'Crosses the blood-brain barrier to optimize neural magnesium levels',
      'Improves executive function, attention, and memory consolidation',
      'Promotes restorative deep sleep and calms racing thoughts',
      'Supports healthy neural connections and synapse plasticity'
    ],
    ingredients: [
      { name: 'Magnesium L-Threonate (Magtein®)', dosage: '2000 mg' },
      { name: '  yielding Elemental Magnesium', dosage: '144 mg', dailyValue: '34%' }
    ],
    howToUse: 'Take 3 capsules daily. We recommend 1 capsule in the afternoon and 2 capsules 1 hour before sleep to support circadian rest.',
    servingSize: '3 Vegan Capsules',
    servingsPerContainer: 30,
    tags: ['Deep Sleep', 'Synapse Density', 'Nervous Calm', 'Brain Bioactive'],
    imageUrl: '/Producta/Magnesium.png',
    galleryUrls: [
      '/Producta/Magnesium.png',
    ]
  },
  {
    id: 'l-theanine',
    name: 'L-Theanine (Pure Calm Focus)',
    slug: 'l-theanine',
    category: 'Cognitive Health',
    price: 899,
    salePrice: 799,
    subscriptionDiscount: 15,
    rating: 4.8,
    reviewsCount: 213,
    shortDescription: 'Pharmaceutical-grade L-Theanine derived from green tea to promote calm alertness, reduce stress, and sharpen focus without sedation.',
    description: 'L-Theanine is a naturally occurring amino acid found in green tea leaves that promotes a state of relaxed alertness by modulating alpha brain wave activity. Our pharmaceutical-grade L-Theanine is produced via enzymatic synthesis for 100% purity, free from any plant contaminants. It works synergistically with caffeine to eliminate jitters and extend focus duration.',
    benefits: [
      'Induces calm, alert mental state without drowsiness or sedation',
      'Reduces physiological and psychological stress responses',
      'Synergizes with caffeine for sustained, clean focus',
      'Promotes alpha brain wave activity for creative flow states'
    ],
    ingredients: [
      { name: 'L-Theanine (Suntheanine®)', dosage: '200 mg', dailyValue: '*' }
    ],
    howToUse: 'Take 1–2 capsules daily. For focus, take with morning coffee. For relaxation, take 30 minutes before a stressful event or before bedtime.',
    servingSize: '1 Vegan Capsule',
    servingsPerContainer: 60,
    tags: ['Calm Focus', 'Stress Relief', 'Sleep Support', 'Caffeine Synergy'],
    imageUrl: '/Producta/L-Theanine.png',
    galleryUrls: [
      '/Producta/L-Theanine.png',
    ]
  },
  {
    id: 'affron-saffron',
    name: 'Affron® Saffron Extract',
    slug: 'affron-saffron-extract',
    category: 'Cognitive Health',
    price: 1299,
    salePrice: 1099,
    subscriptionDiscount: 15,
    rating: 4.85,
    reviewsCount: 147,
    shortDescription: 'Clinically-studied Affron® saffron extract standardized to 3.5% Lepticrosalide® for mood elevation, emotional well-being, and cognitive resilience.',
    description: 'Affron® is the world\'s most clinically researched saffron extract, standardized to 3.5% Lepticrosalide® — the unique bioactive compound responsible for saffron\'s adaptogenic properties. Derived from Crocus sativus pistils cultivated in Spain, each batch is rigorously tested for purity, potency, and absence of adulterants. Clinical trials demonstrate significant improvements in mood, emotional resilience, and sleep quality.',
    benefits: [
      'Clinically shown to improve mood and emotional well-being',
      'Supports healthy serotonin and dopamine neurotransmitter balance',
      'Reduces cortisol levels and promotes stress resilience',
      'Improves sleep quality and nighttime recovery'
    ],
    ingredients: [
      { name: 'Affron® Saffron Extract (Crocus sativus, stigmas)', dosage: '28 mg' },
      { name: '  standardized to 3.5% Lepticrosalide®', dosage: '~1 mg' }
    ],
    howToUse: 'Take 1 capsule daily with a meal. For optimal mood benefits, consistent daily use for 4–8 weeks is recommended.',
    servingSize: '1 Vegan Capsule',
    servingsPerContainer: 60,
    tags: ['Mood Support', 'Stress Relief', 'Sleep Quality', 'Emotional Wellness'],
    imageUrl: '/Producta/Affron® Saffron Extract.png',
    galleryUrls: [
      '/Producta/Affron® Saffron Extract.png',
    ]
  },
  {
    id: 'beetroot',
    name: 'Beetroot (TruBeet®)',
    slug: 'beetroot-trubeet',
    category: 'Performance',
    price: 1099,
    salePrice: 949,
    subscriptionDiscount: 15,
    rating: 4.75,
    reviewsCount: 189,
    shortDescription: 'TruBeet® concentrated beetroot extract delivering a potent dose of dietary nitrates to boost nitric oxide, endurance, and cardiovascular efficiency.',
    description: 'TruBeet® is a premium, concentrated whole beetroot powder standardized for dietary nitrate content. Beetroot nitrates are converted in the body to nitric oxide (NO), a key vasodilator that expands blood vessels, improves oxygen delivery to muscles, and reduces the oxygen cost of exercise. This translates directly into enhanced athletic endurance, faster recovery, and better cardiovascular efficiency.',
    benefits: [
      'Elevates nitric oxide production for enhanced blood flow and muscle pump',
      'Reduces oxygen cost of submaximal exercise to extend endurance',
      'Supports healthy blood pressure within normal range',
      'Loaded with antioxidant betalains for cellular protection'
    ],
    ingredients: [
      { name: 'TruBeet® Concentrated Whole Beetroot (Beta vulgaris)', dosage: '500 mg' },
      { name: 'Dietary Nitrates (as Beetroot Nitrate)', dosage: '~200 mg' }
    ],
    howToUse: 'Take 2 capsules 30–60 minutes before exercise, or as a daily cardiovascular supplement with food.',
    servingSize: '2 Vegan Capsules',
    servingsPerContainer: 30,
    tags: ['Nitric Oxide', 'Endurance', 'Cardiovascular', 'Athletic Performance'],
    imageUrl: '/Producta/Beetroot (TruBeet®).png',
    galleryUrls: [
      '/Producta/Beetroot (TruBeet®).png',
    ]
  },
  {
    id: 'berberine-cinnamon',
    name: 'Berberine + Cinnamon',
    slug: 'berberine-cinnamon',
    category: 'Longevity',
    price: 1399,
    salePrice: 1199,
    subscriptionDiscount: 15,
    rating: 4.8,
    reviewsCount: 234,
    shortDescription: 'A powerful metabolic synergy of pharmaceutical-grade Berberine HCl and Ceylon Cinnamon for blood sugar regulation, insulin sensitivity, and metabolic health.',
    description: 'Berberine is one of the most well-researched compounds for metabolic health, shown in multiple clinical trials to rival pharmaceutical interventions for blood glucose management. Combined with Ceylon Cinnamon — shown to improve insulin receptor sensitivity — this powerful duo creates a comprehensive metabolic optimization formula that supports healthy body composition, energy stability, and longevity pathways (including AMPK activation).',
    benefits: [
      'Activates AMPK — the metabolic master switch for energy balance',
      'Supports healthy blood glucose levels and insulin sensitivity',
      'Promotes healthy cholesterol and triglyceride levels',
      'Synergizes with Ceylon Cinnamon for enhanced metabolic control'
    ],
    ingredients: [
      { name: 'Berberine HCl (from Berberis aristata root)', dosage: '500 mg' },
      { name: 'Ceylon Cinnamon (Cinnamomum verum bark)', dosage: '300 mg' }
    ],
    howToUse: 'Take 1 capsule 2–3 times daily with meals. Start with 1 capsule per day and gradually increase to assess tolerance.',
    servingSize: '1 Vegan Capsule',
    servingsPerContainer: 90,
    tags: ['Blood Sugar', 'Metabolic Health', 'AMPK Activator', 'Longevity'],
    imageUrl: '/Producta/Berberine + Cinnamon.png',
    galleryUrls: [
      '/Producta/Berberine + Cinnamon.png',
    ]
  },
  {
    id: 'iron-bisglycinate',
    name: 'Iron Bisglycinate',
    slug: 'iron-bisglycinate',
    category: 'Daily Essentials',
    price: 749,
    salePrice: 649,
    subscriptionDiscount: 15,
    rating: 4.85,
    reviewsCount: 158,
    shortDescription: 'Highly bioavailable iron chelated with glycine for superior absorption, energy production, and hemoglobin synthesis with minimal GI side effects.',
    description: 'Iron Bisglycinate (iron chelated with two glycine molecules) is the gold standard form of supplemental iron, offering dramatically superior absorption rates compared to iron sulfate or fumarate, while being exceptionally gentle on the digestive system. This form directly enters the intestinal cells via a separate amino acid transport pathway, bypassing the competitive mineral absorption pathways that reduce other iron forms\' effectiveness.',
    benefits: [
      'Superior bioavailability vs. traditional iron sulfate forms',
      'Supports healthy red blood cell and hemoglobin production',
      'Reduces fatigue and supports energy metabolism (B12 & folate synergy)',
      'Gentle on the stomach — no constipation or GI distress'
    ],
    ingredients: [
      { name: 'Iron (as Ferrous Bisglycinate Chelate)', dosage: '25 mg', dailyValue: '139%' }
    ],
    howToUse: 'Take 1 capsule daily with or without food. For optimal absorption, take with Vitamin C. Avoid taking with calcium supplements or dairy within 2 hours.',
    servingSize: '1 Vegan Capsule',
    servingsPerContainer: 60,
    tags: ['Energy Production', 'Hemoglobin', 'Iron Deficiency', 'Gentle Formula'],
    imageUrl: '/Producta/Iron Bisglycinate.png',
    galleryUrls: [
      '/Producta/Iron Bisglycinate.png',
    ]
  },
  {
    id: 'myo-inositol',
    name: 'Myo-Inositol + D-Chiro Inositol',
    slug: 'myo-inositol-d-chiro',
    category: 'Daily Essentials',
    price: 1199,
    salePrice: 999,
    subscriptionDiscount: 15,
    rating: 4.9,
    reviewsCount: 271,
    shortDescription: 'A clinically validated 40:1 ratio of Myo-Inositol to D-Chiro Inositol to support hormonal balance, ovarian function, and insulin sensitivity.',
    description: 'Myo-Inositol and D-Chiro Inositol are two naturally occurring forms of inositol that act as secondary messengers in insulin signaling. Clinical research, particularly in women with PCOS, has demonstrated that the physiological 40:1 ratio (mirroring the body\'s natural ratio) optimally supports ovarian function, menstrual regularity, and insulin sensitivity. Our formula is unflavored and dissolves instantly for easy daily use.',
    benefits: [
      'Supports hormonal balance and regular menstrual cycles (PCOS)',
      'Improves insulin sensitivity and metabolic glucose handling',
      'Promotes healthy oocyte quality and ovarian function',
      'Reduces androgen levels and associated symptoms'
    ],
    ingredients: [
      { name: 'Myo-Inositol', dosage: '2000 mg' },
      { name: 'D-Chiro Inositol', dosage: '50 mg' }
    ],
    howToUse: 'Mix 1 scoop in 200ml of water or juice. Take twice daily — once in the morning and once in the evening with meals.',
    servingSize: '1 Scoop (2.05g)',
    servingsPerContainer: 60,
    tags: ['PCOS Support', 'Hormonal Balance', 'Insulin Sensitivity', 'Fertility'],
    imageUrl: '/Producta/Myo-Inositol + D-Chiro.png',
    galleryUrls: [
      '/Producta/Myo-Inositol + D-Chiro.png',
    ]
  },
  {
    id: 'psyllium-husk',
    name: 'Psyllium Husk (Isabgul)',
    slug: 'psyllium-husk',
    category: 'Daily Essentials',
    price: 599,
    salePrice: 499,
    subscriptionDiscount: 15,
    rating: 4.7,
    reviewsCount: 312,
    shortDescription: 'Premium 99% pure Psyllium Husk powder — nature\'s most powerful soluble fiber for gut health, cholesterol management, and healthy blood sugar regulation.',
    description: 'Psyllium Husk (Plantago ovata seed husk) is a natural, soluble dietary fiber that forms a viscous gel in the digestive tract, acting as a prebiotic to feed beneficial gut bacteria. It is one of the very few dietary supplements approved by the FDA for cholesterol reduction claims. Our 99% pure psyllium husk is free from additives, artificial flavors, and synthetic fillers.',
    benefits: [
      'Feeds beneficial gut microbiome as a premium prebiotic fiber',
      'Clinically demonstrated to reduce LDL cholesterol levels',
      'Promotes regular bowel movements and digestive comfort',
      'Slows glucose absorption to support stable blood sugar levels'
    ],
    ingredients: [
      { name: 'Organic Psyllium Husk Powder (Plantago ovata)', dosage: '5000 mg', dailyValue: '18%' },
      { name: 'Dietary Fiber', dosage: '4.5 g', dailyValue: '16%' }
    ],
    howToUse: 'Mix 1 teaspoon (5g) in 250ml of water or juice. Drink immediately before it gels. Take 1–2 times daily. Always drink plenty of water throughout the day.',
    servingSize: '1 Teaspoon (5g)',
    servingsPerContainer: 60,
    tags: ['Gut Health', 'Cholesterol', 'Digestive Fiber', 'Blood Sugar'],
    imageUrl: '/Producta/Psyllium Husk (Isabgul).png',
    galleryUrls: [
      '/Producta/Psyllium Husk (Isabgul).png',
    ]
  },
  {
    id: 'nootropic',
    name: 'Nootropic Brain Booster (Cognitive Focus)',
    slug: 'nootropic-brain-booster',
    category: 'Cognitive Health',
    price: 1899,
    salePrice: 1699,
    subscriptionDiscount: 15,
    rating: 4.7,
    reviewsCount: 198,
    shortDescription: 'A clinical stack of Alpha-GPC, L-Theanine, Bacopa Monnieri, and Lion\'s Mane for flow state focus, mental clarity, and neurogenesis.',
    description: 'Nootropic Brain Booster is a clean, non-stimulant cognitive optimizer designed to cross the blood-brain barrier. By combining acetylcholine precursors, adaptogenic herbs, and medicinal mushroom extracts, it promotes neural transmission speed, neurotransmitter synthesis, and long-term neuroplasticity.',
    benefits: [
      'Induces calm, jitter-free flow state focus and alertness',
      'Improves working memory, verbal recall, and reaction times',
      'Supports Neurotrophic Factors (BDNF) for cellular brain growth',
      'Combats brain fog and mental fatigue during intense work'
    ],
    ingredients: [
      { name: 'Alpha-GPC (L-Alpha-glycerylphosphorylcholine)', dosage: '600 mg' },
      { name: 'Organic Lion\'s Mane Mushroom Extract (Water Extracted)', dosage: '500 mg' },
      { name: 'Bacopa Monnieri Extract (50% Bacosides)', dosage: '300 mg' },
      { name: 'L-Theanine (Bio-Identical)', dosage: '200 mg' },
      { name: 'Phosphatidylserine', dosage: '100 mg' }
    ],
    howToUse: 'Take 3 capsules in the morning with a light meal or coffee. Do not exceed 6 capsules in a 24-hour period.',
    servingSize: '3 Vegan Capsules',
    servingsPerContainer: 30,
    tags: ['Mental Focus', 'Memory Support', 'Neurogenesis', 'Caffeine-Free'],
    imageUrl: '/Producta/L-Theanine.png',
    galleryUrls: [
      '/Producta/L-Theanine.png',
    ]
  },
  {
    id: 'longevity',
    name: 'Longevity Complex (Cellular NAD+ Activator)',
    slug: 'longevity-complex',
    category: 'Longevity',
    price: 2999,
    salePrice: 2499,
    subscriptionDiscount: 15,
    rating: 4.85,
    reviewsCount: 112,
    shortDescription: 'Advanced cellular protection stacking NMN, Trans-Resveratrol, Quercetin, and Apigenin to activate sirtuins and optimize NAD+ levels.',
    description: 'Target the core hallmarks of biological aging. Our Longevity Complex activates sirtuins, suppresses cellular senescence, and supplies building blocks for NAD+ synthesis. By preserving mitochondrial performance and combating cellular oxidative stress, this formula supports longevity pathways from the inside out.',
    benefits: [
      'Elevates cellular energy production and mitochondrial efficiency',
      'Activates SIRT1 and SIRT6 longevity genes',
      'Helps clear senescent cells and reduce systemic age-related decline',
      'Supports DNA repair mechanisms and cardiovascular resilience'
    ],
    ingredients: [
      { name: 'NMN (Beta-Nicotinamide Mononucleotide)', dosage: '500 mg' },
      { name: 'Trans-Resveratrol (98% Ultra-Pure)', dosage: '300 mg' },
      { name: 'Quercetin Phytosome', dosage: '250 mg' },
      { name: 'Apigenin (from Chamomile extract)', dosage: '50 mg' }
    ],
    howToUse: 'Take 2 capsules daily upon waking, on an empty stomach, to align with natural peak NAD+ levels and maximize absorption.',
    servingSize: '2 Capsules',
    servingsPerContainer: 30,
    tags: ['Cellular Energy', 'DNA Repair', 'Mitochondrial Health', 'Longevity Core'],
    imageUrl: '/Producta/Berberine + Cinnamon.png',
    galleryUrls: [
      '/Producta/Berberine + Cinnamon.png',
    ]
  },
  {
    id: 'collagen',
    name: 'Hydrolyzed Collagen Peptides',
    slug: 'hydrolyzed-collagen-peptides',
    category: 'Daily Essentials',
    price: 1999,
    salePrice: 1799,
    subscriptionDiscount: 15,
    rating: 4.75,
    reviewsCount: 304,
    shortDescription: 'Grass-fed, pasture-raised Type I & III collagen peptides, enzymatically hydrolyzed for maximum structural support of skin, joints, and gut.',
    description: 'Our Collagen Peptides are sourced exclusively from pasture-raised, grass-fed bovine hides. Hydrolyzed to low molecular weight bio-peptides (under 3,000 Daltons), they are rapidly absorbed to stimulate natural collagen synthesis, strengthening the structural integrity of skin, hair, joints, and digestive lining.',
    benefits: [
      'Promotes skin elasticity, dermal moisture retention, and tone',
      'Strengthens connective tissues, joint cartilage, and tendons',
      'Supports integrity of the intestinal lining (gut barrier)',
      'Provides high concentration of glycine, proline, and hydroxyproline'
    ],
    ingredients: [
      { name: 'Hydrolyzed Bovine Collagen Peptides', dosage: '11 g', dailyValue: '100%' },
      { name: 'Protein', dosage: '10 g', dailyValue: '20%' },
      { name: 'Sodium', dosage: '50 mg', dailyValue: '2%' }
    ],
    howToUse: 'Mix 1 scoop (11g) into your hot or cold beverage of choice (coffee, tea, smoothie, or water). Stir thoroughly. Consumed daily.',
    servingSize: '1 Scoop (11g)',
    servingsPerContainer: 41,
    tags: ['Joint Strength', 'Dermal Elasticity', 'Gut Lining', 'Grass-Fed'],
    imageUrl: '/Producta/Psyllium Husk (Isabgul).png',
    galleryUrls: [
      '/Producta/Psyllium Husk (Isabgul).png',
    ]
  },
  {
    id: 'pre-workout',
    name: 'Pre-Workout Ignition (Clean Performance)',
    slug: 'pre-workout-ignition',
    category: 'Performance',
    price: 2199,
    salePrice: 1999,
    subscriptionDiscount: 15,
    rating: 4.8,
    reviewsCount: 145,
    shortDescription: 'A clinical dose of L-Citrulline, Beta-Alanine, and natural caffeine for clean nitric oxide expansion, muscular endurance, and neural drive.',
    description: 'Ditch the jitter-inducing chemicals. Pre-Workout Ignition provides clean, clinically-backed performance enhancers. Formulated with natural green coffee bean caffeine and calming L-Theanine to extend focus, alongside massive nitric oxide precursors and muscular acid buffers to push your training limits.',
    benefits: [
      'Maximizes nitric oxide production for enhanced blood flow and pump',
      'Beta-Alanine buffers muscle lactic acid to delay time-to-exhaustion',
      'Sustained mental drive without the post-workout energy crash',
      'Includes ElevATP® to stimulate cellular ATP production'
    ],
    ingredients: [
      { name: 'L-Citrulline Malate (2:1)', dosage: '6000 mg' },
      { name: 'Beta-Alanine (CarnoSyn®)', dosage: '3200 mg' },
      { name: 'Natural Caffeine (from Green Coffee Bean)', dosage: '150 mg' },
      { name: 'L-Theanine', dosage: '150 mg' },
      { name: 'ElevATP® (Ancient peat & apple extract)', dosage: '150 mg' }
    ],
    howToUse: 'Mix 1 scoop with 300–400ml of cold water. Consume 20–30 minutes prior to exercise. Assess tolerance with a half-scoop first.',
    servingSize: '1 Scoop (12g)',
    servingsPerContainer: 30,
    tags: ['Muscle Pump', 'Endurance Buffer', 'Clean Power', 'Natural Drive'],
    imageUrl: '/Producta/Beetroot (TruBeet®).png',
    galleryUrls: [
      '/Producta/Beetroot (TruBeet®).png',
    ]
  }
];
