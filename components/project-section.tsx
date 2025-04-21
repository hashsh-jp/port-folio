"use client"

import { ProjectCard } from "@/components/project-card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ProjectSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "学習塾向け宿題管理システム",
      company: "waotech（2024〜）",
      description:
        "問題集を一元データ化し、配信・提出・採点・管理をすべて自動化。採点・管理コストを大幅削減。塾の運営効率を改善。",
      achievements: ["月間CV数 +35%", "工数削減 -40%"],
      tech: ["Next.js", "Supabase", "Cloudflare R2", "Redis", "Stripe"],
    },
    {
      title: "SNS自動運用＋AI構成",
      company: "kyo-lab（2023）",
      description:
        "LLMを用いた無在庫転売システムおよびSNS自動運用システムを構築。少人数体制で企画〜販売まで実行。開発教育も並行して実施。",
      achievements: ["教育×開発体制構築"],
      tech: ["Node.js", "Express", "Vue.js", "Nuxt3", "Docker", "Firebase"],
    },
    {
      title: "学習塾向け集客用Lineアプリ",
      company: "実績",
      description: "2ヶ月で実装、本運用化。Line経由でのお問い合わせ増加。LPからの友達追加率（CVR）の増加。",
      achievements: ["2ヶ月で実装", "CVR向上"],
      tech: ["Next.js", "Line API", "Supabase"],
    },
    {
      title: "AIフィルターアプリ",
      company: "実績",
      description: "手動の人力返信でリリース。AIでの編集処理・負荷分散・ログ管理など優先順位つけて対応。",
      achievements: ["TikTok 200万再生", "ユーザー数10万人"],
      tech: ["OpenAI API", "Next.js", "Supabase"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="projects" ref={ref} className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        プロジェクト実績
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            company={project.company}
            description={project.description}
            achievements={project.achievements}
            tech={project.tech}
            index={index}
          />
        ))}
      </motion.div>
    </section>
  )
}
