export interface Review {
  id: string;
  productId: string; // matches product.id
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  helpfulCount: number;
  tags?: string[];
  imageUrl?: string;
}

export const reviews: Review[] = [
  // Omega-3 reviews
  {
    id: 'rev-1',
    productId: 'omega-3',
    author: 'Aravind S.',
    rating: 5,
    date: 'June 12, 2026',
    title: 'Noticeable difference in brain fog',
    comment: 'I have tried 4-5 different brands of fish oil. This one from Body Cafe Co. has the highest EPA and DHA concentrations per serving that I could find. After 2 weeks, my afternoon brain fog is completely gone, and there is zero fishy aftertaste. The capsule quality is outstanding.',
    verified: true,
    helpfulCount: 28,
    tags: ['Brain Health', 'No Aftertaste']
  },
  {
    id: 'rev-2',
    productId: 'omega-3',
    author: 'Meera K.',
    rating: 5,
    date: 'May 24, 2026',
    title: 'Excellent joint relief',
    comment: 'As a long-distance runner, knee stiffness is a regular issue. Taking these daily has significantly reduced joint inflammation. Highly recommend the monthly subscription, it works out much cheaper.',
    verified: true,
    helpfulCount: 19,
    tags: ['Joint Mobility']
  },
  {
    id: 'rev-3',
    productId: 'omega-3',
    author: 'Vikram D.',
    rating: 4,
    date: 'May 02, 2026',
    title: 'Great product, but frequently out of stock',
    comment: 'The quality is superb and third-party lab results are easily accessible, which gives me massive confidence. Docked 1 star because it was out of stock for a week last month. Keep up the inventory!',
    verified: true,
    helpfulCount: 14
  },
  
  // Creatine reviews
  {
    id: 'rev-4',
    productId: 'creatine',
    author: 'Rohan M.',
    rating: 5,
    date: 'June 19, 2026',
    title: 'Mixes instantly, no stomach issues',
    comment: 'Most creatine powders leave a gritty sludge at the bottom of the glass. This micro-milled version dissolves completely in cold water. I have been taking 5g daily and have noticed a clear bump in my strength limits and muscle fullness.',
    verified: true,
    helpfulCount: 42,
    tags: ['Instant Mixability', 'No Bloating'],
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'rev-5',
    productId: 'creatine',
    author: 'Neha P.',
    rating: 5,
    date: 'May 30, 2026',
    title: 'Pure performance staple',
    comment: 'Clean, no-frills, 100% pure creatine. I mix it into my morning protein shake. No artificial flavors or sweeteners. Exactly what I was looking for.',
    verified: true,
    helpfulCount: 22
  },

  // Vitamin D3 + K2 reviews
  {
    id: 'rev-6',
    productId: 'vit-d3-k2',
    author: 'Kabir G.',
    rating: 5,
    date: 'June 08, 2026',
    title: 'My lab results confirm it works',
    comment: 'My blood test showed D3 levels at 18 ng/mL (severely deficient). After 2 months on this liposomal D3+K2, my levels shot up to 58 ng/mL. The absorption is clearly real. The addition of K2 gives me peace of mind about arterial safety.',
    verified: true,
    helpfulCount: 37,
    tags: ['Proven Absorption']
  },
  {
    id: 'rev-7',
    productId: 'vit-d3-k2',
    author: 'Dr. Shruti W.',
    rating: 5,
    date: 'May 14, 2026',
    title: 'Clinically sound formulation',
    comment: 'As a general practitioner, I recommend D3+K2 to almost all my patients. Body Cafe Co has nailed the dosages and uses high-grade liposomal matrix. Clean ingredients list, no cheap fillers.',
    verified: true,
    helpfulCount: 51,
    tags: ['Doctor Recommended']
  },

  // Nootropic reviews
  {
    id: 'rev-8',
    productId: 'nootropic',
    author: 'Siddharth R.',
    rating: 5,
    date: 'June 21, 2026',
    title: 'Laser focus without the jitters',
    comment: 'I use this instead of a third cup of coffee. It creates this calm, steady focus that lasts all afternoon. No palpitations, no caffeine crash, just smooth cognitive output. Lion’s mane and Alpha GPC stack is brilliant.',
    verified: true,
    helpfulCount: 31,
    tags: ['Flow State Focus', 'No Caffeine Jitters']
  },
  {
    id: 'rev-9',
    productId: 'nootropic',
    author: 'Ananya L.',
    rating: 4,
    date: 'June 01, 2026',
    title: 'Impressive memory recall',
    comment: 'Takes about 3-4 days to notice, but my verbal recall has definitely sharpened. I remember names and details from client calls much quicker. Giving it 4 stars because you have to take 3 large capsules, which can be annoying.',
    verified: true,
    helpfulCount: 16
  },

  // Longevity reviews
  {
    id: 'rev-10',
    productId: 'longevity',
    author: 'Aditya V.',
    rating: 5,
    date: 'June 15, 2026',
    title: 'Feeling energized and youthful',
    comment: 'Im 48 and was feeling sluggish daily. Been on the Longevity Complex (NMN + Resveratrol) for 3 months now. My morning energy levels are back to what they were in my 30s. Subscribing for the long haul.',
    verified: true,
    helpfulCount: 25,
    tags: ['Mitochondrial Energy']
  },
  {
    id: 'rev-11',
    productId: 'longevity',
    author: 'Priya N.',
    rating: 5,
    date: 'May 18, 2026',
    title: 'Premium cellular insurance',
    comment: 'The research on NMN and Resveratrol is extremely compelling, and Body Cafe Co does not cut corners on purity. They publish their 3rd party testing reports on the site. Perfect formulation.',
    verified: true,
    helpfulCount: 12
  },

  // Magnesium L-Threonate reviews
  {
    id: 'rev-12',
    productId: 'magnesium',
    author: 'Divya M.',
    rating: 5,
    date: 'June 23, 2026',
    title: 'Deep, restorative sleep unlocked',
    comment: 'I wear a sleep tracker (Oura ring) and my deep sleep scores have averaged a 30% increase since starting this magnesium threonate. I fall asleep faster and wake up feeling incredibly refreshed. Brain feels sharp.',
    verified: true,
    helpfulCount: 48,
    tags: ['Deep Sleep Boost', 'Oura Approved']
  },

  // Collagen reviews
  {
    id: 'rev-13',
    productId: 'collagen',
    author: 'Riya K.',
    rating: 5,
    date: 'June 17, 2026',
    title: 'Great for skin and nails',
    comment: 'Been mixing this into my morning coffee for 6 weeks. It is completely odorless and tasteless, dissolves perfectly. My nails are growing like crazy and my skin feels much more hydrated. Grass-fed source is a must.',
    verified: true,
    helpfulCount: 29
  },

  // Pre-Workout reviews
  {
    id: 'rev-14',
    productId: 'pre-workout',
    author: 'Tushar D.',
    rating: 5,
    date: 'June 20, 2026',
    title: 'Incredible pumps, no crash',
    comment: 'The Citrulline dosage (6g) is where it needs to be. Gives a massive muscle pump and vascularity. The energy is clean and sustained—no tingling itch or sudden energy drop. Best pre-workout on the market.',
    verified: true,
    helpfulCount: 35
  }
];

export const testimonialHighlights = [
  {
    quote: "My Oura sleep scores have averaged a 30% increase in Deep Sleep since starting Magnesium L-Threonate. I wake up feeling incredibly refreshed, and my brain feels sharp.",
    author: "Divya M.",
    role: "Verified Purchaser",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "My blood test showed D3 levels at 18 ng/mL. After 2 months on this liposomal D3+K2, my levels shot up to 58 ng/mL. The absorption is clearly real.",
    author: "Kabir G.",
    role: "Verified Purchaser",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "As a general practitioner, I recommend D3+K2 to almost all my patients. Body Cafe Co has nailed the dosages and uses high-grade liposomal matrix. Clean ingredients, no cheap fillers.",
    author: "Dr. Shruti W.",
    role: "General Physician",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150"
  }
];
