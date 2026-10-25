import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, Target, Search, Share2, Bot, CheckCircle, ArrowRight } from 'lucide-react';

export default function Services() {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const services = [
    {
      id: 'website',
      icon: Code,
      title: 'Website Development',
      description:
        'Custom designs built for performance, responsive on every device, optimized for speed and conversion.',
      benefits: [
        'Custom responsive designs that work flawlessly on all devices',
        'High-performance architecture optimized for speed',
        'Conversion-focused landing pages',
        'E-commerce integration and payment processing',
        'Advanced analytics tracking and reporting',
        'Ongoing conversion rate optimization',
      ],
      outcomes:
        'Beautiful, fast websites that turn visitors into customers and drive measurable business growth.',
    },
    {
      id: 'advertising',
      icon: Target,
      title: 'Digital Advertising',
      description:
        'Strategic paid campaigns across Google and Meta platforms. Creative production, targeting, bidding, and performance reporting that maximize return on ad spend.',
      benefits: [
        'Strategic campaign planning and execution',
        'Professional ad creative production',
        'Advanced audience targeting and segmentation',
        'Smart bidding strategies for maximum ROI',
        'A/B testing and continuous optimization',
        'Detailed performance reporting and insights',
      ],
      outcomes:
        'Profitable advertising campaigns that consistently deliver qualified leads and sales at predictable costs.',
    },
    {
      id: 'seo',
      icon: Search,
      title: 'Search Engine Optimization',
      description:
        'Technical and on-page SEO, keyword research, content optimization, local SEO, and ranking strategy to drive organic traffic and improve visibility in search.',
      benefits: [
        'Comprehensive technical SEO audits and fixes',
        'Strategic keyword research and targeting',
        'On-page content optimization',
        'Local SEO for geographic targeting',
        'Link building and authority development',
        'Ongoing ranking monitoring and reporting',
      ],
      outcomes:
        'Dominant search engine rankings that drive consistent organic traffic and establish your brand as an industry authority.',
    },
    {
      id: 'social',
      icon: Share2,
      title: 'Social Media Management',
      description:
        'Account setup and optimization, strategic content calendars, audience engagement tactics, and analytical insights that grow your brand presence.',
      benefits: [
        'Professional account setup and branding',
        'Strategic content calendar planning',
        'High-quality content creation and curation',
        'Active community engagement and management',
        'Influencer partnership coordination',
        'Detailed analytics and growth reporting',
      ],
      outcomes:
        'Engaged social communities that amplify your brand message, drive traffic, and generate qualified leads.',
    },
    {
      id: 'ai',
      icon: Bot,
      title: 'AI & Automation Solutions',
      description:
        'Custom AI-powered chatbots, automation workflows, CRM automation, content generation, and AI analytics to streamline operations and enhance performance.',
      benefits: [
        'Custom AI chatbots for 24/7 customer support',
        'Marketing automation workflow design',
        'CRM and sales process automation',
        'AI-powered content generation',
        'Predictive analytics and insights',
        'Process optimization and efficiency gains',
      ],
      outcomes:
        'Streamlined operations that scale effortlessly, reduce costs, and deliver superior customer experiences.',
    },
  ];

  return (
    <div
      className="relative text-white min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://llilelgapyscsubcdnlk.supabase.co/storage/v1/object/public/nova/photo_3_2025-12-31_11-42-30%20(1).jpg')",
      }}
    >
      {/* Overlay مشکی نیمه شفاف */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* محتوا */}
      <div className="relative z-10">
        {/* HERO */}
        <section className="relative py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to scale your business and deliver measurable results
          </p>
        </section>

        {/* SERVICES */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 border border-white/20 rounded-xl mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h2>
                      <p className="text-xl text-gray-300 mb-8">{service.description}</p>

                      <div className="p-6 bg-white/5 border border-white/10 rounded-xl mb-8">
                        <h3 className="text-xl font-bold mb-4">Expected Outcomes</h3>
                        <p className="text-gray-300">{service.outcomes}</p>
                      </div>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all"
                      >
                        Get Started
                        <ArrowRight size={20} />
                      </Link>
                    </div>

                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                        <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                        <ul className="space-y-4">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss which services will drive the most growth for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-black text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all"
              >
                Book a Consultation
                <ArrowRight size={24} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-lg font-semibold rounded-lg hover:bg-white/20 transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
