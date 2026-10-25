import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, DollarSign, Target } from 'lucide-react';

interface ProjectData {
  id: string;
  title: string;
  industry: string;
  location: string;
  heroImage: string;
  overview: string;
  challenge: string;
  solution: string;
  services: string[];
  metrics: Array<{
    icon: typeof TrendingUp;
    label: string;
    value: string;
    description: string;
  }>;
  gallery: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

const projectsData: Record<string, ProjectData> = {
  'ecommerce-scale': {
    id: 'ecommerce-scale',
    title: 'E-Commerce Scale',
    industry: 'Retail',
    location: 'Los Angeles, CA',
    heroImage: 'https://llilelgapyscsubcdnlk.supabase.co/storage/v1/object/public/nova/IMG_20251228_165610_968_Nero_AI_Image_Upscaler_Photo.jpeg',
    overview: 'A premium fashion e-commerce brand looking to scale from $50K to $200K+ in monthly revenue while maintaining profitability.',
    challenge: 'The client had a strong product line but struggled with inconsistent sales, high customer acquisition costs, and poor conversion rates on their website.',
    solution: 'We implemented a comprehensive growth strategy combining website optimization, strategic paid advertising across Google and Meta platforms, email marketing automation, and conversion rate optimization.',
    services: ['Website Development', 'Digital Advertising', 'SEO', 'Email Marketing', 'Conversion Optimization'],
    metrics: [
      {
        icon: DollarSign,
        label: 'Return on Ad Spend',
        value: '340% ROAS',
        description: 'Achieved 3.4x return on every dollar spent on advertising',
      },
      {
        icon: TrendingUp,
        label: 'Revenue Growth',
        value: '$2.4M',
        description: 'Total revenue generated in 12 months',
      },
      {
        icon: Users,
        label: 'Customer Growth',
        value: '156%',
        description: 'Increase in customer base year-over-year',
      },
      {
        icon: Target,
        label: 'Conversion Rate',
        value: '4.2%',
        description: 'Up from 1.8% before optimization',
      },
    ],
    gallery: [
    
    ],
    testimonial: {
      quote: 'NOVA transformed our business. We went from struggling to hit our monthly targets to consistently exceeding them. Their strategic approach and attention to detail made all the difference.',
      author: 'Sarah Mitchell',
      role: 'Founder & CEO',
    },
  },
  'local-seo': {
    id: 'local-seo',
    title: 'Local SEO Domination',
    industry: 'Professional Services',
    location: 'Miami, FL',
    heroImage: 'https://llilelgapyscsubcdnlk.supabase.co/storage/v1/object/public/nova/resized-image-Promo%20(1).jpeg',
    overview: 'A boutique law firm specializing in personal injury cases needed to dominate local search results and generate a consistent flow of qualified leads.',
    challenge: 'The firm was virtually invisible online, ranking on page 3-4 for key terms, with minimal organic traffic and inconsistent lead generation.',
    solution: 'We executed a comprehensive local SEO strategy including technical optimization, content development, local citation building, and reputation management to establish the firm as the dominant local authority.',
    services: ['SEO', 'Content Marketing', 'Reputation Management', 'Website Development'],
    metrics: [
      {
        icon: TrendingUp,
        label: 'Traffic Growth',
        value: '1200%',
        description: 'Organic traffic increase in 9 months',
      },
      {
        icon: Target,
        label: 'Rankings',
        value: '#1 Position',
        description: 'First page rankings for all target keywords',
      },
      {
        icon: Users,
        label: 'Monthly Leads',
        value: '450+',
        description: 'Qualified leads generated per month',
      },
      {
        icon: DollarSign,
        label: 'Revenue Impact',
        value: '$3.2M',
        description: 'Additional revenue from organic leads',
      },
    ],
    gallery: [
     
    ],
    testimonial: {
      quote: 'The results speak for themselves. We now dominate our local market and have more qualified leads than we can handle. NOVA delivered everything they promised and more.',
      author: 'Michael Chen',
      role: 'Managing Partner',
    },
  },
  'saas-launch': {
    id: 'saas-launch',
    title: 'SaaS Launch Campaign',
    industry: 'Technology',
    location: 'Austin, TX',
    heroImage: 'https://llilelgapyscsubcdnlk.supabase.co/storage/v1/object/public/nova/resized-image-Promo%20(2).jpeg',
    overview: 'A B2B SaaS startup needed to launch their product, generate qualified leads, and establish market presence in a competitive space.',
    challenge: 'As a new entrant with no brand recognition, the startup needed to quickly build awareness, generate leads, and convert them into paying customers.',
    solution: 'We designed and executed a multi-channel launch campaign including content marketing, paid advertising, SEO, email sequences, and social media to create momentum and drive conversions.',
    services: ['Digital Advertising', 'Content Marketing', 'SEO', 'Email Marketing', 'Social Media Management'],
    metrics: [
      {
        icon: Users,
        label: 'Qualified Leads',
        value: '5000+',
        description: 'High-quality leads in first 6 months',
      },
      {
        icon: Target,
        label: 'Conversion Rate',
        value: '28%',
        description: 'Lead-to-customer conversion rate',
      },
      {
        icon: DollarSign,
        label: 'Monthly Recurring Revenue',
        value: '$450K',
        description: 'MRR achieved within 8 months',
      },
      {
        icon: TrendingUp,
        label: 'Customer Acquisition Cost',
        value: '$180',
        description: 'With LTV of $2400+ per customer',
      },
    ],
    gallery: [
     
    ],
    testimonial: {
      quote: 'NOVA was instrumental in our successful launch. Their strategic approach and execution helped us exceed our first-year goals in just 6 months.',
      author: 'James Rodriguez',
      role: 'Co-Founder & CMO',
    },
  },
  'restaurant-chain': {
    id: 'restaurant-chain',
    title: 'Restaurant Chain Expansion',
    industry: 'Food & Beverage',
    location: 'Chicago, IL',
    heroImage: 'https://llilelgapyscsubcdnlk.supabase.co/storage/v1/object/public/nova/resized-image-Promo%20(1).jpeg',
    overview: 'A growing restaurant chain with 8 locations needed to drive foot traffic, increase online orders, and build brand awareness.',
    challenge: 'Despite quality food and service, the restaurants struggled with inconsistent traffic across locations and low online ordering adoption.',
    solution: 'We implemented integrated social media campaigns, local SEO for each location, influencer partnerships, and targeted advertising to drive both in-person visits and online orders.',
    services: ['Social Media Management', 'Digital Advertising', 'SEO', 'Influencer Marketing'],
    metrics: [
      {
        icon: Users,
        label: 'Booking Increase',
        value: '85%',
        description: 'More reservations across all locations',
      },
      {
        icon: Target,
        label: 'Social Reach',
        value: '3.2M',
        description: 'Monthly social media impressions',
      },
      {
        icon: DollarSign,
        label: 'Return on Investment',
        value: '240%',
        description: 'ROI on marketing spend',
      },
      {
        icon: TrendingUp,
        label: 'Online Orders',
        value: '320%',
        description: 'Growth in online order volume',
      },
    ],
    gallery: [
      
    ],
    testimonial: {
      quote: 'NOVA helped us build a consistent brand presence across all our locations. Our restaurants are now consistently full, and our online orders have skyrocketed.',
      author: 'Anthony Martinez',
      role: 'Owner',
    },
  },
  'fitness-brand': {
    id: 'fitness-brand',
    title: 'Fitness Brand Revival',
    industry: 'Health & Wellness',
    location: 'San Diego, CA',
    heroImage: 'https://llilelgapyscsubcdnlk.supabase.co/storage/v1/object/public/nova/1000%20(1).jpg',
    overview: 'A struggling fitness studio chain needed to revitalize its brand, grow membership, and establish a strong digital presence.',
    challenge: 'Declining membership, low social engagement, and intense competition from newer boutique fitness brands.',
    solution: 'We created viral social content, implemented influencer partnerships, launched targeted acquisition campaigns, and built an engaged community across social platforms.',
    services: ['Social Media Management', 'Digital Advertising', 'Influencer Marketing', 'Content Creation'],
    metrics: [
      {
        icon: Users,
        label: 'Instagram Growth',
        value: '650%',
        description: 'Follower growth with high engagement',
      },
      {
        icon: Target,
        label: 'New Members',
        value: '4800',
        description: 'New memberships in 12 months',
      },
      {
        icon: DollarSign,
        label: 'Revenue Growth',
        value: '$1.2M',
        description: 'Additional annual revenue',
      },
      {
        icon: TrendingUp,
        label: 'Engagement Rate',
        value: '12.4%',
        description: 'Average social media engagement',
      },
    ],
    gallery: [
      
    ],
    testimonial: {
      quote: 'NOVA didn\'t just save our business—they transformed it. We went from struggling to thriving, with a waitlist at every location.',
      author: 'Jessica Thompson',
      role: 'Founder',
    },
  },
  'tech-startup': {
    id: 'tech-startup',
    title: 'B2B Tech Startup',
    industry: 'Enterprise Software',
    location: 'Seattle, WA',
    heroImage: 'https://llilelgapyscsubcdnlk.supabase.co/storage/v1/object/public/nova/1001%20(1).jpg',
    overview: 'An enterprise software company needed to generate high-quality B2B leads and build a robust sales pipeline.',
    challenge: 'Long sales cycles, difficulty reaching decision-makers, and high customer acquisition costs in the enterprise space.',
    solution: 'We implemented account-based marketing, LinkedIn outreach, strategic content marketing, and marketing automation to generate and nurture enterprise leads.',
    services: ['Lead Generation', 'Content Marketing', 'LinkedIn Advertising', 'Marketing Automation'],
    metrics: [
      {
        icon: DollarSign,
        label: 'Pipeline Value',
        value: '$2.8M',
        description: 'Qualified pipeline generated',
      },
      {
        icon: Users,
        label: 'Enterprise Leads',
        value: '380',
        description: 'Decision-maker level contacts',
      },
      {
        icon: Target,
        label: 'Close Rate',
        value: '42%',
        description: 'Lead-to-customer conversion',
      },
      {
        icon: TrendingUp,
        label: 'Avg Deal Size',
        value: '$45K',
        description: 'Average annual contract value',
      },
    ],
    gallery: [
      
    ],
    testimonial: {
      quote: 'NOVA\'s strategic approach to B2B lead generation has been a game-changer for our sales team. The quality of leads they deliver is exceptional.',
      author: 'David Park',
      role: 'VP of Sales',
    },
  },
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="bg-black text-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <span className="text-lg text-gray-300 mb-4 block">{project.industry}</span>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-gray-300">{project.location}</p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-gray-300 leading-relaxed">{project.overview}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Services Provided</h3>
              <div className="flex flex-wrap gap-3">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-12 text-center">Key Metrics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.metrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{metric.value}</div>
                    <div className="text-sm text-gray-300 mb-2">{metric.label}</div>
                    <div className="text-xs text-gray-400">{metric.description}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-lg text-gray-300 leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-lg text-gray-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-12 text-center">Visual Highlights</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative aspect-square rounded-xl overflow-hidden">
                  <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {project.testimonial && (
            <div className="max-w-4xl mx-auto mb-24">
              <div className="p-12 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
                <p className="text-2xl text-gray-300 mb-8 leading-relaxed italic">
                  "{project.testimonial.quote}"
                </p>
                <div>
                  <div className="font-bold text-lg">{project.testimonial.author}</div>
                  <div className="text-gray-400">{project.testimonial.role}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Project</h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to achieve similar results for your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-black text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105"
            >
              Book a Consultation
              <ArrowRight size={24} />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-lg font-semibold rounded-lg hover:bg-white/20 transition-all"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
