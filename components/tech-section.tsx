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
    { name: "Next.js", icon: "Code" },
    { name: "React", icon: "Code2" },
    { name: "TypeScript", icon: "Braces" },
    { name: "Supabase", icon: "Database" },
    { name: "PostgreSQL", icon: "Database" },
    { name: "Redis", icon: "Database" },
    { name: "Stripe", icon: "CreditCard" },
    { name: "Docker", icon: "Box" },
    { name: "Cloudflare R2", icon: "Cloud" },
    { name: "OpenAI", icon: "Brain" },
    { name: "Git", icon: "GitBranch" },
    { name: "TailwindCSS", icon: "Palette" },
  ] as const

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
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          直近での使用技術
        </motion.h2>

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
