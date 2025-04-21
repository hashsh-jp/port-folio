import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Timeline } from "@/components/timeline";
import { SkillCard } from "@/components/skill-card";
import { ProjectCard } from "@/components/project-card";
import { HeroSection } from "@/components/hero-section";
import { StrengthSection } from "@/components/strength-section";
import { TechStack } from "@/components/tech-stack";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      
      <section id="about" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">自己紹介</h2>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <p className="text-lg mb-4">
            0→1の立ち上げに強い、自走型のフルスタックエンジニアです。
          </p>
          <p className="text-lg mb-6">
            PMと開発を兼任し、AI活用やモダンスタック構成も含めた
            <span className="font-bold">
              "要件定義〜運用"
            </span> を一貫してプロダクト全体を設計・推進するよう努めます。
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge className="bg-blue-500 hover:bg-blue-600">Next.js</Badge>
            <Badge className="bg-blue-500 hover:bg-blue-600">React</Badge>
            <Badge className="bg-blue-500 hover:bg-blue-600">TypeScript</Badge>
            <Badge className="bg-blue-500 hover:bg-blue-600">Supabase</Badge>
            <Badge className="bg-blue-500 hover:bg-blue-600">PostgreSQL</Badge>
            <Badge className="bg-blue-500 hover:bg-blue-600">Redis</Badge>
            <Badge className="bg-blue-500 hover:bg-blue-600">AI</Badge>
          </div>
        </div>
      </section>
      
      <StrengthSection />
      
      <section id="tech" className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">直近での使用技術</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            <SkillCard name="Next.js" icon="Code" />
            <SkillCard name="React" icon="Code2" />
            <SkillCard name="TypeScript" icon="Braces" />
            <SkillCard name="Supabase" icon="Database" />
            <SkillCard name="PostgreSQL" icon="Database" />
            <SkillCard name="Redis" icon="Database" />
            <SkillCard name="Stripe" icon="CreditCard" />
            <SkillCard name="Docker" icon="Box" />
            <SkillCard name="Cloudflare R2" icon="Cloud" />
            <SkillCard name="OpenAI" icon="Brain" />
            <SkillCard name="Git" icon="GitBranch" />
            <SkillCard name="TailwindCSS" icon="Palette" />
          </div>
          
          <TechStack />
        </div>
      </section>
      
      <section id="projects" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">プロジェクト実績</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard 
            title="学習塾向け宿題管理システム"
            company="waotech（2024〜）"
            description="問題集を一元データ化し、配信・提出・採点・管理をすべて自動化。採点・管理コストを大幅削減。塾の運営効率を改善。"
            achievements={["月間CV数 +35%", "工数削減 -40%"]}
            tech={["Next.js", "Supabase", "Cloudflare R2", "Redis", "Stripe"]}
          />
          
          <ProjectCard 
            title="SNS自動運用＋AI構成"
            company="kyo-lab（2023）"
            description="LLMを用いた無在庫転売システムおよびSNS自動運用システムを構築。少人数体制で企画〜販売まで実行。開発教育も並行して実施。"
            achievements={["教育×開発体制構築"]}
            tech={["Node.js", "Express", "Vue.js", "Nuxt3", "Docker", "Firebase"]}
          />
          
          <ProjectCard 
            title="学習塾向け集客用Lineアプリ"
            company="実績"
            description="2ヶ月で実装、本運用化。Line経由でのお問い合わせ増加。LPからの友達追加率（CVR）の増加。"
            achievements={["2ヶ月で実装", "CVR向上"]}
            tech={["Next.js", "Line API", "Supabase"]}
          />
          
          <ProjectCard 
            title="AIフィルターアプリ"
            company="実績"
            description="手動の人力返信でリリース。AIでの編集処理・負荷分散・ログ管理など優先順位つけて対応。"
            achievements={["TikTok 200万再生", "ユーザー数10万人"]}
            tech={["OpenAI API", "Next.js", "Supabase"]}
          />
        </div>
      </section>
      
      <section id="career" className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">職務経歴</h2>
          <Timeline />
        </div>
      </section>
      
      <ContactSection />
    </main>
  );
}
