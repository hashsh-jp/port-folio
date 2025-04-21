"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { useState } from "react"

export function TechStack() {
  const [activeTab, setActiveTab] = useState("frontend")

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 md:p-8"
    >
      <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
            <TabsTrigger value="frontend" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              フロントエンド
            </TabsTrigger>
            <TabsTrigger value="backend" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              バックエンド
            </TabsTrigger>
            <TabsTrigger value="infra" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              インフラ
            </TabsTrigger>
            <TabsTrigger value="ai" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              AI / 機械学習
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="frontend">
          <TechTable
            data={[
              { tech: "Next.js", years: "約2年", level: "◎", note: "SSR・PWA・予約UIなど" },
              { tech: "React", years: "約3年", level: "◎", note: "Hooks・状態管理・UI構築" },
              { tech: "Vue.js / Nuxt3", years: "約1.5年", level: "○", note: "軽量SPA・SSR構成" },
              { tech: "TypeScript", years: "約3年", level: "◎", note: "型安全な中〜大規模開発対応" },
              { tech: "TailwindCSS / HTML / CSS", years: "約4年", level: "◎", note: "UI構築・SP対応含む" },
            ]}
            isActive={activeTab === "frontend"}
          />
        </TabsContent>

        <TabsContent value="backend">
          <TechTable
            data={[
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
            ]}
            isActive={activeTab === "backend"}
          />
        </TabsContent>

        <TabsContent value="infra">
          <TechTable
            data={[
              { tech: "Cloudflare R2", years: "約1年", level: "◎", note: "画像保存・表示の最適化" },
              { tech: "Redis", years: "約1年", level: "○", note: "キャッシュ / セッション活用" },
              { tech: "Docker", years: "約1.5年", level: "○", note: "ローカル / 本番環境構築" },
              { tech: "Git / GitHub", years: "約5年", level: "◎", note: "チーム開発 / PR運用対応" },
            ]}
            isActive={activeTab === "infra"}
          />
        </TabsContent>

        <TabsContent value="ai">
          <TechTable
            data={[
              { tech: "OpenAI API", years: "約1年", level: "◎", note: "実プロダクトへの組込実績あり" },
              { tech: "Stable Diffusion", years: "約1年", level: "○", note: "画像素材自動生成で使用" },
              { tech: "LangChain / RAG", years: "約0.5年", level: "○", note: "Qdrantと連携し検索拡張" },
              { tech: "Qdrant（ベクトルDB）", years: "約0.5年", level: "○", note: "FAQ構築・チャットシステム連携" },
            ]}
            isActive={activeTab === "ai"}
          />
        </TabsContent>
      </Tabs>
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
  isActive: boolean
}

function TechTable({ data, isActive }: TechTableProps) {
  const tableVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  }

  const rowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div
      className="overflow-x-auto"
      variants={tableVariants}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
    >
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2 text-left">技術</th>
            <th className="border border-gray-200 px-4 py-2 text-left">経験年数</th>
            <th className="border border-gray-200 px-4 py-2 text-left">熟練度</th>
            <th className="border border-gray-200 px-4 py-2 text-left">備考</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <motion.tr
              key={index}
              variants={rowVariants}
              custom={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="border border-gray-200 px-4 py-2 font-medium">{item.tech}</td>
              <td className="border border-gray-200 px-4 py-2">{item.years}</td>
              <td className="border border-gray-200 px-4 py-2">{item.level}</td>
              <td className="border border-gray-200 px-4 py-2">{item.note}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  )
}
