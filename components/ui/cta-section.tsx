import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-r from-blue-500/80 via-purple-500/80 to-pink-500/80 dark:from-blue-900/80 dark:via-purple-900/80 dark:to-pink-900/80 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white/80 dark:bg-neutral-950/80 shadow-2xl p-12 max-w-2xl w-full text-center backdrop-blur-lg border border-neutral-200 dark:border-neutral-800"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent"
          >
            Ready to Meet Minds Before Faces?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-lg md:text-xl text-neutral-700 dark:text-neutral-200 mb-8"
          >
            Join the UniCon community and start connecting, collaborating, and growing today. Your next big opportunity is just a click away.
          </motion.p>
          <motion.a
            href="/auth/sign-up"
            whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-lg transition-all duration-300 border-2 border-blue-400 dark:border-blue-700 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Get Started
            <ArrowRight size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 