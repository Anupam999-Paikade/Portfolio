import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold tracking-tight text-primary mb-4">The Builder Mindset</h2>
            <div className="h-1 w-12 bg-accent rounded-full mb-8"></div>
          </div>
          
          <div className="md:w-2/3 space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              I don't just study product management; <strong className="text-gray-900 font-medium">I live it by building.</strong> While many focus purely on theory, my approach centers on rapid prototyping, deep user empathy, and strategic business analysis.
            </p>
            <p>
              My philosophy is simple: <span className="italic">build before being asked.</span> Whether it's analyzing data across 1000+ NSE companies to hone my financial depth, or hitting the ground to conduct 50+ user interviews, I validate assumptions with real data and real people.
            </p>
            <p>
              I blend <strong className="text-gray-900 font-medium">user-first thinking</strong> with strong <strong className="text-gray-900 font-medium">business intuition</strong>. I understand that a great product must not only look good and solve a real problem but also make financial sense for the business. This unique intersection of empathy and execution is what I bring to the table.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
