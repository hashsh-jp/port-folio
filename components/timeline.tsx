export function Timeline() {
  const experiences = [
    {
      company: "株式会社waotech",
      period: "2024年1月〜現在",
      role: "PM / フルスタックエンジニア",
      description: [
        "学習塾用の宿題管理SaaSを0→1で立ち上げ。要件定義・設計・開発・運用を一貫して担当。",
        "オリジナルの問題集をデータベース化し、配信・提出・採点・進捗管理をすべてクラウド上で完結。",
        "並行して大学生エンジニアを教育・活用し、少人数の受託チームの立ち上げ。開発マネジメントも兼任。",
      ],
      tech: "Next.js / Supabase / Dart / Flutter / AWS / GCP / Cloudflare / Redis / Stripe",
      achievements:
        "業務効率とユーザー満足度を両立したプロダクトを構築。学生メンバーの育成と受託体制構築にも成功。",
    },
    {
      company: "株式会社kyo-lab",
      period: "2023年7月〜2023年12月",
      role: "PM / フルスタックエンジニア",
      description: [
        "AI加工フィルターアプリを企画から立ち上げ、4名体制のPMとして開発・運用をリード。",
        "TikTok連携やバズリサーチを仕組み化し、半年でユーザー10万人 / TikTok 1動画300万回再生",
        "学生エンジニアをインターン採用・育成し、自走可能な開発体制を構築。",
        "社長と事務所に住み込み、24時間AIを活用したプロダクト作りと向き合う生活をしていました。",
      ],
      tech: "Node.js / Express / Vue.js / Nuxt3 / Docker / Firebase / supabase / BigQuery / AWS / GCP / Liff",
      achievements:
        "AIを活用したSNSコンテンツ生成やトレンド分析など、最先端のAI事業を裁量高く任せて頂きました。",
    },
    {
      company: "Sansan株式会社",
      period: "2023年5月〜2023年6月",
      role: "フロントエンドエンジニア",
      description: [
        "社内向け業務支援アプリの開発に参画。Slack Webhookを用いた申請通知の自動化機能を構築。",
        "UIの状態管理、再利用コンポーネントの整備を通じて、保守性向上に貢献。",
      ],
      tech: "React / TypeScript",
      achievements: "業務申請〜通知フローをSlack連携で効率化。業務システムの内製化支援を実現。",
    },
    {
      company: "株式会社インクレイブ",
      period: "2022年4月〜2023年4月",
      role: "フルスタックエンジニア",
      description: [
        "6カ国で運営される業務システム群の保守・開発に従事。各国仕様を一部統合し、共通化による開発効率化を推進。",
        "PM直下で仕様策定〜実装までを一貫して担当。チームの実装リードとして自律的に稼働。",
      ],
      tech: "React / TypeScript / Laravel",
      achievements: "将来的な保守・開発コストの削減とコード共通化に貢献。",
    },
    {
      company: "株式会社ハルエネ電気・おとく電気",
      period: "2019年10月〜2022年3月",
      role: "エンジニア / PM代行",
      description: [
        "営業部門から社内開発チームへ異動後、基幹システムの保守・新規開発を担当。",
        "PM離脱後、要件定義〜タスク管理・外注調整までを代理で担い、企画側との橋渡し役として継続稼働。",
        "新メンバーのオンボーディング設計やタスク分担の整備も実施。",
      ],
      tech: "PHP / Apache / AWS（EC2・RDS）/ REST API",
      achievements: "初めてエンジニアとしての仕事で任せて頂いたPM代行の経験が現在に繋がりました。",
    }
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
            <div className="flex flex-col items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-blue-600">{exp.company}</div>
              <time className="text-xs font-medium text-gray-500">{exp.period}</time>
            </div>
            <div className="text-sm font-medium mb-2">{exp.role}</div>
            <div className="text-sm text-gray-600 mb-2">
              {Array.isArray(exp.description) ? (
                exp.description.map((desc, i) => (
                  <p key={i} className="mb-2 last:mb-0">
                    {desc}
                  </p>
                ))
              ) : (
                <p>{exp.description}</p>
              )}
            </div>
            {exp.tech && (
              <div className="text-xs text-gray-500 mb-1">
                <span className="font-medium">使用技術:</span> {exp.tech}
              </div>
            )}
            {exp.achievements && (
              <div className="text-xs text-gray-500">
                {exp.achievements}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
