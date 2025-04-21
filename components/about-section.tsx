"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const skills = [
    "Next.js", "React", "TypeScript", "Supabase", 
    "PostgreSQL", "Redis", "AI", "Docker", "Cloudflare"
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-8"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center">
          自己紹介
        </motion.h2>
        
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
          <motion.p variants={itemVariants} className="text-lg mb-4">
            0→1の立ち上げに強い、自走型のフルスタックエンジニアです。
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg mb-6">
            PMと開発を兼任し、AI活用やモダンスタック構成も含めた
            <span className="font-bold text-blue-600">"要件定義〜運用"</span> を一貫してプロダクト全体を設計・推進するよう努めます。
          </motion.p>
          
          <motion.div variants={containerVariants} className="flex flex-wrap gap-2 mt-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 10 },
                  visible: { 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    transition: { 
                      delay: index * 0.05,
                      duration: 0.4
                    }
                  }
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Badge className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
