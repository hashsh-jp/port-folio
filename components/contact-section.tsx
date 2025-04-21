"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" ref={ref} className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-4">
          連絡先
        </motion.h2>

        <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          複雑な構成でも、技術・進行・チーム育成まで一人称で推進します。
          <br />
          <span className="font-bold">0→1の立ち上げから、AI活用までお任せください。</span>
        </motion.p>

        <motion.div variants={containerVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            {
              icon: <Github className="h-5 w-5 mr-2" />,
              label: "GitHub",
              href: "https://github.com",
              variant: "outline",
            },
            {
              icon: <Linkedin className="h-5 w-5 mr-2" />,
              label: "LinkedIn",
              href: "https://linkedin.com",
              variant: "outline",
            },
            {
              icon: <Twitter className="h-5 w-5 mr-2" />,
              label: "Twitter",
              href: "https://twitter.com",
              variant: "outline",
            },
            {
              icon: <Mail className="h-5 w-5 mr-2" />,
              label: "お問い合わせ",
              href: "mailto:hashsh.net",
              variant: "primary",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                <Button
                  variant={item.variant === "primary" ? "default" : "outline"}
                  className={`rounded-full ${item.variant === "primary" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                >
                  {item.icon}
                  {item.label}
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-sm text-gray-500 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          © 2024 橋本 和也. All rights reserved.
        </motion.div>
      </motion.div>
    </section>
  )
}
