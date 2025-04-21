"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"
import { Code, Database, Server, Brain } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function TechStack() {
  const [open, setOpen] = useState<Record<string, boolean>>({
    frontend: false,
    backend: false,
    infra: false,
    ai: false,
  })

  // Tech categories with their respective icons and data
  const techCategories = [
    {
      id: "frontend",
      name: "フロントエンド",
      icon: <Code className="w-5 h-5 mr-2" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
      data: [
        { tech: "Next.js", years: "約2年", level: "◎", note: "SSR・PWA・予約UIなど" },
        { tech: "React", years: "約3年", level: "◎", note: "Hooks・状態管理・UI構築" },
        { tech: "Vue.js / Nuxt3", years: "約1.5年", level: "○", note: "軽量SPA・SSR構成" },
        { tech: "TypeScript", years: "約3年", level: "◎", note: "型安全な中〜大規模開発対応" },
        { tech: "TailwindCSS / HTML / CSS", years: "約4年", level: "◎", note: "UI構築・SP対応含む" },
      ],
    },
    {
      id: "backend",
      name: "バックエンド",
      icon: <Database className="w-5 h-5 mr-2" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500",
      data: [
        {
          tech: "Supabase（PostgreSQL）",
          years: "約1.5年",
          level: "◎",
          note: "認証 / RLS / Storage / Edge Function",
        },
        { tech: "Node.js / Express", years: "約1年", level: "○", note: "API開発にて使用" },
        { tech: "Python / Django", years: "約3年 / 1年", level: "◎ / ○", note: "バックエンド / AI処理" },
        { tech: "Laravel / PHP", years: "約1年", level: "○", note: "中小案件で経験" },
        { tech: "Firebase / Firestore", years: "約1年", level: "○", note: "データ保存・認証実装" },
      ],
    },
    {
      id: "infra",
      name: "インフラ",
      icon: <Server className="w-5 h-5 mr-2" />,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-500",
      data: [
        { tech: "Cloudflare R2", years: "約1年", level: "◎", note: "画像保存・表示の最適化" },
        { tech: "Redis", years: "約1年", level: "○", note: "キャッシュ / セッション活用" },
        { tech: "Docker", years: "約1.5年", level: "○", note: "ローカル / 本番環境構築" },
        { tech: "Git / GitHub", years: "約5年", level: "◎", note: "チーム開発 / PR運用対応" },
      ],
    },
    {
      id: "ai",
      name: "AI / 機械学習",
      icon: <Brain className="w-5 h-5 mr-2" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500",
      data: [
        { tech: "OpenAI API", years: "約1年", level: "◎", note: "実プロダクトへの組込実績あり" },
        { tech: "Stable Diffusion", years: "約1年", level: "○", note: "画像素材自動生成で使用" },
        { tech: "LangChain / RAG", years: "約0.5年", level: "○", note: "Qdrantと連携し検索拡張" },
        { tech: "Qdrant（ベクトルDB）", years: "約0.5年", level: "○", note: "FAQ構築・チャットシステム連携" },
      ],
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-bl-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-50 rounded-tr-full opacity-30"></div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-6 text-center">技術スタック</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techCategories.map((category) => (
            <Dialog
              key={category.id}
              open={open[category.id]}
              onOpenChange={(isOpen) => setOpen((prev) => ({ ...prev, [category.id]: isOpen }))}
            >
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    className={`w-full h-24 bg-gradient-to-r ${category.color} hover:opacity-90 flex flex-col items-center justify-center text-white rounded-xl`}
                  >
                    <div className="flex items-center mb-2">
                      {category.icon}
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className="text-xs opacity-80">クリックして詳細を表示</span>
                  </Button>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-3xl max-h-[80vh] p-0 overflow-hidden">
                <DialogHeader className={`p-4 ${category.bgColor} text-white`}>
                  <DialogTitle className="flex items-center">
                    {category.icon}
                    {category.name}
                  </DialogTitle>
                </DialogHeader>
                <div className="p-6 overflow-auto max-h-[calc(80vh-80px)]">
                  <TechTable data={category.data} />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

interface TechTableProps {
  data: {
    tech: string
    years: string
    level: string
    note: string
  }[]
}

function TechTable({ data }: TechTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-300 px-4 py-3 text-left font-bold">技術</th>
            <th className="border-b-2 border-gray-300 px-4 py-3 text-left font-bold">経験年数</th>
            <th className="border-b-2 border-gray-300 px-4 py-3 text-left font-bold">熟練度</th>
            <th className="border-b-2 border-gray-300 px-4 py-3 text-left font-bold">備考</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="border-b border-gray-200 px-4 py-3 font-medium">{item.tech}</td>
              <td className="border-b border-gray-200 px-4 py-3">{item.years}</td>
              <td className="border-b border-gray-200 px-4 py-3">{item.level}</td>
              <td className="border-b border-gray-200 px-4 py-3">{item.note}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
