import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TechStack() {
  return (
    <Tabs defaultValue="frontend" className="w-full">
      <TabsList className="grid grid-cols-4 mb-8">
        <TabsTrigger value="frontend">フロントエンド</TabsTrigger>
        <TabsTrigger value="backend">バックエンド</TabsTrigger>
        <TabsTrigger value="infra">インフラ</TabsTrigger>
        <TabsTrigger value="ai">AI / 機械学習</TabsTrigger>
      </TabsList>

      <TabsContent value="frontend">
        <div className="overflow-x-auto">
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
              <tr>
                <td className="border border-gray-200 px-4 py-2">Next.js</td>
                <td className="border border-gray-200 px-4 py-2">約2年</td>
                <td className="border border-gray-200 px-4 py-2">◎</td>
                <td className="border border-gray-200 px-4 py-2">SSR・PWA・予約UIなど</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">React</td>
                <td className="border border-gray-200 px-4 py-2">約3年</td>
                <td className="border border-gray-200 px-4 py-2">◎</td>
                <td className="border border-gray-200 px-4 py-2">Hooks・状態管理・UI構築</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Vue.js / Nuxt3</td>
                <td className="border border-gray-200 px-4 py-2">約1.5年</td>
                <td className="border border-gray-200 px-4 py-2">○</td>
                <td className="border border-gray-200 px-4 py-2">軽量SPA・SSR構成</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">TypeScript</td>
                <td className="border border-gray-200 px-4 py-2">約3年</td>
                <td className="border border-gray-200 px-4 py-2">◎</td>
                <td className="border border-gray-200 px-4 py-2">型安全な中〜大規模開発対応</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">TailwindCSS / HTML / CSS</td>
                <td className="border border-gray-200 px-4 py-2">約4年</td>
                <td className="border border-gray-200 px-4 py-2">◎</td>
                <td className="border border-gray-200 px-4 py-2">UI構築・SP対応含む</td>
              </tr>
            </tbody>
          </table>
        </div>
      </TabsContent>

      <TabsContent value="backend">
        <div className="overflow-x-auto">
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
              <tr>
                <td className="border border-gray-200 px-4 py-2">Supabase（PostgreSQL）</td>
                <td className="border border-gray-200 px-4 py-2">約1.5年</td>
                <td className="border border-gray-200 px-4 py-2">◎</td>
                <td className="border border-gray-200 px-4 py-2">認証 / RLS / Storage / Edge Function</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Node.js / Express</td>
                <td className="border border-gray-200 px-4 py-2">約1年</td>
                <td className="border border-gray-200 px-4 py-2">○</td>
                <td className="border border-gray-200 px-4 py-2">API開発にて使用</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Python / Django</td>
                <td className="border border-gray-200 px-4 py-2">約3年 / 1年</td>
                <td className="border border-gray-200 px-4 py-2">◎ / ○</td>
                <td className="border border-gray-200 px-4 py-2">バックエンド / AI処理</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Laravel / PHP</td>
                <td className="border border-gray-200 px-4 py-2">約1年</td>
                <td className="border border-gray-200 px-4 py-2">○</td>
                <td className="border border-gray-200 px-4 py-2">中小案件で経験</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Firebase / Firestore</td>
                <td className="border border-gray-200 px-4 py-2">約1年</td>
                <td className="border border-gray-200 px-4 py-2">○</td>
                <td className="border border-gray-200 px-4 py-2">データ保存・認証実装</td>
              </tr>
            </tbody>
          </table>
        </div>
      </TabsContent>

      <TabsContent value="infra">
        <div className="overflow-x-auto">
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
              <tr>
                <td className="border border-gray-200 px-4 py-2">Cloudflare R2</td>
                <td className="border border-gray-200 px-4 py-2">約1年</td>
                <td className="border border-gray-200 px-4 py-2">◎</td>
                <td className="border border-gray-200 px-4 py-2">画像保存・表示の最適化</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Redis</td>
                <td className="border border-gray-200 px-4 py-2">約1年</td>
                <td className="border border-gray-200 px-4 py-2">○</td>
                <td className="border border-gray-200 px-4 py-2">キャッシュ / セッション活用</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Docker</td>
                <td className="border border-gray-200 px-4 py-2">約1.5年</td>
                <td className="border border-gray-200 px-4 py-2">○</td>
                <td className="border border-gray-200 px-4 py-2">ローカル / 本番環境構築</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Git / GitHub</td>
                <td className="border border-gray-200 px-4 py-2">約5年</td>
                <td className="border border-gray-200 px-4 py-2">◎</td>
                <td className="border border-gray-200 px-4 py-2">チーム開発 / PR運用対応</td>
              </tr>
            </tbody>
          </table>
        </div>
      </TabsContent>

      <TabsContent value="ai">
        <div className="overflow-x-auto">
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
              <tr>
                <td className="border border-gray-200 px-4 py-2">OpenAI API</td>
                <td className="border border-gray-200 px-4 py-2">約1年</td>
                <td className="border border-gray-200 px-4 py-2">◎</td>
                <td className="border border-gray-200 px-4 py-2">実プロダクトへの組込実績あり</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Stable Diffusion</td>
                <td className="border border-gray-200 px-4 py-2">約1年</td>
                <td className="border border-gray-200 px-4 py-2">○</td>
                <td className="border border-gray-200 px-4 py-2">画像素材自動生成で使用</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">LangChain / RAG</td>
                <td className="border border-gray-200 px-4 py-2">約0.5年</td>
                <td className="border border-gray-200 px-4 py-2">○</td>
                <td className="border border-gray-200 px-4 py-2">Qdrantと連携し検索拡張</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Qdrant（ベクトルDB）</td>
                <td className="border border-gray-200 px-4 py-2">約0.5年</td>
                <td className="border border-gray-200 px-4 py-2">○</td>
                <td className="border border-gray-200 px-4 py-2">FAQ構築・チャットシステム連携</td>
              </tr>
            </tbody>
          </table>
        </div>
      </TabsContent>
    </Tabs>
  )
}
