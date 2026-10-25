import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  industry: string;
  image: string;
  metrics: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  description: string;
}

const projects: Project[] = [
  {
    id: 'ecommerce-scale',
    title: 'E-Commerce Scale',
    industry: 'Retail',
    image: 'https://llilelgapyscsubcdnlk.supabase.co/storage/v1/object/public/nova/IMG_20251228_165610_968_Nero_AI_Image_Upscaler_Photo.jpeg',
    metrics: {
      primary: '340% ROAS',
      secondary: '$2.4M Revenue',
      tertiary: '156% Growth',
    },
    description: 'Scaled an e-commerce brand from $50K to $200K monthly revenue through strategic paid advertising and conversion optimization.',
  },
  {
    id: 'local-seo',
    title: 'Local SEO Domination',
    industry: 'Professional Services',
    image: 'https://llilelgapyscsubcdnlk.supabase.co/storage/v1/object/public/nova/resized-image-Promo%20(1).jpeg',
    metrics: {
      primary: '1200% Traffic Growth',
      secondary: '#1 Rankings',
      tertiary: '450+ Leads/Month',
    },
    description: 'Transformed a local law firm into the dominant player in their market with first-page rankings for all target keywords.',
  },
  {
    id: 'saas-launch',
    title: 'SaaS Launch Campaign',
    industry: 'Technology',
    image: 'https://llilelgapyscsubcdnlk.supabase.co/storage/v1/object/public/nova/resized-image-Promo%20(2).jpeg',
    metrics: {
      primary: '5000+ Qualified Leads',
      secondary: '28% Conversion Rate',
      tertiary: '$450K MRR',
    },
    description: 'Executed a full-funnel launch campaign that generated thousands of qualified leads and established market presence.',
  },
  {
    id: 'restaurant-chain',
    title: 'Restaurant Chain Expansion',
    industry: 'Food & Beverage',
    image: 'https://llilelgapyscsubcdnlk.supabase.co/storage/v1/object/public/nova/resized-image-Promo%20(1).jpeg',
    metrics: {
      primary: '85% More Bookings',
      secondary: '3.2M Social Reach',
      tertiary: '240% ROI',
    },
    description: 'Drove massive foot traffic and online orders through integrated social media and local advertising campaigns.',
  },
  {
    id: 'fitness-brand',
    title: 'Fitness Brand Revival',
    industry: 'Health & Wellness',
    image: 'https://llilelgapyscsubcdnlk.supabase.co/storage/v1/object/public/nova/1000%20(1).jpg',
    metrics: {
      primary: '650% Instagram Growth',
      secondary: '4800 New Members',
      tertiary: '$1.2M Revenue',
    },
    description: 'Revitalized a struggling fitness brand with viral social content and targeted community building strategies.',
  },
  {
    id: 'tech-startup',
    title: 'B2B Tech Startup',
    industry: 'Enterprise Software',
    image: 'https://llilelgapyscsubcdnlk.supabase.co/storage/v1/object/public/nova/1001%20(1).jpg',
    metrics: {
      primary: '$2.8M in Pipeline',
      secondary: '380 Enterprise Leads',
      tertiary: '42% Close Rate',
    },
    description: 'Generated qualified enterprise leads through strategic content marketing, LinkedIn outreach, and ABM campaigns.',
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Link
      to={`/projects/${project.id}`}
      className="group relative h-96 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <span className="text-sm text-gray-300 mb-2">{project.industry}</span>
            <h3 className="text-3xl font-bold">{project.title}</h3>
          </div>
        </div>

        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-xl p-8 flex flex-col justify-between">
          <div>
            <span className="text-sm text-gray-400 mb-2 block">{project.industry}</span>
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-6">{project.description}</p>
          </div>
          <div>
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Primary Metric</span>
                <span className="text-white font-bold">{project.metrics.primary}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Secondary</span>
                <span className="text-white font-bold">{project.metrics.secondary}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Impact</span>
                <span className="text-white font-bold">{project.metrics.tertiary}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold">
              View Case Study
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <div
      className="relative min-h-screen text-white bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://llilelgapyscsubcdnlk.supabase.co/storage/v1/object/public/nova/photo_1_2025-12-31_11-42-30.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* HERO */}
        <section className="relative py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Real businesses. Real results. Real growth.
          </p>
        </section>

        {/* PROJECT GRID */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center">
          <div className="max-w-4xl mx-auto px-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's create measurable results for your business
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight size={24} />
            </Link>
          </div>
        </section>
      </div>
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
