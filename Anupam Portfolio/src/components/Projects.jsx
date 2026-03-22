import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Chaifi',
    subtitle: 'Cafeteria Pre-Order System',
    problem: 'Long wait times in cafeterias during peak rush hours.',
    approach: 'Conducted interviews with students and mapped the user journey to pinpoint bottlenecks.',
    solution: 'Built a functional prototype for a pre-order system that integrates seamlessly into the daily routine.',
    outcome: 'Reduced wait time from 15 minutes to 5 minutes (66% improvement).',
    tags: ['User Research', 'Prototyping', 'UX/UI'],
    link: '#',
    highlight: true,
  },
  {
    title: 'Athena',
    subtitle: 'Freight Intelligence Dashboard',
    problem: 'Sales team struggled with complex pricing decisions due to scattered data.',
    approach: 'Simplified ML models (SHAP) into clear, usable logic for non-technical users.',
    solution: 'Converted scattered data from 25+ routes into an intuitive, centralized dashboard.',
    outcome: 'Enabled significantly faster and more confident pricing decisions.',
    tags: ['Data Analysis', 'Dashboard Design', 'Business Logic'],
    link: '#',
  },
  {
    title: 'GrowFit',
    subtitle: 'Market Research & Entry Strategy',
    problem: 'Understanding consumer perception of "healthy" food for strategic market entry.',
    approach: 'Conducted 50+ detailed surveys across the target demographic.',
    solution: 'Synthesized data to uncover the core insight: "Healthy food = ghar ka khana (home-cooked food)".',
    outcome: 'Delivered actionable market entry insights backed by robust user data.',
    tags: ['Market Research', 'Surveys', 'Strategy'],
    link: '#',
  },
  {
    title: 'Beyond Snack',
    subtitle: 'Consumer Insight & Taste Testing',
    problem: 'Identifying missing elements in product experience to improve adoption.',
    approach: 'Organized and analyzed 15+ blind taste tests with target users.',
    solution: 'Detailed mapping of sensory feedback and consumption context.',
    outcome: 'Identified critical product gaps: timing of consumption, tanginess levels, and aftertaste duration.',
    tags: ['Consumer Insight', 'Product Testing', 'Feedback Loop'],
    link: '#',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary mb-4">Featured Work</h2>
          <div className="h-1 w-12 bg-accent rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-2xl text-lg">Proof of work, not just words. Detailed case studies on how I approach problems, build solutions, and drive measurable outcomes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative flex flex-col bg-white rounded-2xl border ${project.highlight ? 'border-accent/30 shadow-[0_8px_30px_rgb(79,70,229,0.1)]' : 'border-gray-100 shadow-sm'} overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1`}
            >
              <div className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{project.title}</h3>
                    {project.highlight && (
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">Flagship</span>
                    )}
                  </div>
                  <p className="text-accent font-medium">{project.subtitle}</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow text-sm">
                  <div>
                    <strong className="text-gray-900 block mb-1">Problem:</strong>
                    <span className="text-gray-600">{project.problem}</span>
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-1">Action:</strong>
                    <span className="text-gray-600">{project.approach} {project.solution}</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 mt-4">
                    <strong className="text-gray-900 block mb-1">Impact:</strong>
                    <span className="text-gray-800 font-medium">{project.outcome}</span>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors group-hover:underline">
                    Case Study <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
