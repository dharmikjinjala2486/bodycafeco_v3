export interface QuizQuestion {
  id: string;
  question: string;
  subtitle?: string;
  type: 'single-choice' | 'multi-choice';
  options: {
    value: string;
    label: string;
    description?: string;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'goal',
    question: 'What is your primary health or wellness objective?',
    subtitle: 'This helps us select the foundational formula for your custom stack.',
    type: 'single-choice',
    options: [
      { value: 'cognitive', label: 'Mental Clarity & Cognitive Performance', description: 'Enhance focus, reduce brain fog, improve memory recall.' },
      { value: 'performance', label: 'Athletic Performance & Physical Output', description: 'Build strength, increase explosive power, accelerate recovery.' },
      { value: 'longevity', label: 'Cellular Health & Longevity', description: 'Support healthy biological aging, DNA repair, and NAD+ levels.' },
      { value: 'essentials', label: 'Daily Vitality & Immune Balance', description: 'Cover foundational micronutrients, cardiovascular health, and bone strength.' }
    ]
  },
  {
    id: 'diet',
    question: 'How would you describe your primary dietary pattern?',
    subtitle: 'Certain diets require specific nutritional support (e.g. vegan/vegetarian D3/B12).',
    type: 'single-choice',
    options: [
      { value: 'vegan-vegetarian', label: 'Vegan or Vegetarian', description: '100% plant-based or dairy/egg inclusive.' },
      { value: 'keto-lowcarb', label: 'Keto, Paleo, or Low-Carb', description: 'High fat/protein, minimal carbohydrate intake.' },
      { value: 'balanced', label: 'Balanced / Omnivorous', description: 'A diverse mix of proteins, grains, and vegetables.' },
      { value: 'other', label: 'Sensitivities / Intermittent Fasting', description: 'Restricted eating windows or common food intolerances.' }
    ]
  },
  {
    id: 'exercise',
    question: 'How frequently do you engage in physical training or intense exercise?',
    subtitle: 'Determines the level of cellular energy (ATP) buffering you require.',
    type: 'single-choice',
    options: [
      { value: 'elite', label: '5+ times per week', description: 'Intense training, weightlifting, or endurance cycles.' },
      { value: 'active', label: '3-4 times per week', description: 'Moderate resistance training, sports, or cardio.' },
      { value: 'light', label: '1-2 times per week', description: 'Casual jogging, yoga, or light walking.' },
      { value: 'sedentary', label: 'Rarely / Office-bound', description: 'Primarily seated throughout the workday.' }
    ]
  },
  {
    id: 'obstacle',
    question: 'What is your main daily cognitive or energy challenge?',
    subtitle: 'Pinpoints specific neural path supports.',
    type: 'single-choice',
    options: [
      { value: 'fog', label: 'Brain fog & lack of concentration', description: 'Struggling to stay on task or retain complex details.' },
      { value: 'sleep', label: 'Restless sleep & night-time anxiety', description: 'Tossing and turning, waking up feeling unrefreshed.' },
      { value: 'crashes', label: 'Mid-afternoon energy slumps', description: 'Reaching for sugar or extra caffeine around 3 PM.' },
      { value: 'none', label: 'None, I feel highly balanced', description: 'Looking primarily for long-term health maintenance.' }
    ]
  },
  {
    id: 'age',
    question: 'What is your current biological age range?',
    subtitle: 'Biological requirements for NAD+ synthesis and bone health shift with age.',
    type: 'single-choice',
    options: [
      { value: 'youth', label: '18 - 29 years', description: 'Focus on performance, brain optimization, and energy.' },
      { value: 'prime', label: '30 - 45 years', description: 'Support metabolic shifts, cellular preservation, and stress adaptation.' },
      { value: 'mature', label: '46 - 60 years', description: 'Optimize hormone levels, bone density, and sirtuin activation.' },
      { value: 'elder', label: '61+ years', description: 'Maximum support for DNA repair, cardiovascular flexibility, and brain longevity.' }
    ]
  }
];

export interface QuizResult {
  recommendedProductIds: string[];
  explanation: string;
  reasoningList: string[];
}

