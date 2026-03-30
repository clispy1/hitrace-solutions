'use client';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    category: "General",
    questions: [
      { q: "What is Hitrace Solutions?", a: "Hitrace Solutions is a premier provider of telematics, fleet management, and IoT tracking solutions designed to help businesses monitor, manage, and optimize their assets in real-time." },
      { q: "How do I get started?", a: "You can get started by booking a free demo through our website or contacting our sales team directly. We'll assess your needs and recommend the best hardware and software package." }
    ]
  },
  {
    category: "Hardware & Installation",
    questions: [
      { q: "Do you provide the tracking devices?", a: "Yes, we provide enterprise-grade GPS trackers, fuel sensors, and IoT devices tailored to your specific industry requirements." },
      { q: "How long does installation take?", a: "Standard vehicle tracker installation takes about 45-60 minutes per vehicle. Complex setups involving fuel sensors or multiple cameras may take 2-3 hours." },
      { q: "Can I install the devices myself?", a: "While plug-and-play OBD trackers can be self-installed, we highly recommend using our certified technicians for hardwired devices to ensure warranty compliance and optimal performance." }
    ]
  },
  {
    category: "Software & Platform",
    questions: [
      { q: "Is the platform accessible on mobile?", a: "Yes, our platform is fully responsive and we offer dedicated mobile apps for both iOS and Android devices." },
      { q: "Can I integrate Hitrace with my existing ERP?", a: "Absolutely. We provide a robust API that allows seamless integration with popular ERPs, accounting software, and custom internal tools." },
      { q: "How long is the data stored?", a: "By default, historical tracking data is stored for 12 months. Extended storage options are available upon request." }
    ]
  }
];

function FaqItem({ q, a }: { q: string, a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-lg font-medium text-slate-200 group-hover:text-amber-400 transition-colors pr-8">{q}</span>
        <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-amber-400/20 transition-colors">
          {isOpen ? <Minus className="w-4 h-4 text-amber-400" /> : <Plus className="w-4 h-4 text-slate-400 group-hover:text-amber-400" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-400 leading-relaxed pr-12">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
        >
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">Questions</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto"
        >
          Find answers to common questions about our tracking solutions, hardware installation, and software platform.
        </motion.p>
      </section>

      {/* FAQ Content */}
      <section className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="space-y-12">
          {faqs.map((section, idx) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 md:p-10 rounded-3xl border border-white/10"
            >
              <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-amber-400 rounded-full" />
                {section.category}
              </h2>
              <div className="flex flex-col">
                {section.questions.map((faq, i) => (
                  <FaqItem key={i} q={faq.q} a={faq.a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-10 rounded-3xl bg-blue-900/20 border border-blue-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
          </p>
          <a href="/technical-support" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-colors">
            Contact Support
          </a>
        </motion.div>
      </section>
    </main>
  );
}
