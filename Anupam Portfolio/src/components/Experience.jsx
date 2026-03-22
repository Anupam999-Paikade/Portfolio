import { motion } from 'framer-motion';

const timeline = [
  {
    type: 'Education',
    title: 'MBA (PGPM)',
    org: 'Crucible Institute',
    date: 'Present',
    description: 'Specializing in Product Management. Leading cross-functional initiatives and deep-diving into business strategy.'
  },
  {
    type: 'Education',
    title: 'B.Com (Finance)',
    org: 'University',
    date: 'Previous',
    description: 'Analyzed 1000+ NSE companies, building strong financial depth and analytical thinking.'
  },
  {
    type: 'Leadership',
    title: 'Class Representative',
    org: 'Crucible Institute',
    date: '',
    description: 'Managed student-faculty relations, driving structural improvements in learning modules.'
  },
  {
    type: 'Leadership',
    title: 'School Captain & Cricket Team Lead',
    org: '',
    date: '',
    description: 'Built team culture from the ground up. Learned stakeholder management and objective-driven execution long before the MBA.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold tracking-tight text-primary mb-4 text-center">Background & Leadership</h2>
        <div className="h-1 w-12 bg-accent rounded-full mb-16 mx-auto"></div>

        <div className="relative border-l border-gray-200 ml-3 md:ml-0">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-10 ml-8 relative group"
            >
              <span className="absolute -left-10 flex items-center justify-center w-4 h-4 rounded-full bg-white ring-4 ring-gray-100 group-hover:ring-accent/20 border border-accent transition-all"></span>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-1">
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">{item.title}</h3>
                {item.org && <span className="text-accent font-medium">{item.org}</span>}
                {item.date && <span className="text-sm font-medium text-gray-400 sm:ml-auto bg-white px-2 py-0.5 rounded border border-gray-100">{item.date}</span>}
              </div>
              
              <div className="inline-block px-2 py-1 bg-gray-100 text-gray-500 text-xs font-semibold rounded-md mb-3">
                {item.type}
              </div>
              
              <p className="text-gray-600 text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
