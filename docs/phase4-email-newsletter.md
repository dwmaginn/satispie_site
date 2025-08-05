# SatisPie Email Newsletter Strategy

## Platform Selection

### Recommended: Mailchimp
- **Plan:** Free tier (up to 2,000 subscribers)
- **Features:** Drag-and-drop editor, automation, analytics
- **Integration:** Easy form integration, social media sync
- **Cost:** $0/month (upgrade when needed)

### Alternative: Klaviyo
- **Plan:** $20/month (up to 1,000 subscribers)
- **Features:** Advanced automation, e-commerce focus
- **Integration:** Better for future e-commerce
- **Cost:** $20/month

## Newsletter Strategy

### Content Pillars
1. **Product Updates** - New flavors, seasonal offerings
2. **Behind the Scenes** - Employee stories, baking process
3. **Local Community** - Partnerships, events, Rochester pride
4. **Mission Focus** - Employment opportunities, social impact
5. **Customer Stories** - Reviews, testimonials, celebrations

### Content Mix
- **40%** Product-focused content
- **25%** Mission and community stories
- **20%** Behind-the-scenes content
- **15%** Customer engagement and UGC

## Signup Strategy

### Website Integration

#### Footer Signup
```html
<!-- Add to Footer.astro -->
<div class="newsletter-signup bg-sp-purple text-white p-6 rounded-lg">
  <h3 class="text-lg font-semibold mb-2">Stay Updated</h3>
  <p class="text-sm mb-4">Get the latest on new flavors, events, and our mission.</p>
  <form action="https://mailchimp.com/subscribe" method="POST" class="flex gap-2">
    <input type="email" name="EMAIL" placeholder="Your email address" 
           class="flex-1 px-3 py-2 rounded text-gray-900" required>
    <button type="submit" 
            class="bg-white text-sp-purple px-4 py-2 rounded font-semibold hover:bg-gray-100">
      Subscribe
    </button>
  </form>
</div>
```

#### Popup Signup
```javascript
// Add to BaseLayout.astro
<script>
  // Exit-intent popup
  document.addEventListener('mouseleave', function(e) {
    if (e.clientY < 0 && !localStorage.getItem('newsletterShown')) {
      showNewsletterPopup();
      localStorage.setItem('newsletterShown', 'true');
    }
  });
  
  function showNewsletterPopup() {
    // Create and show popup
  }
</script>
```

#### Blog Signup
```html
<!-- Add to blog posts -->
<div class="newsletter-signup bg-sp-bg-light p-4 rounded-lg my-6">
  <h4 class="font-semibold mb-2">Get More Pie Content</h4>
  <p class="text-sm mb-3">Subscribe for recipes, baking tips, and behind-the-scenes stories.</p>
  <form action="https://mailchimp.com/subscribe" method="POST" class="flex gap-2">
    <input type="email" name="EMAIL" placeholder="Email address" 
           class="flex-1 px-3 py-2 rounded border" required>
    <button type="submit" 
            class="bg-sp-purple text-white px-4 py-2 rounded font-semibold">
      Subscribe
    </button>
  </form>
</div>
```

### Lead Magnets

#### Welcome Series
- **Email 1:** Welcome + 10% off coupon
- **Email 2:** Our story and mission
- **Email 3:** Product guide and ordering info
- **Email 4:** Customer testimonials
- **Email 5:** Local events and partnerships

#### Content Upgrades
- **Recipe PDF:** "5 Classic Pie Recipes"
- **Guide PDF:** "How to Choose the Perfect Pie"
- **Checklist:** "Holiday Pie Planning Checklist"
- **Video:** "Behind-the-Scenes Baking Process"

## Email Templates

### Welcome Email Template
```
Subject: Welcome to SatisPie! 🥧 Here's Your 10% Off Coupon

Hi [First Name],

Welcome to the SatisPie family! We're thrilled you've joined our community of pie lovers.

As a special welcome gift, here's your 10% off coupon for your first order:
COUPON CODE: WELCOME10

About SatisPie:
- Handcrafted, all-butter pies made in Rochester, NY
- We employ individuals with disabilities (40% of our team)
- Kosher certified and locally sourced ingredients
- Available for wholesale, fundraising, and retail

What to expect from us:
- Monthly newsletters with new flavors and events
- Behind-the-scenes stories from our team
- Local community updates and partnerships
- Special offers for subscribers

Ready to try our pies? Visit our store locator to find us near you:
[Store Locator Link]

Happy baking!
The SatisPie Team

P.S. Follow us on social media for daily updates and pie inspiration!
```

### Monthly Newsletter Template
```
Subject: This Month at SatisPie: [Topic]

Hi [First Name],

Here's what's happening this month at SatisPie:

🥧 NEW FLAVORS
[New product announcement with photo]

👥 BEHIND THE SCENES
[Employee story or baking process]

🏆 CUSTOMER SPOTLIGHT
[Customer testimonial or celebration]

📅 UPCOMING EVENTS
[Local events, fundraisers, partnerships]

💝 SPECIAL OFFER
[Monthly discount or promotion]

[Call-to-action button]

Thanks for being part of our pie family!

The SatisPie Team

P.S. Don't forget to follow us on Instagram for daily pie inspiration!
```

