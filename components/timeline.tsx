export function Timeline() {
  const experiences = [
    {
      company: "株式会社waotech",
      period: "2024年1月〜現在",
      role: "PM / フルスタックエンジニア",
      description:
        "新規プロダクト立ち上げ。学習塾向けの宿題管理システムを開発。問題集を一元データ化し、配信・提出・採点・管理をすべて自動化。",
      tech: "Next.js / Supabase / Cloudflare R2 / Redis / Stripe",
      achievements: "採点・管理コストを大幅削減。塾の運営効率を改善。",
    },
    {
      company: "株式会社kyo-lab",
      period: "2023年7月〜2023年12月",
      role: "PM / 開発",
      description: "LLMを用いた無在庫転売システムおよびSNS自動運用システムを構築。",
      tech: "Node.js / Express / Vue.js / Nuxt3 / Docker / Firebase / BigQuery / GCS / Liff",
      achievements: "少人数体制で企画〜販売まで実行。開発教育も並行して実施。",
    },
    {
      company: "Sansan株式会社",
      period: "2023年5月〜2023年6月",
      role: "エンジニア",
      description: "短期プロジェクト参画",
      tech: "React / TypeScript",
      achievements: "",
    },
    {
      company: "株式会社インクレイブ",
      period: "2022年4月〜2023年4月",
      role: "エンジニア",
      description: "Web開発プロジェクト",
      tech: "React / TypeScript / Laravel",
      achievements: "",
    },
    {
      company: "株式会社ポーターズ",
      period: "2022年1月〜2022年3月",
      role: "エンジニア",
      description: "短期プロジェクト",
      tech: "React / JavaScript",
      achievements: "",
    },
    {
      company: "株式会社ハルエネ電気・おとく電気",
      period: "2019年10月〜2021年12月",
      role: "営業 / マーケティング",
      description: "営業活動およびマーケティング業務",
      tech: "",
      achievements: "",
    },
  ]

  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <span className="font-bold text-blue-500">{experiences.length - index}</span>
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-blue-600">{exp.company}</div>
              <time className="text-xs font-medium text-gray-500">{exp.period}</time>
            </div>
            <div className="text-sm font-medium mb-2">{exp.role}</div>
            <div className="text-sm text-gray-600 mb-2">{exp.description}</div>
            {exp.tech && (
              <div className="text-xs text-gray-500 mb-1">
                <span className="font-medium">使用技術:</span> {exp.tech}
              </div>
            )}
            {exp.achievements && (
              <div className="text-xs text-gray-500">
                <span className="font-medium">成果:</span> {exp.achievements}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