export function calculateQuizResult(answers: Record<string, string>): QuizResult {
  const recommendedProductIds: string[] = [];
  const reasoningList: string[] = [];
  
  const goal = answers['goal'];
  const diet = answers['diet'];
  const exercise = answers['exercise'];
  const obstacle = answers['obstacle'];
  const age = answers['age'];

  // 1. Foundational Goal recommendations
  if (goal === 'cognitive') {
    recommendedProductIds.push('nootropic');
    reasoningList.push('Nootropic Brain Booster stack to enhance focus, cross-barrier acetylcholine, and reduce mental fatigue.');
  } else if (goal === 'performance') {
    recommendedProductIds.push('creatine');
    reasoningList.push('Micro-milled Creatine Monohydrate to increase cellular ATP production and fuel muscular power output.');
  } else if (goal === 'longevity') {
    recommendedProductIds.push('longevity');
    reasoningList.push('Longevity Complex to directly support cellular NAD+ levels and activate sirtuins for healthy biological aging.');
  } else {
    recommendedProductIds.push('omega-3');
    reasoningList.push('Omega-3 Pure Antarctic Fish Oil as a high-potency cardiovascular and cognitive structural foundation.');
  }

  // 2. Obstacle specific recommendations
  if (obstacle === 'fog') {
    if (!recommendedProductIds.includes('nootropic')) {
      recommendedProductIds.push('nootropic');
      reasoningList.push('Nootropic Brain Booster recommended to combat brain fog and support memory recall pathways.');
    }
  } else if (obstacle === 'sleep') {
    recommendedProductIds.push('magnesium');
    reasoningList.push('Magnesium L-Threonate to successfully cross the blood-brain barrier, calm the central nervous system, and extend slow-wave deep sleep.');
  } else if (obstacle === 'crashes') {
    if (!recommendedProductIds.includes('omega-3')) {
      recommendedProductIds.push('omega-3');
      reasoningList.push('Omega-3 Fish Oil to stabilize cell membrane structure and support steady baseline cellular energy.');
    }
  }

  // 3. Exercise specific recommendations
  if (exercise === 'elite' || exercise === 'active') {
    if (!recommendedProductIds.includes('creatine')) {
      recommendedProductIds.push('creatine');
      reasoningList.push('Creatine Monohydrate to replenish muscular phosphocreatine reserves depleted during frequent training.');
    }
    if (exercise === 'elite') {
      recommendedProductIds.push('pre-workout');
      reasoningList.push('Pre-Workout Ignition to optimize nitric oxide blood flow and muscular stamina during heavy workouts.');
    }
  }

  // 4. Age and Diet specific recommendations
  if (diet === 'vegan-vegetarian') {
    if (!recommendedProductIds.includes('vit-d3-k2')) {
      recommendedProductIds.push('vit-d3-k2');
      reasoningList.push('Vegan-sourced Liposomal D3 + K2 to offset the common lack of dietary animal fat-soluble vitamins.');
    }
  }

  if (age === 'mature' || age === 'elder') {
    if (!recommendedProductIds.includes('longevity')) {
      recommendedProductIds.push('longevity');
      reasoningList.push('Longevity Complex containing NMN and Resveratrol to stimulate cellular repair as natural NAD+ levels decline with age.');
    }
    if (!recommendedProductIds.includes('vit-d3-k2')) {
      recommendedProductIds.push('vit-d3-k2');
      reasoningList.push('Liposomal D3 + K2 to ensure calcium is successfully deposited into bones and teeth, supporting aging skeletal health.');
    }
  }

  // General fallback: Ensure we always have at least 2 and at most 3 items
  if (recommendedProductIds.length < 2) {
    recommendedProductIds.push('vit-d3-k2');
    reasoningList.push('Liposomal D3 + K2 to support daily systemic immunity and structural bone strength.');
  }

  // Slice to max 3 recommendations for visual clarity
  const finalIds = recommendedProductIds.slice(0, 3);
  const finalReasonings = reasoningList.slice(0, 3);

  let explanation = '';
  if (goal === 'cognitive' || obstacle === 'fog') {
    explanation = 'Based on your inputs, your biology is currently prioritizing cognitive restoration and neurological stamina. Your custom stack is formulated to optimize neurotransmitter synthesis, synapse density, and neural stress response.';
  } else if (goal === 'performance' || exercise === 'elite') {
    explanation = 'Your training frequency and performance goals require advanced cellular energy (ATP) regeneration and vascular nitric oxide enhancement. This stack is built to fuel muscular force and accelerate physical recovery.';
  } else {
    explanation = 'Your answers highlight a need for systemic cellular integrity, metabolic support, and longevity gene activation. This custom stack delivers core micronutrient synergy and mitochondrial protection.';
  }

  return {
    recommendedProductIds: finalIds,
    explanation,
    reasoningList: finalReasonings
  };
}