## Automation Workflows

### Welcome Series (5 emails)
1. **Day 0:** Welcome email with coupon
2. **Day 2:** Our story and mission
3. **Day 5:** Product guide and ordering
4. **Day 8:** Customer testimonials
5. **Day 12:** Local events and partnerships

### Abandoned Cart (if e-commerce)
1. **Day 1:** Reminder with product photos
2. **Day 3:** Customer reviews and testimonials
3. **Day 7:** Limited-time offer

### Re-engagement
1. **30 days inactive:** "We miss you" email
2. **60 days inactive:** Special offer
3. **90 days inactive:** Survey to understand preferences

## Content Calendar

### Monthly Themes
- **January:** New Year, new flavors
- **February:** Valentine's Day specials
- **March:** Spring flavors and St. Patrick's Day
- **April:** Easter and spring celebrations
- **May:** Mother's Day and graduation
- **June:** Summer flavors and Father's Day
- **July:** Independence Day and summer events
- **August:** Back-to-school and end-of-summer
- **September:** Fall flavors and back-to-school
- **October:** Halloween and fall celebrations
- **November:** Thanksgiving and holiday planning
- **December:** Holiday specials and year-end

### Weekly Content Schedule
- **Week 1:** Product focus
- **Week 2:** Mission and community
- **Week 3:** Behind-the-scenes
- **Week 4:** Customer engagement

## Segmentation Strategy

### Primary Segments
1. **New Subscribers** (0-30 days)
2. **Active Customers** (ordered in last 90 days)
3. **Inactive Customers** (no order in 90+ days)
4. **Wholesale Customers**
5. **Fundraising Customers**

### Behavioral Segments
1. **Pie Lovers** (engaged with product content)
2. **Mission Supporters** (engaged with mission content)
3. **Local Community** (engaged with local content)
4. **Seasonal Buyers** (purchase during holidays)

## Success Metrics

### Primary Goals
- **List Growth:** 200+ subscribers in first 60 days
- **Open Rate:** 35%+ (industry average: 21.5%)
- **Click Rate:** 3%+ (industry average: 2.6%)
- **Unsubscribe Rate:** <2% (industry average: 0.1%)

### Secondary Goals
- **Conversion Rate:** 5%+ from email to website
- **Revenue Attribution:** 20%+ of sales from email
- **Engagement:** 10%+ reply rate
- **Social Sharing:** 5%+ forward rate

## Technical Setup

### Mailchimp Integration

#### Form Setup
1. Create signup form in Mailchimp
2. Get form action URL and hidden fields
3. Add to website with proper styling
4. Test signup process

#### Automation Setup
1. Create welcome series automation
2. Set up segmentation rules
3. Design email templates
4. Test automation flow

#### Analytics Setup
1. Connect Google Analytics
2. Set up conversion tracking
3. Monitor key metrics
4. A/B test subject lines

### Privacy Compliance

#### GDPR Compliance
- [ ] Add privacy policy link to signup forms
- [ ] Include unsubscribe link in all emails
- [ ] Document data processing purposes
- [ ] Set up data retention policies

#### CAN-SPAM Compliance
- [ ] Include physical address in emails
- [ ] Clear unsubscribe mechanism
- [ ] Accurate subject lines
- [ ] Honest sender information

## Budget Allocation

### Phase 4.4 Budget: $300

#### Platform Costs: $100
- **Mailchimp:** $0/month (free tier)
- **Klaviyo backup:** $20/month if needed
- **Email testing tools:** $50

#### Content Creation: $150
- **Professional templates:** $75
- **Welcome series content:** $50
- **Lead magnet creation:** $25

#### Tools & Software: $50
- **Email analytics:** $25
- **A/B testing tools:** $25

## Timeline

### Week 1: Setup
- [ ] Choose email platform
- [ ] Set up account and integrations
- [ ] Create signup forms
- [ ] Design welcome email template

### Week 2: Content Creation
- [ ] Write welcome series (5 emails)
- [ ] Create lead magnets
- [ ] Design monthly newsletter template
- [ ] Set up automation workflows

### Week 3: Integration
- [ ] Add signup forms to website
- [ ] Test signup process
- [ ] Set up analytics tracking
- [ ] Launch welcome series

### Week 4: Optimization
- [ ] Monitor performance metrics
- [ ] A/B test subject lines
- [ ] Optimize content based on data
- [ ] Plan next month's content

## Risk Management

### Potential Challenges
1. **Low signup rate** - Optimize form placement and copy
2. **High unsubscribe rate** - Improve content relevance
3. **Spam filters** - Follow best practices
4. **Technical issues** - Test thoroughly before launch

### Contingency Plans
1. **Backup platform** - Klaviyo ready if needed
2. **Content bank** - Pre-written emails for emergencies
3. **Manual backup** - Export subscriber list regularly
4. **Support contacts** - Platform support and developer contacts 