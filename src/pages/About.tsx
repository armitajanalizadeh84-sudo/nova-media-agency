import { Link } from 'react-router-dom';
import { Target, TrendingUp, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description:
        'We measure success by your success. Every strategy, campaign, and decision is backed by data and focused on delivering measurable ROI.',
    },
    {
      icon: TrendingUp,
      title: 'Transparent',
      description:
        'No smoke and mirrors. We provide clear reporting, honest communication, and full visibility into your marketing performance.',
    },
    {
      icon: BarChart3,
      title: 'Strategic',
      description:
        "We don't just execute tactics—we architect comprehensive marketing systems designed for sustainable, long-term growth.",
    },
  ];

  const expertise = [
    'Full-funnel marketing strategy and execution',
    'Performance-driven paid advertising',
    'Technical SEO and content marketing',
    'Social media growth and engagement',
    'Marketing automation and AI integration',
    'Data analytics and conversion optimization',
  ];

  return (
    <div
      className="relative min-h-screen text-white bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://llilelgapyscsubcdnlk.supabase.co/storage/v1/object/public/nova/InShot_20260204_005559452.jpg')",
      }}
    >
      {/* Global Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* HERO */}
        <section className="py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              NOVA
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Data-Driven Growth. Measurable Results.
          </p>
        </section>

        {/* STORY */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  NOVA was founded on a simple principle: marketing should be measurable,
                  strategic, and directly tied to business growth.
                </p>
                <p>
                  Too many agencies focus on vanity metrics instead of revenue. We built
                  something different.
                </p>
                <p>
                  Transparency, accountability, and real ROI are at the core of everything
                  we do.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://llilelgapyscsubcdnlk.supabase.co/storage/v1/object/public/nova/resized-image-Promo%20(1).jpeg"
                alt="Team"
                className="rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Our Values
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-xl mb-6">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Our Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {expertise.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                  <span className="text-lg text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 text-center">
          <div className="max-w-4xl mx-auto px-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let’s scale your business with data-driven marketing systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-10 py-5 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
              >
                Get Started
              </Link>
              <Link
                to="/projects"
                className="px-10 py-5 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition"
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
