export interface Pie {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: string;
  ingredients: string[];
  nutrition: {
    servingSize: string;
    calories: number;
    totalFat: number;
    saturatedFat: number;
    cholesterol: number;
    sodium: number;
    totalCarbohydrates: number;
    dietaryFiber: number;
    sugars: number;
    protein: number;
  };
  allergens: string[];
  features: string[];
  seasonal: boolean;
  available: boolean;
  image: string;
  gallery: string[];
  relatedPosts: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export const pies: Pie[] = [
  {
    id: 'apple-pie',
    name: 'Classic Apple Pie',
    slug: 'apple-pie',
    description: 'Our signature apple pie features a perfect balance of tart and sweet Granny Smith apples, enhanced with warm cinnamon and nutmeg spices. Each slice reveals layers of tender apples nestled in our flaky all-butter crust, creating the quintessential American dessert experience.',
    shortDescription: 'Perfectly spiced Granny Smith apples in our flaky all-butter crust.',
    price: '$24.99',
    ingredients: [
      'Granny Smith Apples',
      'All-Butter Pie Crust',
      'Cinnamon',
      'Nutmeg',
      'Brown Sugar',
      'Lemon Juice',
      'Vanilla Extract',
      'Salt'
    ],
    nutrition: {
      servingSize: '1 slice (1/8 pie)',
      calories: 320,
      totalFat: 14,
      saturatedFat: 8,
      cholesterol: 35,
      sodium: 280,
      totalCarbohydrates: 45,
      dietaryFiber: 2,
      sugars: 25,
      protein: 3
    },
    allergens: ['Wheat', 'Dairy', 'Eggs'],
    features: ['Kosher Certified', 'All-Butter Crust', 'Hand-Crafted', 'No Artificial Preservatives'],
    seasonal: false,
    available: true,
    image: '/images/apple-pie-hero.jpg',
    gallery: [
      '/images/apple-pie-1.jpg',
      '/images/apple-pie-2.jpg',
      '/images/apple-pie-3.jpg'
    ],
    relatedPosts: ['best-summer-fruit-pies', 'behind-our-all-butter-crust'],
    faq: [
      {
        question: 'How long does the apple pie stay fresh?',
        answer: 'Our apple pie stays fresh for up to 5 days when refrigerated. For best taste, serve at room temperature.'
      },
      {
        question: 'Can I freeze the apple pie?',
        answer: 'Yes! You can freeze our apple pie for up to 3 months. Wrap tightly in plastic wrap and aluminum foil before freezing.'
      },
      {
        question: 'Is the apple pie suitable for vegetarians?',
        answer: 'Yes, our apple pie is vegetarian-friendly. It contains dairy and eggs but no meat products.'
      }
    ]
  },
  {
    id: 'cherry-pie',
    name: 'Sweet Cherry Pie',
    slug: 'cherry-pie',
    description: 'Bursting with the natural sweetness of fresh cherries, our cherry pie delivers a delightful balance of tart and sweet flavors. The vibrant red filling is perfectly complemented by our golden, flaky crust, making every bite a celebration of summer\'s finest fruit.',
    shortDescription: 'Fresh cherries in a sweet-tart filling with our signature all-butter crust.',
    price: '$26.99',
    ingredients: [
      'Fresh Cherries',
      'All-Butter Pie Crust',
      'Sugar',
      'Cornstarch',
      'Lemon Juice',
      'Almond Extract',
      'Vanilla Extract',
      'Salt'
    ],
    nutrition: {
      servingSize: '1 slice (1/8 pie)',
      calories: 310,
      totalFat: 13,
      saturatedFat: 7,
      cholesterol: 30,
      sodium: 270,
      totalCarbohydrates: 48,
      dietaryFiber: 2,
      sugars: 28,
      protein: 3
    },
    allergens: ['Wheat', 'Dairy', 'Eggs', 'Tree Nuts (Almond)'],
    features: ['Kosher Certified', 'All-Butter Crust', 'Hand-Crafted', 'Seasonal Fruit'],
    seasonal: true,
    available: true,
    image: '/images/cherry-pie-hero.jpg',
    gallery: [
      '/images/cherry-pie-1.jpg',
      '/images/cherry-pie-2.jpg',
      '/images/cherry-pie-3.jpg'
    ],
    relatedPosts: ['best-summer-fruit-pies', 'seasonal-pie-guide'],
    faq: [
      {
        question: 'When is cherry pie available?',
        answer: 'Cherry pie is available during cherry season, typically from June through August.'
      },
      {
        question: 'Are the cherries fresh or frozen?',
        answer: 'We use fresh cherries when in season, and flash-frozen cherries during off-season to maintain quality.'
      },
      {
        question: 'Is cherry pie gluten-free?',
        answer: 'Currently, our cherry pie contains gluten. We\'re working on gluten-free options for the future.'
      }
    ]
  },
  {
    id: 'pumpkin-pie',
    name: 'Traditional Pumpkin Pie',
    slug: 'pumpkin-pie',
    description: 'A holiday classic that brings warmth and comfort to any gathering. Our pumpkin pie features a velvety smooth filling made from real pumpkin puree, perfectly spiced with cinnamon, ginger, and cloves. The rich, creamy texture paired with our flaky crust creates the perfect Thanksgiving dessert.',
    shortDescription: 'Velvety smooth pumpkin filling with traditional holiday spices.',
    price: '$22.99',
    ingredients: [
      'Pumpkin Puree',
      'All-Butter Pie Crust',
      'Heavy Cream',
      'Eggs',
      'Brown Sugar',
      'Cinnamon',
      'Ginger',
      'Cloves',
      'Nutmeg',
      'Vanilla Extract',
      'Salt'
    ],
    nutrition: {
      servingSize: '1 slice (1/8 pie)',
      calories: 290,
      totalFat: 16,
      saturatedFat: 9,
      cholesterol: 85,
      sodium: 320,
      totalCarbohydrates: 32,
      dietaryFiber: 2,
      sugars: 20,
      protein: 5
    },
    allergens: ['Wheat', 'Dairy', 'Eggs'],
    features: ['Kosher Certified', 'All-Butter Crust', 'Hand-Crafted', 'Holiday Favorite'],
    seasonal: true,
    available: true,
    image: '/images/pumpkin-pie-hero.jpg',
    gallery: [
      '/images/pumpkin-pie-1.jpg',
      '/images/pumpkin-pie-2.jpg',
      '/images/pumpkin-pie-3.jpg'
    ],
    relatedPosts: ['top-holiday-desserts-thanksgiving', 'pumpkin-pie-history'],
    faq: [
      {
        question: 'When is pumpkin pie available?',
        answer: 'Pumpkin pie is available from September through December, perfect for fall and holiday celebrations.'
      },
      {
        question: 'Can I order pumpkin pie for Thanksgiving?',
        answer: 'Yes! We recommend placing Thanksgiving orders at least 2 weeks in advance to ensure availability.'
      },
      {
        question: 'Is pumpkin pie suitable for vegetarians?',
        answer: 'Our pumpkin pie contains eggs and dairy, so it\'s not suitable for vegans but is vegetarian-friendly.'
      }
    ]
  },
  {
    id: 'pecan-pie',
    name: 'Southern Pecan Pie',
    slug: 'pecan-pie',
    description: 'A Southern classic that combines the rich, buttery flavor of pecans with a sweet, gooey filling. Our pecan pie features a generous layer of whole pecans arranged in a beautiful pattern, creating both visual appeal and exceptional taste. Perfect for any special occasion.',
    shortDescription: 'Rich, buttery pecans in a sweet, gooey filling with our signature crust.',
    price: '$28.99',
    ingredients: [
      'Pecans',
      'All-Butter Pie Crust',
      'Corn Syrup',
      'Eggs',
      'Brown Sugar',
      'Butter',
      'Vanilla Extract',
      'Salt'
    ],
    nutrition: {
      servingSize: '1 slice (1/8 pie)',
      calories: 380,
      totalFat: 22,
      saturatedFat: 6,
      cholesterol: 70,
      sodium: 290,
      totalCarbohydrates: 42,
      dietaryFiber: 2,
      sugars: 32,
      protein: 4
    },
    allergens: ['Wheat', 'Dairy', 'Eggs', 'Tree Nuts (Pecans)'],
    features: ['Kosher Certified', 'All-Butter Crust', 'Hand-Crafted', 'Southern Classic'],
    seasonal: false,
    available: true,
    image: '/images/pecan-pie-hero.jpg',
    gallery: [
      '/images/pecan-pie-1.jpg',
      '/images/pecan-pie-2.jpg',
      '/images/pecan-pie-3.jpg'
    ],
    relatedPosts: ['southern-dessert-traditions', 'nut-allergy-friendly-options'],
    faq: [
      {
        question: 'Are the pecans fresh?',
        answer: 'Yes, we use fresh, high-quality pecans sourced from trusted suppliers in the Southern United States.'
      },
      {
        question: 'Can I order pecan pie for a nut allergy?',
        answer: 'Unfortunately, our pecan pie contains nuts and is not suitable for those with nut allergies.'
      },
      {
        question: 'How long does pecan pie stay fresh?',
        answer: 'Pecan pie stays fresh for up to 7 days when refrigerated. The filling actually improves in flavor after 1-2 days.'
      }
    ]
  },
  {
    id: 'blueberry-pie',
    name: 'Wild Blueberry Pie',
    slug: 'blueberry-pie',
    description: 'Packed with plump, juicy wild blueberries, our blueberry pie offers a burst of natural sweetness in every bite. The deep purple filling is perfectly balanced with a touch of lemon zest, creating a refreshing and satisfying dessert that celebrates the best of summer berries.',
    shortDescription: 'Plump wild blueberries with a hint of lemon in our flaky all-butter crust.',
    price: '$25.99',
    ingredients: [
      'Wild Blueberries',
      'All-Butter Pie Crust',
      'Sugar',
      'Cornstarch',
      'Lemon Zest',
      'Lemon Juice',
      'Vanilla Extract',
      'Salt'
    ],
    nutrition: {
      servingSize: '1 slice (1/8 pie)',
      calories: 300,
      totalFat: 13,
      saturatedFat: 7,
      cholesterol: 30,
      sodium: 270,
      totalCarbohydrates: 46,
      dietaryFiber: 3,
      sugars: 26,
      protein: 3
    },
    allergens: ['Wheat', 'Dairy', 'Eggs'],
    features: ['Kosher Certified', 'All-Butter Crust', 'Hand-Crafted', 'Antioxidant Rich'],
    seasonal: true,
    available: true,
    image: '/images/blueberry-pie-hero.jpg',
    gallery: [
      '/images/blueberry-pie-1.jpg',
      '/images/blueberry-pie-2.jpg',
      '/images/blueberry-pie-3.jpg'
    ],
    relatedPosts: ['best-summer-fruit-pies', 'blueberry-health-benefits'],
    faq: [
      {
        question: 'When is blueberry pie available?',
        answer: 'Blueberry pie is available during blueberry season, typically from July through September.'
      },
      {
        question: 'Are the blueberries wild or cultivated?',
        answer: 'We use wild blueberries when available, as they have a more intense flavor and higher antioxidant content.'
      },
      {
        question: 'Can I order blueberry pie year-round?',
        answer: 'We offer blueberry pie year-round using flash-frozen wild blueberries to maintain quality and flavor.'
      }
    ]
  }
];

export function getPieBySlug(slug: string): Pie | undefined {
  return pies.find(pie => pie.slug === slug);
}

export function getAllPies(): Pie[] {
  return pies;
}

export function getAvailablePies(): Pie[] {
  return pies.filter(pie => pie.available);
}

export function getSeasonalPies(): Pie[] {
  return pies.filter(pie => pie.seasonal);
} 