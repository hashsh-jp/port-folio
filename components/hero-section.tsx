"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Mail, Download, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="hero" className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden">

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] items-center pb-16">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-2">
              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                橋本 和也
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-gray-500 md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                PMも開発も。AIもUIも。
                <br />
                <span className="font-semibold text-blue-600">自走型フルスタックエンジニア</span>
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="mailto:hashsh.net" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all text-white">
                  <Download className="h-4 w-4 mr-2" />
                  ポートフォリオDL
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <Link href="#about" className="text-gray-500 hover:text-blue-600 transition-colors">
            <ChevronDown className="h-8 w-8" />
            <span className="sr-only">Scroll Down</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
