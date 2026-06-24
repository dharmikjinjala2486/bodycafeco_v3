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
    imageUrl: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1584017911794-7164a66e4a2e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=800'
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
    imageUrl: 'https://images.unsplash.com/photo-1611536326696-b52be8ef45f6?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1611536326696-b52be8ef45f6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&q=80&w=800'
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
    imageUrl: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1626847037657-fd3622613ce3?auto=format&fit=crop&q=80&w=800'
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
    shortDescription: 'A clinical stack of Alpha-GPC, L-Theanine, Bacopa Monnieri, and Lion’s Mane for flow state focus, mental clarity, and neurogenesis.',
    description: 'Nootropic Brain Booster is a clean, non-stimulant cognitive optimizer designed to cross the blood-brain barrier. By combining acetylcholine precursors, adaptogenic herbs, and medicinal mushroom extracts, it promotes neural transmission speed, neurotransmitter synthesis, and long-term neuroplasticity.',
    benefits: [
      'Induces calm, jitter-free flow state focus and alertness',
      'Improves working memory, verbal recall, and reaction times',
      'Supports Neurotrophic Factors (BDNF) for cellular brain growth',
      'Combats brain fog and mental fatigue during intense work'
    ],
    ingredients: [
      { name: 'Alpha-GPC (L-Alpha-glycerylphosphorylcholine)', dosage: '600 mg' },
      { name: 'Organic Lion’s Mane Mushroom Extract (Water Extracted)', dosage: '500 mg' },
      { name: 'Bacopa Monnieri Extract (50% Bacosides)', dosage: '300 mg' },
      { name: 'L-Theanine (Bio-Identical)', dosage: '200 mg' },
      { name: 'Phosphatidylserine', dosage: '100 mg' }
    ],
    howToUse: 'Take 3 capsules in the morning with a light meal or coffee. Do not exceed 6 capsules in a 24-hour period.',
    servingSize: '3 Vegan Capsules',
    servingsPerContainer: 30,
    tags: ['Mental Focus', 'Memory Support', 'Neurogenesis', 'Caffeine-Free'],
    imageUrl: 'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800'
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
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=800'
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
    imageUrl: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
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
    imageUrl: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1611536326696-b52be8ef45f6?auto=format&fit=crop&q=80&w=800'
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
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800'
    ]
  }
];
