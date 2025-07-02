import { motion } from "framer-motion";
import { UserPlus, MessageCircle, Users, Rocket } from "lucide-react";

const steps = [
  {
    icon: <UserPlus size={32} className="text-blue-500" />,
    title: "Sign Up Instantly",
    description: "Create your account in seconds with your university email.",
  },
  {
    icon: <Users size={32} className="text-green-500" />,
    title: "Find Your Community",
    description: "Browse and join groups, clubs, and events that match your interests.",
  },
  {
    icon: <MessageCircle size={32} className="text-purple-500" />,
    title: "Start Conversations",
    description: "Chat, share, and collaborate with fellow students in real time.",
  },
  {
    icon: <Rocket size={32} className="text-yellow-500" />,
    title: "Grow & Shine",
    description: "Build your network, gain recognition, and make your mark on campus.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent"
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white/80 dark:bg-neutral-900/80 shadow-xl p-8 flex flex-col items-center text-center backdrop-blur-lg border border-neutral-200 dark:border-neutral-800"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 