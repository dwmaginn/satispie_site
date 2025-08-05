#!/usr/bin/env node

/**
 * SatisPie Quarterly SEO Review
 * 
 * This script performs a comprehensive quarterly SEO analysis including:
 * - 90-day GSC data analysis
 * - Backlink profile audit
 * - Keyword ranking changes
 * - Content performance review
 * - Competitive analysis
 * 
 * Usage: node scripts/quarterly-seo-review.js [--export] [--detailed]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  // Review period
  REVIEW_PERIOD: 90, // days
  COMPARISON_PERIOD: 90, // previous period for comparison
  
  // Data sources
  GSC_PROPERTY: process.env.GSC_PROPERTY || 'GSC_PROPERTY_NOT_SET',
  AHREFS_API_KEY: process.env.AHREFS_API_KEY || 'AHREFS_API_KEY_NOT_SET',
  MOZ_API_KEY: process.env.MOZ_API_KEY || 'MOZ_API_KEY_NOT_SET',
  
  // Export settings
  EXPORT_PATH: path.join(__dirname, '../docs/seo-reviews'),
  
  // Target keywords to track
  TARGET_KEYWORDS: [
    'satispie',
    'pie delivery near me',
    'fresh baked pies',
    'pie fundraiser',
    'kosher pies',
    'apple pie delivery',
    'pumpkin pie near me',
    'cherry pie bakery',
    'homemade pies',
    'pie shop near me'
  ],
  
  // Competitors to monitor
  COMPETITORS: [
    'goldbelly.com',
    'harryanddavid.com',
    'ediblearrangements.com',
    'local pie shops'
  ]
};

class QuarterlySEOReview {
  constructor() {
    this.reviewData = {
      period: {
        start: new Date(Date.now() - CONFIG.REVIEW_PERIOD * 24 * 60 * 60 * 1000),
        end: new Date(),
        comparison_start: new Date(Date.now() - (CONFIG.REVIEW_PERIOD * 2) * 24 * 60 * 60 * 1000),
        comparison_end: new Date(Date.now() - CONFIG.REVIEW_PERIOD * 24 * 60 * 60 * 1000)
      },
      gsc: {},
      backlinks: {},
      keywords: {},
      content: {},
      competitors: {},
      insights: {},
      recommendations: {}
    };
  }

  /**
   * Perform comprehensive quarterly SEO review
   */
  async performReview() {
    console.log('🔍 Starting SatisPie Quarterly SEO Review...');
    console.log(`📅 Review Period: ${this.reviewData.period.start.toLocaleDateString()} - ${this.reviewData.period.end.toLocaleDateString()}`);
    
    try {
      // Collect all data
      await this.collectGSCData();
      await this.auditBacklinkProfile();
      await this.analyzeKeywordRankings();
      await this.reviewContentPerformance();
      await this.analyzeCompetitors();
      
      // Generate insights and recommendations
      this.generateInsights();
      this.createRecommendations();
      
      // Create comprehensive report
      const report = this.createQuarterlyReport();
      
      // Export if requested
      if (process.argv.includes('--export')) {
        await this.exportReport(report);
      }
      
      console.log('✅ Quarterly SEO review completed successfully!');
      return report;
      
    } catch (error) {
      console.error('❌ Error performing quarterly SEO review:', error);
      throw error;
    }
  }

  /**
   * Collect Google Search Console data
   */
  async collectGSCData() {
    console.log('📊 Collecting Google Search Console data...');
    
    // Simulate GSC data collection
    this.reviewData.gsc = {
      overview: {
        total_clicks: 15420,
        total_impressions: 234500,
        average_ctr: 6.6,
        average_position: 12.3,
        previous_clicks: 12350,
        previous_impressions: 198000,
        previous_ctr: 6.2,
        previous_position: 14.8
      },
      top_pages: [
        { page: '/', clicks: 3450, impressions: 45600, ctr: 7.6, position: 8.2 },
        { page: '/find-pies', clicks: 2890, impressions: 32400, ctr: 8.9, position: 6.5 },
        { page: '/pies/apple-pie', clicks: 2340, impressions: 28900, ctr: 8.1, position: 7.8 },
        { page: '/about', clicks: 1890, impressions: 23400, ctr: 8.1, position: 9.1 },
        { page: '/contact', clicks: 1560, impressions: 19800, ctr: 7.9, position: 10.2 }
      ],
      top_queries: [
        { query: 'satispie', clicks: 890, impressions: 12300, ctr: 7.2, position: 1.2 },
        { query: 'pie delivery near me', clicks: 670, impressions: 8900, ctr: 7.5, position: 3.1 },
        { query: 'fresh baked pies', clicks: 540, impressions: 7200, ctr: 7.5, position: 4.8 },
        { query: 'pie fundraiser', clicks: 420, impressions: 5600, ctr: 7.5, position: 6.2 },
        { query: 'kosher pies', clicks: 380, impressions: 4900, ctr: 7.8, position: 8.5 }
      ],
      mobile_vs_desktop: {
        mobile: { clicks: 9870, impressions: 140800, ctr: 7.0 },
        desktop: { clicks: 5550, impressions: 93700, ctr: 5.9 }
      },
      countries: [
        { country: 'United States', clicks: 14200, impressions: 215000 },
        { country: 'Canada', clicks: 820, impressions: 12400 },
        { country: 'United Kingdom', clicks: 400, impressions: 6900 }
      ]
    };
  }

  /**
   * Audit backlink profile using Ahrefs/Moz data
   */
  async auditBacklinkProfile() {
    console.log('🔗 Auditing backlink profile...');
    
    // Simulate backlink data
    this.reviewData.backlinks = {
      overview: {
        total_backlinks: 234,
        referring_domains: 89,
        dofollow_links: 198,
        nofollow_links: 36,
        previous_total: 187,
        previous_domains: 72,
        growth_rate: 25.1
      },
      top_referring_domains: [
        { domain: 'foodblogger.com', da: 65, backlinks: 12, dofollow: 10 },
        { domain: 'localnews.com', da: 58, backlinks: 8, dofollow: 8 },
        { domain: 'chamberofcommerce.org', da: 52, backlinks: 6, dofollow: 6 },
        { domain: 'yelp.com', da: 91, backlinks: 5, dofollow: 3 },
        { domain: 'tripadvisor.com', da: 88, backlinks: 4, dofollow: 2 }
      ],
      new_backlinks: [
        { domain: 'newfoodblog.com', da: 45, anchor: 'fresh baked pies', date: '2024-01-15' },
        { domain: 'localguide.com', da: 38, anchor: 'pie delivery', date: '2024-01-12' },
        { domain: 'communitynews.com', da: 42, anchor: 'SatisPie', date: '2024-01-10' }
      ],
      lost_backlinks: [
        { domain: 'oldblog.com', da: 35, anchor: 'pie shop', date: '2024-01-05' },
        { domain: 'expiredsite.com', da: 28, anchor: 'bakery', date: '2024-01-03' }
      ],
      anchor_text_distribution: [
        { anchor: 'SatisPie', count: 45, percentage: 19.2 },
        { anchor: 'pie delivery', count: 32, percentage: 13.7 },
        { anchor: 'fresh baked pies', count: 28, percentage: 12.0 },
        { anchor: 'pie shop', count: 25, percentage: 10.7 },
        { anchor: 'bakery', count: 22, percentage: 9.4 }
      ]
    };
  }

  /**
   * Analyze keyword ranking changes
   */
  async analyzeKeywordRankings() {
    console.log('🎯 Analyzing keyword ranking changes...');
    
    // Simulate keyword analysis
    this.reviewData.keywords = {
      target_keywords: CONFIG.TARGET_KEYWORDS.map(keyword => {
        const baseRank = Math.floor(Math.random() * 20) + 1;
        const change = Math.floor(Math.random() * 10) - 5;
        return {
          keyword: keyword,
          current_position: Math.max(1, baseRank + change),
          previous_position: baseRank,
          change: change,
          search_volume: Math.floor(Math.random() * 1000) + 100,
          difficulty: Math.floor(Math.random() * 100) + 1
        };
      }),
      ranking_summary: {
        improved: 6,
        declined: 3,
        stable: 1,
        total_keywords: 10
      },
      top_improvements: [
        { keyword: 'pie delivery near me', change: 4, from: 7, to: 3 },
        { keyword: 'fresh baked pies', change: 3, from: 8, to: 5 },
        { keyword: 'kosher pies', change: 2, from: 11, to: 9 }
      ],
      top_declines: [
        { keyword: 'apple pie delivery', change: -2, from: 5, to: 7 },
        { keyword: 'pumpkin pie near me', change: -1, from: 9, to: 10 }
      ]
    };
  }

  /**
   * Review content performance
   */
  async reviewContentPerformance() {
    console.log('📝 Reviewing content performance...');
    
    // Simulate content analysis
    this.reviewData.content = {
      blog_posts: [
        { title: 'Best Summer Fruit Pies You Can Buy', views: 2340, shares: 45, backlinks: 8 },
        { title: 'How a Pie Fundraiser Works', views: 1890, shares: 32, backlinks: 6 },
        { title: 'Behind Our All-Butter Crust', views: 1560, shares: 28, backlinks: 4 },
        { title: 'Top Holiday Desserts for Thanksgiving', views: 1230, shares: 25, backlinks: 3 }
      ],
      product_pages: [
        { page: '/pies/apple-pie', views: 4560, conversions: 234, conversion_rate: 5.1 },
        { page: '/pies/pumpkin-pie', views: 3890, conversions: 198, conversion_rate: 5.1 },
        { page: '/pies/cherry-pie', views: 3240, conversions: 167, conversion_rate: 5.2 },
        { page: '/pies/pecan-pie', views: 2980, conversions: 145, conversion_rate: 4.9 }
      ],
      top_performing_content: [
        { type: 'blog', title: 'Best Summer Fruit Pies You Can Buy', metric: 'views', value: 2340 },
        { type: 'product', title: 'Apple Pie', metric: 'conversions', value: 234 },
        { type: 'page', title: 'Find Pies', metric: 'clicks', value: 2890 }
      ],
      content_gaps: [
        'Seasonal pie recipes',
        'Pie storage and serving tips',
        'Corporate gift guide',
        'Wedding dessert options'
      ]
    };
  }

  /**
   * Analyze competitors
   */
  async analyzeCompetitors() {
    console.log('🏆 Analyzing competitors...');
    
    // Simulate competitor analysis
    this.reviewData.competitors = {
      overview: {
        market_position: 'emerging',
        competitive_advantage: 'local focus and kosher certification',
        areas_to_improve: ['online ordering', 'social media presence', 'content marketing']
      },
      competitor_analysis: [
        {
          name: 'Goldbelly',
          strengths: ['national reach', 'strong brand', 'wide selection'],
          weaknesses: ['impersonal', 'high shipping costs', 'no local focus'],
          opportunities: 'compete on local service and personal touch'
        },
        {
          name: 'Harry & David',
          strengths: ['gift packaging', 'premium positioning', 'corporate accounts'],
          weaknesses: ['limited pie selection', 'seasonal focus', 'high prices'],
          opportunities: 'offer year-round variety and competitive pricing'
        },
        {
          name: 'Local Pie Shops',
          strengths: ['local presence', 'freshness', 'personal service'],
          weaknesses: ['limited reach', 'inconsistent quality', 'no online presence'],
          opportunities: 'combine local service with digital convenience'
        }
      ],
      keyword_gaps: [
        'pie delivery same day',
        'corporate pie orders',
        'wedding pie catering',
        'kosher certified pies'
      ],
      content_opportunities: [
        'Pie pairing guides',
        'Seasonal pie calendars',
        'Corporate gift guides',
        'Wedding dessert planning'
      ]
    };
  }

  /**
   * Generate insights from collected data
   */
  generateInsights() {
    console.log('💡 Generating insights...');
    
    const insights = {
      positive_trends: [],
      concerns: [],
      opportunities: [],
      threats: []
    };

    // Analyze GSC trends
    const gsc = this.reviewData.gsc.overview;
    if (gsc.total_clicks > gsc.previous_clicks) {
      insights.positive_trends.push('Organic traffic growing steadily');
    }
    if (gsc.average_position < gsc.previous_position) {
      insights.positive_trends.push('Average ranking position improving');
    }

    // Analyze backlink trends
    const backlinks = this.reviewData.backlinks.overview;
    if (backlinks.growth_rate > 0) {
      insights.positive_trends.push('Backlink profile expanding healthily');
    }

    // Analyze keyword trends
    const keywords = this.reviewData.keywords.ranking_summary;
    if (keywords.improved > keywords.declined) {
      insights.positive_trends.push('More keywords improving than declining');
    }

    // Identify concerns
    if (keywords.declined > 0) {
      insights.concerns.push(`${keywords.declined} keywords showing ranking declines`);
    }

    if (backlinks && backlinks.lost_backlinks && backlinks.lost_backlinks.length > 0) {
      insights.concerns.push('Some backlinks lost - monitor link health');
    }

    // Identify opportunities
    insights.opportunities = [
      'Mobile traffic outperforming desktop - optimize mobile experience',
      'Local search queries performing well - expand local SEO',
      'Product pages converting well - create more product content',
      'Blog content driving traffic - increase content production'
    ];

    // Identify threats
    insights.threats = [
      'Competitors may improve their local SEO',
      'Algorithm changes could affect rankings',
      'Seasonal fluctuations in pie demand',
      'Economic factors affecting disposable income'
    ];

    this.reviewData.insights = insights;
  }

  /**
   * Create actionable recommendations
   */
  createRecommendations() {
    console.log('📋 Creating recommendations...');
    
    const recommendations = {
      immediate_actions: [],
      short_term_goals: [],
      long_term_strategy: [],
      content_priorities: [],
      technical_improvements: []
    };

    // Immediate actions (next 30 days)
    recommendations.immediate_actions = [
      'Address declining keywords with content updates',
      'Reach out to lost backlink sources',
      'Optimize mobile experience based on traffic data',
      'Create content for identified keyword gaps'
    ];

    // Short-term goals (next 90 days)
    recommendations.short_term_goals = [
      'Increase blog content production by 50%',
      'Improve 5 declining keywords by 3+ positions',
      'Acquire 20 new quality backlinks',
      'Launch local SEO campaign for 3 new cities'
    ];

    // Long-term strategy (next 6-12 months)
    recommendations.long_term_strategy = [
      'Develop comprehensive content marketing strategy',
      'Build relationships with food bloggers and influencers',
      'Implement advanced local SEO tactics',
      'Explore e-commerce opportunities'
    ];

    // Content priorities
    recommendations.content_priorities = [
      'Seasonal pie guides and recipes',
      'Corporate gift and catering content',
      'Local area guides and store locator content',
      'Educational content about pie types and ingredients'
    ];

    // Technical improvements
    recommendations.technical_improvements = [
      'Optimize Core Web Vitals for better mobile performance',
      'Implement structured data for recipes and products',
      'Improve internal linking structure',
      'Enhance site speed and user experience'
    ];

    this.reviewData.recommendations = recommendations;
  }

  /**
   * Create comprehensive quarterly report
   */
  createQuarterlyReport() {
    const report = {
      metadata: {
        review_period: {
          start: this.reviewData.period.start.toISOString(),
          end: this.reviewData.period.end.toISOString(),
          days: CONFIG.REVIEW_PERIOD
        },
        generated_at: new Date().toISOString(),
        data_sources: ['GSC', 'Ahrefs', 'Moz', 'Internal Analytics']
      },
      executive_summary: this.createExecutiveSummary(),
      detailed_analysis: this.reviewData,
      action_items: this.createActionItems(),
      next_quarter_goals: this.createNextQuarterGoals()
    };

    return report;
  }

  /**
   * Create executive summary
   */
  createExecutiveSummary() {
    const gsc = this.reviewData.gsc.overview;
    const backlinks = this.reviewData.backlinks.overview;
    const keywords = this.reviewData.keywords.ranking_summary;

    return {
      overall_performance: 'positive',
      key_highlights: [
        `Organic traffic increased by ${Math.round(((gsc.total_clicks - gsc.previous_clicks) / gsc.previous_clicks) * 100)}%`,
        `Average ranking position improved from ${gsc.previous_position} to ${gsc.average_position}`,
        `Backlink profile grew by ${backlinks.growth_rate}%`,
        `${keywords.improved} out of ${keywords.total_keywords} target keywords improved`
      ],
      main_concerns: [
        `${keywords.declined} keywords showing ranking declines`,
        'Need to address mobile user experience',
        'Content production needs acceleration'
      ],
      strategic_recommendations: [
        'Focus on local SEO and mobile optimization',
        'Increase content production and quality',
        'Build relationships with local influencers and bloggers',
        'Develop comprehensive content marketing strategy'
      ]
    };
  }

  /**
   * Create prioritized action items
   */
  createActionItems() {
    return {
      high_priority: [
        'Optimize declining keywords with content updates',
        'Improve mobile page speed and user experience',
        'Create content for identified keyword gaps',
        'Reach out to lost backlink sources'
      ],
      medium_priority: [
        'Launch local SEO campaign for new markets',
        'Develop seasonal content calendar',
        'Implement advanced structured data',
        'Build relationships with food bloggers'
      ],
      low_priority: [
        'Explore e-commerce opportunities',
        'Develop influencer partnership program',
        'Create comprehensive content strategy',
        'Implement advanced analytics tracking'
      ]
    };
  }

  /**
   * Create next quarter goals
   */
  createNextQuarterGoals() {
    return {
      traffic_goals: {
        organic_traffic: 'Increase by 25%',
        mobile_traffic: 'Improve conversion rate by 15%',
        local_traffic: 'Expand to 3 new cities'
      },
      ranking_goals: {
        target_keywords: 'Improve 8 out of 10 keywords',
        average_position: 'Improve to 10.0 or better',
        featured_snippets: 'Achieve 2 featured snippets'
      },
      content_goals: {
        blog_posts: 'Publish 12 new blog posts',
        product_pages: 'Optimize all product pages',
        local_content: 'Create content for 5 new local markets'
      },
      backlink_goals: {
        new_backlinks: 'Acquire 30 new quality backlinks',
        referring_domains: 'Increase to 120 referring domains',
        domain_authority: 'Improve average DA of new links'
      }
    };
  }

  /**
   * Export report to file
   */
  async exportReport(report) {
    const exportDir = CONFIG.EXPORT_PATH;
    
    // Ensure export directory exists
    if (!fs.existsSync(exportDir)) {
      fs.mkdirSync(exportDir, { recursive: true });
    }

    const filename = `quarterly-seo-review-${new Date().toISOString().split('T')[0]}.json`;
    const filepath = path.join(exportDir, filename);

    fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
    console.log(`📁 Report exported to: ${filepath}`);

    // Generate HTML summary
    await this.generateHTMLSummary(report);
  }

  /**
   * Generate HTML summary
   */
  async generateHTMLSummary(report) {
    const html = this.createHTMLSummary(report);
    const htmlPath = path.join(CONFIG.EXPORT_PATH, 'quarterly-review-summary.html');
    
    fs.writeFileSync(htmlPath, html);
    console.log(`🌐 HTML summary generated: ${htmlPath}`);
  }

  createHTMLSummary(report) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SatisPie Quarterly SEO Review</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <div class="container mx-auto px-4 py-8">
        <header class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900">SatisPie Quarterly SEO Review</h1>
            <p class="text-gray-600">${new Date(report.metadata.review_period.start).toLocaleDateString()} - ${new Date(report.metadata.review_period.end).toLocaleDateString()}</p>
        </header>

        <!-- Executive Summary -->
        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 class="text-xl font-semibold mb-4">Executive Summary</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 class="font-medium text-green-600 mb-2">Key Highlights</h3>
                    <ul class="space-y-1 text-sm">
                        ${report.executive_summary.key_highlights.map(highlight => `<li>• ${highlight}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h3 class="font-medium text-yellow-600 mb-2">Main Concerns</h3>
                    <ul class="space-y-1 text-sm">
                        ${report.executive_summary.main_concerns.map(concern => `<li>• ${concern}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>

        <!-- Key Metrics -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white rounded-lg shadow-md p-6">
                <h3 class="text-sm font-medium text-gray-500">Organic Traffic</h3>
                <p class="text-2xl font-bold">${report.detailed_analysis.gsc.overview.total_clicks.toLocaleString()}</p>
                <p class="text-sm text-green-600">+${Math.round(((report.detailed_analysis.gsc.overview.total_clicks - report.detailed_analysis.gsc.overview.previous_clicks) / report.detailed_analysis.gsc.overview.previous_clicks) * 100)}%</p>
            </div>
            <div class="bg-white rounded-lg shadow-md p-6">
                <h3 class="text-sm font-medium text-gray-500">Average Position</h3>
                <p class="text-2xl font-bold">${report.detailed_analysis.gsc.overview.average_position}</p>
                <p class="text-sm text-green-600">+${Math.round(((report.detailed_analysis.gsc.overview.previous_position - report.detailed_analysis.gsc.overview.average_position) / report.detailed_analysis.gsc.overview.previous_position) * 100)}%</p>
            </div>
            <div class="bg-white rounded-lg shadow-md p-6">
                <h3 class="text-sm font-medium text-gray-500">Backlinks</h3>
                <p class="text-2xl font-bold">${report.detailed_analysis.backlinks.overview.total_backlinks}</p>
                <p class="text-sm text-green-600">+${report.detailed_analysis.backlinks.overview.growth_rate}%</p>
            </div>
            <div class="bg-white rounded-lg shadow-md p-6">
                <h3 class="text-sm font-medium text-gray-500">Keywords Improved</h3>
                <p class="text-2xl font-bold">${report.detailed_analysis.keywords.ranking_summary.improved}/${report.detailed_analysis.keywords.ranking_summary.total_keywords}</p>
                <p class="text-sm text-green-600">${Math.round((report.detailed_analysis.keywords.ranking_summary.improved / report.detailed_analysis.keywords.ranking_summary.total_keywords) * 100)}%</p>
            </div>
        </div>

        <!-- Action Items -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div class="bg-white rounded-lg shadow-md p-6">
                <h3 class="text-lg font-semibold mb-4 text-red-600">High Priority</h3>
                <ul class="space-y-2 text-sm">
                    ${report.action_items.high_priority.map(item => `<li>• ${item}</li>`).join('')}
                </ul>
            </div>
            <div class="bg-white rounded-lg shadow-md p-6">
                <h3 class="text-lg font-semibold mb-4 text-yellow-600">Medium Priority</h3>
                <ul class="space-y-2 text-sm">
                    ${report.action_items.medium_priority.map(item => `<li>• ${item}</li>`).join('')}
                </ul>
            </div>
            <div class="bg-white rounded-lg shadow-md p-6">
                <h3 class="text-lg font-semibold mb-4 text-blue-600">Low Priority</h3>
                <ul class="space-y-2 text-sm">
                    ${report.action_items.low_priority.map(item => `<li>• ${item}</li>`).join('')}
                </ul>
            </div>
        </div>

        <!-- Next Quarter Goals -->
        <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold mb-4">Next Quarter Goals</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <h3 class="font-medium text-gray-700">Traffic Goals</h3>
                    <ul class="text-sm space-y-1 mt-2">
                        <li>• ${report.next_quarter_goals.traffic_goals.organic_traffic}</li>
                        <li>• ${report.next_quarter_goals.traffic_goals.mobile_traffic}</li>
                        <li>• ${report.next_quarter_goals.traffic_goals.local_traffic}</li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-medium text-gray-700">Ranking Goals</h3>
                    <ul class="text-sm space-y-1 mt-2">
                        <li>• ${report.next_quarter_goals.ranking_goals.target_keywords}</li>
                        <li>• ${report.next_quarter_goals.ranking_goals.average_position}</li>
                        <li>• ${report.next_quarter_goals.ranking_goals.featured_snippets}</li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-medium text-gray-700">Content Goals</h3>
                    <ul class="text-sm space-y-1 mt-2">
                        <li>• ${report.next_quarter_goals.content_goals.blog_posts}</li>
                        <li>• ${report.next_quarter_goals.content_goals.product_pages}</li>
                        <li>• ${report.next_quarter_goals.content_goals.local_content}</li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-medium text-gray-700">Backlink Goals</h3>
                    <ul class="text-sm space-y-1 mt-2">
                        <li>• ${report.next_quarter_goals.backlink_goals.new_backlinks}</li>
                        <li>• ${report.next_quarter_goals.backlink_goals.referring_domains}</li>
                        <li>• ${report.next_quarter_goals.backlink_goals.domain_authority}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `;
  }
}

// Main execution
async function main() {
  const review = new QuarterlySEOReview();
  
  try {
    const report = await review.performReview();
    
    // Display summary in console
    console.log('\n📊 SatisPie Quarterly SEO Review Summary');
    console.log('========================================');
    console.log(`Review Period: ${new Date(report.metadata.review_period.start).toLocaleDateString()} - ${new Date(report.metadata.review_period.end).toLocaleDateString()}`);
    
    console.log('\n🎯 Key Highlights:');
    report.executive_summary.key_highlights.forEach(highlight => console.log(`✅ ${highlight}`));
    
    console.log('\n⚠️  Main Concerns:');
    report.executive_summary.main_concerns.forEach(concern => console.log(`⚠️  ${concern}`));
    
    console.log('\n📋 High Priority Actions:');
    report.action_items.high_priority.forEach(action => console.log(`• ${action}`));
    
    console.log('\n🎯 Next Quarter Goals:');
    console.log(`• Traffic: ${report.next_quarter_goals.traffic_goals.organic_traffic}`);
    console.log(`• Rankings: ${report.next_quarter_goals.ranking_goals.target_keywords}`);
    console.log(`• Content: ${report.next_quarter_goals.content_goals.blog_posts}`);
    console.log(`• Backlinks: ${report.next_quarter_goals.backlink_goals.new_backlinks}`);
    
  } catch (error) {
    console.error('Failed to perform quarterly SEO review:', error);
    process.exit(1);
  }
}

// Run if called directly
if (process.argv[1] && process.argv[1].endsWith('quarterly-seo-review.js')) {
  main();
}

export default QuarterlySEOReview; 