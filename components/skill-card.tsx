"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import * as Icons from "lucide-react"
import { motion } from "framer-motion"

interface SkillCardProps {
  name: string
  icon: keyof typeof Icons
  index: number
}

export function SkillCard({ name, icon, index }: SkillCardProps) {
  const Icon = Icons[icon as keyof typeof Icons] as LucideIcon

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.05,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -5,
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      <Card className="overflow-hidden transition-all hover:shadow-md border-none bg-gray-50">
        <CardContent className="p-4 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <p className="font-medium text-sm">{name}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
