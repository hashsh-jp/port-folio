import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">連絡先</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          複雑な構成でも、技術・進行・チーム育成まで一人称で推進します。
          <br />
          <span className="font-bold">0→1の立ち上げから、AI活用までお任せください。</span>
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded-full">
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded-full">
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </Button>
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded-full">
              <Twitter className="h-5 w-5 mr-2" />
              Twitter
            </Button>
          </Link>
          <Link href="mailto:hashsh.net" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700">
              <Mail className="h-5 w-5 mr-2" />
              お問い合わせ
            </Button>
          </Link>
        </div>

        <div className="text-sm text-gray-500">© 2024 橋本 和也. All rights reserved.</div>
      </div>
    </section>
  )
}
