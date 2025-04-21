"use client"

import { SkillCard } from "@/components/skill-card"
import { TechStack } from "@/components/tech-stack"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function TechSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const skills = [
  // TypeScript / React / Next.js / Express
  { name: "TypeScript", icon: "Braces" },
  { name: "React", icon: "Code2" },
  { name: "Next.js (App Router)", icon: "Code" },
  { name: "Express", icon: "Server" },

  // Dart / Flutter
  { name: "Dart", icon: "Code" },
  { name: "Flutter", icon: "Smartphone" },

  // Supabase / Firebase / Cloudflare
  { name: "Supabase", icon: "Database" },
  { name: "Firebase", icon: "Flame" },
  { name: "Cloudflare", icon: "Cloud" },

  // AWS / GCP / Redis / Stripe / Git
  { name: "AWS", icon: "Cloud" },
  { name: "GCP", icon: "Cloud" },
  { name: "Redis", icon: "Database" },
  { name: "Stripe", icon: "CreditCard" },
  { name: "Git", icon: "GitBranch" },

  // UI / CSS / AI
  { name: "shadcn/ui", icon: "Layout" },
  { name: "TailwindCSS", icon: "Palette" },
  { name: "LLM", icon: "Brain" },
  { name: "VectorStore", icon: "Library" },
] as const

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  return (
    <section id="tech" ref={ref} className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center relative inline-block">
          Current Tech stack
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : { width: "0%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            ></motion.div>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} icon={skill.icon} index={index} />
          ))}
        </motion.div>

        <TechStack />
      </div>
    </section>
  )
}
