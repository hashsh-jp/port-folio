"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"
import { Code, Database, Cloud, Brain } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function TechStack() {
  const [open, setOpen] = useState<Record<string, boolean>>({
    ai: false,
    frontend: false,
    backend: false,
    other: false,
  })

  const techCategories = [
    {
      id: "ai",
      name: "生成AI / Vector Store",
      icon: <Brain className="w-5 h-5 mr-2" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500",
      data: [
        { tech: "生成AI × Webサービス開発", years: "3年", level: "★★★", note: "生成AIを活用した開発を2022年から開始（例：LP動的生成 / 自動返信）" },
        { tech: "ChatGPT Function Calling", years: "2年", level: "★★", note: "反復業務の自動化・予約リンク生成など" },
        { tech: "Stable Diffusion", years: "1年", level: "★★★", note: "LoRA作成・API化・画像量産（SNS・LP用）" },
        { tech: "OpenAI API", years: "3年", level: "★★★", note: "分類・要約・自動返信などタスクベースで活用" },
        { tech: "SNSコンテンツ自動運営", years: "約1年", level: "★★★", note: "AIによる投稿生成・DM自動対応・ユーザー対応自動化" },
        { tech: "Qdrant", years: "約0.5年", level: "★★", note: "ベクトル検索によるFAQ・チャットBot" },
        { tech: "DeepFake", years: "1年", level: "★★", note: "顔差し替え・映像生成のPoCツール作成" },
      ],
    },
    {
      id: "frontend",
      name: "フロントエンド",
      icon: <Code className="w-5 h-5 mr-2" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
      data: [
        { tech: "TypeScript", years: "3年", level: "★★★", note: "型安全な中〜大規模開発対応" },
        { tech: "Next.js", years: "2年", level: "★★★", note: "SSR・PWAを使用した予約システムなど" },
        { tech: "React", years: "3年", level: "★★★", note: "Hooks・状態管理・UI構築" },
        { tech: "Vue.js / Nuxt3", years: "1年", level: "★★", note: "軽量SPA・SSR構成" },
        { tech: "TailwindCSS / HTML / CSS", years: "4年", level: "★★★", note: "UI構築・SP対応含む" },
        { tech: "Dart / Flutter", years: "0.5年", level: "★☆", note: "クイズアプリなど簡易的なアプリケーション開発" },
      ],
    },
    {
      id: "backend",
      name: "バックエンド",
      icon: <Database className="w-5 h-5 mr-2" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500",
      data: [
        { tech: "Supabase（PostgreSQL）", years: "1.5年", level: "★★★", note: "認証 / RLS / Storage / Edge Function" },
        { tech: "Node.js / Express", years: "1年", level: "★★", note: "API開発にて使用（予約・チャット機能）" },
        { tech: "Python / Django", years: "3年 / 1年", level: "★★★ / ★★", note: "バックエンド / AI処理用API構築" },
        { tech: "Laravel / PHP", years: "1年", level: "★★", note: "中小案件でのCRUD開発" },
        { tech: "Firebase / Firestore", years: "1年", level: "★★", note: "データ保存・認証実装・ABテスト設計" },
        { tech: "Cloudflare Workers", years: "1年", level: "★★", note: "CDNキャッシュ・軽量API実装" },
        { tech: "Stripe / Webhook", years: "半年", level: "★★", note: "サブスク / 会員課金処理" },
      ],
    },
    {
      id: "other",
      name: "その他の使用技術",
      icon: <Cloud className="w-5 h-5 mr-2" />,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-500",
      data: [
        { tech: "AWS", years: "2年", level: "★★★", note: "S3 / EC2 / RDS / Lambda / Amplify / CloudWatch" },
        { tech: "GCP", years: "2年", level: "★★★", note: "Cloud Run / Task / Firestore / Functions / Storage / BigQuery" },
        { tech: "Cloudflare", years: "1年", level: "★★★", note: "R2 / Cache Rules / Workers / Pages" },
        { tech: "Redis", years: "1年", level: "★★", note: "予約キャッシュ・セッション管理（Upstash）" },
        { tech: "Docker", years: "1.5年", level: "★★", note: "ローカル〜本番環境構築用に使用" },
        { tech: "Git / GitHub", years: "5年", level: "★★★", note: "PR運用 / CI/CD連携（Amplify / GitHub Actions）" },
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
      {/* 表形式（PC） */}
      <table className="min-w-max w-full border-collapse hidden sm:table">
        <thead>
          <tr className="text-left bg-gray-100 text-sm">
            <th className="px-3 py-2">技術</th>
            <th className="px-2 py-2">年数</th>
            <th className="px-2 py-2">レベル</th>
            <th className="px-2 py-2">補足</th>
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
              <td className="border-b border-gray-200 px-3 py-1 text-md whitespace-nowrap">{item.tech}</td>
              <td className="border-b border-gray-200 px-2 py-1 text-sm whitespace-nowrap">{item.years}</td>
              <td className="border-b border-gray-200 px-2 py-1 text-sm whitespace-nowrap">{item.level}</td>
              <td className="border-b border-gray-200 px-2 py-1 text-xs whitespace-nowrap">{item.note}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>

      {/* カード形式（スマホ） */}
      <div className="grid sm:hidden gap-3">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="border p-3 rounded-md shadow-sm bg-white"
          >
            <div className="font-semibold text-sm mb-1">{item.tech}</div>
            <div className="text-xs">年数: {item.years}</div>
            <div className="text-xs">レベル: {item.level}</div>
            <div className="text-xs text-gray-500 mt-1">{item.note}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
