import { motion } from "framer-motion";
import { Github, Twitter, Mail } from "lucide-react";

const socials = [
  {
    icon: <Github size={22} />, href: "https://github.com/", label: "GitHub"
  },
  {
    icon: <Twitter size={22} />, href: "https://twitter.com/", label: "Twitter"
  },
  {
    icon: <Mail size={22} />, href: "mailto:hello@unicon.com", label: "Email"
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 w-full py-10 bg-white/80 dark:bg-neutral-950/80 border-t border-neutral-200 dark:border-neutral-800 backdrop-blur-lg">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-lg font-bold bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent"
        >
          UniCon
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-6"
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#6366f1' }}
              whileTap={{ scale: 0.95 }}
              className="text-neutral-600 dark:text-neutral-300 hover:text-blue-500 transition-colors duration-200"
              aria-label={s.label}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-sm text-neutral-500 dark:text-neutral-400"
        >
          © {new Date().getFullYear()} UniCon. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
} 