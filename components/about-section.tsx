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
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const skills = ["TypeScript", "Python", "PHP", "React", "Next.js", "Vue", "Nuxt 3", "Django", "Laravel", "AWS", "GCP", "Linux", "Docker", "Cloudflare"]

  return (
    <section id="about" ref={ref} className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-blue-50 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-100 rounded-full opacity-20 blur-2xl"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-8 relative z-10"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center relative inline-block">
            About Me
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : { width: "0%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            ></motion.div>
          </h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white rounded-xl p-6 md:p-8 shadow-xl border border-gray-100 relative overflow-hidden backdrop-blur-sm"
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.15)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Left accent bar with animation */}
          <motion.div
            className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          ></motion.div>

          <div className="pl-4">
            <motion.p variants={itemVariants} className="text-lg md:text-xl mb-4 leading-relaxed">
              <span className="font-semibold text-blue-600">0→1の立ち上げに強い</span>
              、自走型のフルスタックエンジニアです。
              2022年末からAIを開発実務に取り入れ始め、LLMや画像生成APIを組み込んだWebサービスを多数構築。
              <motion.span
                className="inline-block font-medium mt-2"
                whileHover={{ color: "#3b82f6", scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                「AI × Web | スマホ | Lineアプリ 」での高速立ち上げを得意としています。
              </motion.span>
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg md:text-xl mb-6 leading-relaxed">
              PMと開発を兼任し、AI活用やモダンスタック構成も含めた
              <motion.span
                className="mx-1 font-bold text-blue-600 inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                "要件定義〜運用"
              </motion.span>
              を一貫してプロダクト全体を設計・推進するよう努めます。
              <br className="hidden md:block" />
              <motion.span
                className="relative inline-block mt-2"
                whileHover={{ color: "#3b82f6" }}
                transition={{ duration: 0.2 }}
              >
                LLMによる自動返信、画像生成AIによるコンテンツ生成、ベクトル検索でのRAG実装など、
                <span className="font-semibold">実業務に落とし込む形でのAI実装に精通</span>しています。
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 opacity-70"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </motion.span>
            </motion.p>
          </div>

          <motion.div variants={containerVariants} className="flex flex-wrap gap-2 mt-8 pl-4">
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
                      duration: 0.4,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.08,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-1.5 px-4 text-sm font-medium shadow-sm hover:shadow">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom decorative element */}
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-50 rounded-tl-full opacity-20 -mr-10 -mb-10"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}
