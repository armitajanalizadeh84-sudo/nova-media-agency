import { Link } from 'react-router-dom';
import { ArrowRight, Target, TrendingUp, BarChart3, Code, Search, Share2, Bot, Users } from 'lucide-react';

export default function Home() {
  const services = [
    { icon: Code, title: 'Website Development', description: 'Custom designs built for performance, responsive on every device, optimized for speed and conversion.', link: '/services#website' },
    { icon: Target, title: 'Digital Advertising', description: 'Strategic paid campaigns across Google and Meta platforms that maximize return on ad spend.', link: '/services#advertising' },
    { icon: Search, title: 'SEO', description: 'Technical and on-page SEO to drive organic traffic and improve visibility in search.', link: '/services#seo' },
    { icon: Share2, title: 'Social Media Management', description: 'Strategic content calendars and engagement tactics that grow your brand presence.', link: '/services#social' },
    { icon: Users, title: 'Lead Generation', description: 'Targeted lead scraping, automated outreach campaigns, and detailed conversion analytics.', link: '/services#leads' },
    { icon: Bot, title: 'AI & Automation', description: 'Custom AI-powered solutions and automation workflows to streamline operations.', link: '/services#ai' },
  ];

  const projects = [
    { title: 'E-Commerce Scale', industry: 'Retail', image: 'https://llilelgapyscsubcdnlk.supabase.co/storage/v1/object/public/nova/resized-image-Promo%20(1).jpeg', metric: '340% ROAS', link: '/projects/ecommerce-scale' },
    { title: 'Local SEO Domination', industry: 'Professional Services', image: 'https://llilelgapyscsubcdnlk.supabase.co/storage/v1/object/public/nova/resized-image-Promo%20(2).jpeg', metric: '1200% Traffic Growth', link: '/projects/local-seo' },
    { title: 'SaaS Launch Campaign', industry: 'Technology', image: 'https://llilelgapyscsubcdnlk.supabase.co/storage/v1/object/public/nova/resized-image-Promo%20(1).jpeg', metric: '5000+ Qualified Leads', link: '/projects/saas-launch' },
  ];

  return (
    <div
      className="relative min-h-screen text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://llilelgapyscsubcdnlk.supabase.co/storage/v1/object/public/nova/InShot_20260204_005559452.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center text-center px-6">
          <div className="max-w-6xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Full-Service Digital Marketing Agency Dedicated to{' '}
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Scaling Your Business
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            NOVAMEDIAGENCY
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              We build custom marketing systems that drive traffic, generate high-quality leads, and convert them into paying customers. Proven results. Clear accountability. Strategic execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all flex items-center gap-2 justify-center">
                Book a Consultation <ArrowRight size={20} />
              </Link>
              <Link to="/projects" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all">
                View Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose NOVA */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose NOVA</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
              We partner with businesses that want predictable growth and measurable ROI
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                <TrendingUp className="w-12 h-12 mb-4 text-gray-300" />
                <h3 className="text-2xl font-bold mb-4">Predictable Growth</h3>
                <p className="text-gray-300">
                  We architect full-funnel marketing systems designed for conversion and long-term scalability.
                </p>
              </div>
              <div className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                <BarChart3 className="w-12 h-12 mb-4 text-gray-300" />
                <h3 className="text-2xl font-bold mb-4">Measurable ROI</h3>
                <p className="text-gray-300">
                  Your marketing becomes an extension of your business goals, backed by analytics, strategy, and expert execution.
                </p>
              </div>
              <div className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                <Target className="w-12 h-12 mb-4 text-gray-300" />
                <h3 className="text-2xl font-bold mb-4">Strategic Execution</h3>
                <p className="text-gray-300">
                  We transform your brand's digital presence with innovative marketing solutions that deliver measurable results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              To transform your brand's digital presence with innovative marketing solutions that deliver measurable results.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We help businesses increase visibility, engage the right audience, and convert interest into revenue.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Services Overview</h2>
              <p className="text-xl text-gray-300">Comprehensive solutions for every stage of your digital growth</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link key={service.title} to={service.link} className="group p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all">
                    <Icon className="w-12 h-12 mb-4 text-gray-300 group-hover:text-white transition-colors" />
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors">{service.description}</p>
                  </Link>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all">
                View All Services <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
              <p className="text-xl text-gray-300">Real results from real businesses</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link key={project.title} to={project.link} className="group relative overflow-hidden rounded-xl aspect-square">
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/60"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-sm text-gray-300 mb-2">{project.industry}</span>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-lg font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">{project.metric}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 font-semibold rounded-lg hover:bg-white/20 transition-all">
                View All Projects <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300">
              <p>We begin with discovery and strategy development tailored to your business objectives.</p>
              <p>We implement customized campaigns and systems.</p>
              <p>We provide transparent performance reporting and regular strategy reviews to ensure measurable growth.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted By Businesses Across Industries</h2>
            <p className="text-xl text-gray-300 mb-12">
              Local brands, e-commerce businesses, professional services, and growth-stage companies rely on our expertise to accelerate digital performance and revenue.
            </p>
            <div className="p-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business with a Tailored Digital Marketing Strategy?</h3>
              <p className="text-lg text-gray-300 mb-8">Book a consultation and get a customized growth plan built for results.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105">
                Get Started Now <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
