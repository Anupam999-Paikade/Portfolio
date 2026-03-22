import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Product Skills',
    skills: ['User Research', 'Problem Framing', 'Prototyping', 'Journey Mapping', 'A/B Testing'],
    icon: '🎯'
  },
  {
    title: 'Core Tools',
    skills: ['Excel', 'PowerPoint', 'Tally', 'Figma', 'Amplitude'],
    icon: '📊'
  },
  {
    title: 'AI & Dev Tools',
    skills: ['Lovable', 'Replit', 'Claude', 'Builder.io', 'Cursor'],
    icon: '🤖'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 justify-between items-start">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold tracking-tight text-primary mb-4">Toolkit & Superpowers</h2>
            <div className="h-1 w-12 bg-accent rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg mb-8 md:mb-0">
              A comprehensive stack of methodologies and tools to take products from 0 to 1 and beyond.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-accent/30 transition-colors shadow-sm"
              >
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-tight">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center text-gray-600 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mr-2.5"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
