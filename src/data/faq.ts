export interface FAQItem {
  question: string;
  answer: string;
  category: 'Products' | 'Subscriptions' | 'Quality & Testing' | 'Shipping & Returns';
}

export const faqs: FAQItem[] = [
  // Products
  {
    question: 'How do I know which supplements are right for my body?',
    answer: 'We recommend starting with our 60-Second Supplement Quiz. It analyzes your diet, lifestyle, sleep, and physical goals to generate a personalized, science-backed supplement stack tailored to your biological requirements. You can also review individual product details, which outline key scientific research and benefits.',
    category: 'Products'
  },
  {
    question: 'Can I take multiple Body Cafe Co. supplements together?',
    answer: 'Yes, our products are designed to be synergistic. For example, Vitamin D3 + K2 supports bone and vascular systems which pairs excellently with Omega-3 Fish Oil. However, we always recommend consulting with your healthcare physician before starting any new supplement regimen, especially if you have existing health conditions.',
    category: 'Products'
  },
  {
    question: 'Are your supplements vegan-friendly?',
    answer: 'Many of our supplements are 100% vegan, including our Nootropic Brain Booster, Longevity Complex, Magnesium L-Threonate, and Vitamin D3 + K2 (which uses plant-sourced D3 from lichen instead of sheep wool lanolin). Our Collagen Peptides are sourced from pasture-raised bovine and our Omega-3 is sourced from wild-caught marine fish, so these are not vegan.',
    category: 'Products'
  },

  // Subscriptions
  {
    question: 'How does the subscription plan work?',
    answer: 'When you subscribe to any product, you receive an immediate 15% discount on your order and free shipping. Your supplements will automatically ship every 30, 45, or 60 days depending on your preference. You can modify your delivery date, swap products, pause, or cancel your subscription at any time directly through your Account dashboard with no hidden fees.',
    category: 'Subscriptions'
  },
  {
    question: 'Can I combine multiple products into one subscription?',
    answer: 'Absolutely. You can add multiple items to your cart, set each to a subscription, and checkout. They will be bundled into a single delivery cycle to save packaging and reduce shipping emissions.',
    category: 'Subscriptions'
  },

  // Quality & Testing
  {
    question: 'What is Third Party Testing and why is it important?',
    answer: 'Third-party testing means that our products are sent to an independent, accredited laboratory (not owned or operated by Body Cafe Co.) to analyze their purity, potency, and safety. They verify that the active ingredients match our label claims exactly, and test for heavy metals (lead, mercury, cadmium, arsenic), micro-contaminants, and common allergens. We publish certificate of analysis (CoA) reports on our Science page.',
    category: 'Quality & Testing'
  },
  {
    question: 'Are your formulations clinically studied?',
    answer: 'Yes. We do not use speculative ingredients. We formulate using specific dosages that have been validated in peer-reviewed clinical studies. For instance, our Magnesium L-Threonate uses patented Magtein® in the exact 2,000mg dosage verified by MIT clinical research to raise brain magnesium levels.',
    category: 'Quality & Testing'
  },

  // Shipping & Returns
  {
    question: 'What is your shipping policy?',
    answer: 'We offer free shipping on all orders over ₹999 within India. Orders below ₹999 carry a flat shipping fee of ₹99. For subscription orders, shipping is always 100% free regardless of the order value. Most orders are processed within 24 hours and delivered within 3-5 business days.',
    category: 'Shipping & Returns'
  },
  {
    question: 'What is the 60-Day Money Back Guarantee?',
    answer: 'We stand behind our clinical formulations. If you are not satisfied with your results, you can return any product (even empty bottles) within 60 days of purchase for a 100% refund of the product purchase price. Simply contact our support team at support@bodycafeco.com to initiate the process.',
    category: 'Shipping & Returns'
  }
];

export const homePageFaqs = faqs.filter((_, index) => [0, 3, 5, 7].includes(index));
