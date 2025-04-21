import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">橋本 和也</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                PMも開発も。AIもUIも。
                <br />
                <span className="font-semibold text-blue-600">自走型フルスタックエンジニア</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:hashsh.net" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700">
                  <Download className="h-4 w-4 mr-2" />
                  ポートフォリオDL
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="橋本 和也"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
            <span>週3〜5日 / 都内 or リモート</span>
          </div>
        </div>
      </div>
    </section>
  )
}
