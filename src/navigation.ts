import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Products',
      links: [
        {
          text: 'All Products',
          href: getPermalink('/products'),
        },
        {
          text: 'Fruit Pies',
          href: getPermalink('/products/fruit-pies'),
        },
        {
          text: 'Seasonal Pies',
          href: getPermalink('/products/seasonal'),
        },
        {
          text: 'Specialty Pies',
          href: getPermalink('/products/specialty'),
        },
        {
          text: 'Product Specifications',
          href: getPermalink('/products/specifications'),
        },
      ],
    },
    {
      text: 'Solutions',
      links: [
        {
          text: 'Private Label',
          href: getPermalink('/solutions/private-label'),
        },
        {
          text: 'Foodservice',
          href: getPermalink('/solutions/foodservice'),
        },
        {
          text: 'Retail',
          href: getPermalink('/solutions/retail'),
        },
        {
          text: 'Custom Development',
          href: getPermalink('/solutions/custom-development'),
        },
      ],
    },
    {
      text: 'Capabilities',
      links: [
        {
          text: 'Manufacturing',
          href: getPermalink('/capabilities/manufacturing'),
        },
        {
          text: 'Quality & Certifications',
          href: getPermalink('/capabilities/quality'),
        },
        {
          text: 'Innovation & R&D',
          href: getPermalink('/capabilities/innovation'),
        },
        {
          text: 'Supply Chain',
          href: getPermalink('/capabilities/supply-chain'),
        },
      ],
    },
    {
      text: 'About',
      links: [
        {
          text: 'Our Company',
          href: getPermalink('/about'),
        },
        {
          text: 'Leadership',
          href: getPermalink('/about/leadership'),
        },
        {
          text: 'Sustainability',
          href: getPermalink('/about/sustainability'),
        },
        {
          text: 'Social Impact',
          href: getPermalink('/about/social-impact'),
        },
        {
          text: 'News & Press',
          href: getPermalink('/news'),
        },
        {
          text: 'Careers',
          href: getPermalink('/careers'),
        },
      ],
    },
    {
      text: 'Resources',
      links: [
        {
          text: 'Resource Center',
          href: getPermalink('/resources'),
        },
        {
          text: 'Product Catalogs',
          href: getPermalink('/resources/catalogs'),
        },
        {
          text: 'Certifications',
          href: getPermalink('/resources/certifications'),
        },
        {
          text: 'Case Studies',
          href: getPermalink('/resources/case-studies'),
        },
      ],
    },
  ],
  actions: [{ text: 'Contact Sales', href: '/contact', variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'Fruit Pies', href: '/products/fruit-pies' },
        { text: 'Seasonal Pies', href: '/products/seasonal' },
        { text: 'Specialty Pies', href: '/products/specialty' },
        { text: 'Product Specifications', href: '/products/specifications' },
        { text: 'New Products', href: '/products/new' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { text: 'Private Label', href: '/solutions/private-label' },
        { text: 'Foodservice', href: '/solutions/foodservice' },
        { text: 'Retail Partners', href: '/solutions/retail' },
        { text: 'Custom Development', href: '/solutions/custom-development' },
        { text: 'Distribution', href: '/solutions/distribution' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Resource Center', href: '/resources' },
        { text: 'Product Catalogs', href: '/resources/catalogs' },
        { text: 'Quality Certifications', href: '/resources/certifications' },
        { text: 'Case Studies', href: '/resources/case-studies' },
        { text: 'Industry Insights', href: '/resources/insights' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Leadership', href: '/about/leadership' },
        { text: 'Sustainability', href: '/about/sustainability' },
        { text: 'News & Press', href: '/news' },
        { text: 'Careers', href: '/careers' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
  ],
  footNote: `
    <span class="text-sm text-gray-600">© ${new Date().getFullYear()} SatisPie Manufacturing. All rights reserved. | <a href="/privacy" class="hover:text-blue-600">Privacy Policy</a> | <a href="/terms" class="hover:text-blue-600">Terms of Use</a></span>
  `,
};
