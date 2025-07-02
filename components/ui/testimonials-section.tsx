import { motion } from "framer-motion";
import { User, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Computer Science, 3rd Year",
    quote:
      "This platform helped me meet amazing people and collaborate on real projects. The community is super supportive!",
    avatar: <User size={36} className="text-blue-500" />,
  },
  {
    name: "Priya Singh",
    role: "Electronics, 2nd Year",
    quote:
      "I found my best friends and joined two clubs through this app. The events and chat features are top-notch!",
    avatar: <User size={36} className="text-pink-500" />,
  },
  {
    name: "Rahul Verma",
    role: "Mechanical, 4th Year",
    quote:
      "The recognition and rewards system keeps me motivated. The UI is fun and easy to use!",
    avatar: <User size={36} className="text-green-500" />,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white/80 to-neutral-100 dark:from-neutral-950/80 dark:to-neutral-900">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent"
        >
          What Students Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white/80 dark:bg-neutral-900/80 shadow-xl p-8 flex flex-col items-center text-center backdrop-blur-lg border border-neutral-200 dark:border-neutral-800 relative"
            >
              <span className="absolute top-6 left-6 opacity-20">
                <Quote size={32} />
              </span>
              <div className="mb-4">{t.avatar}</div>
              <blockquote className="text-lg italic text-neutral-700 dark:text-neutral-200 mb-4">
                “{t.quote}”
              </blockquote>
              <div className="font-semibold text-neutral-900 dark:text-white">{t.name}</div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 