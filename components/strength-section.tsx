"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Puzzle, Target, Bot, Cog, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function StrengthSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const strengths = [
    {
      icon: <Puzzle className="h-8 w-8 text-blue-500" />,
      title: "最小限のリソースで最大限の立ち上げ",
      description: "0→1のプロト開発〜本リリース、ユーザー獲得まで新規事業の要件定義〜運用までを一気通貫で推進します。",
      achievements: [
        "学習塾向け集客用Lineアプリ（2ヶ月で実装、本運用化）",
        "AIフィルターアプリ（TikTok 200万再生、ユーザー数10万人）",
      ],
    },
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "技術とビジネスの中継地点",
      description: "開発と事業サイドをつなぐ'通訳'としての役割。要件の言語化、仕様設計、工数見積もりから進行管理まで。",
      achievements: [
        "社内向け業務システム（納期・予算通りにリリース、業務時間を週5時間削減）",
        "ベンチャー向け受託開発案件（短納期でもスムーズな合意形成と開発を両立）",
      ],
    },
    {
      icon: <Bot className="h-8 w-8 text-blue-500" />,
      title: "AIを'現場'で使える実装力",
      description: "単なる試作ではない、'実運用'を見据えたAI統合の実績",
      achievements: ["Vector StoreによるRAG検索システムの実装", "OpenAI APIを活用した実用的なアプリケーション開発"],
    },
    {
      icon: <Cog className="h-8 w-8 text-blue-500" />,
      title: "横断的なモダンスタック構築経験",
      description: "クラウドネイティブな構成を自在に操るフルスタックエンジニア",
      achievements: [
        "Supabase（PostgreSQL / Edge Functions）",
        "Redis（セッション管理・高速キャッシュ層）",
        "Cloudflare R2",
      ],
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "技術教育・チームビルディングの実績",
      description: "若手育成にも注力、未来のエンジニアを育てるプロ",
      achievements: [
        "大学生エンジニア3名を指導、うち2名は大手IT企業へ内定",
        "単なる技術指導ではなく、チームで成果を出す力も育成",
      ],
    },
  ]

  return (
    <section id="strengths" ref={ref} className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          得意なこと
        </motion.h2>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
            >
              <StrengthCard
                icon={strength.icon}
                title={strength.title}
                description={strength.description}
                achievements={strength.achievements}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface StrengthCardProps {
  icon: React.ReactNode
  title: string
  description: string
  achievements: string[]
}

function StrengthCard({ icon, title, description, achievements }: StrengthCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-xl border-none">
      <CardHeader className="pb-2 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full -mr-12 -mt-12 opacity-50"></div>
        <div className="mb-2 relative z-10">{icon}</div>
        <CardTitle className="text-xl relative z-10">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm mb-4">{description}</CardDescription>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-sm flex items-start">
              <span className="text-blue-500 mr-2">→</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
