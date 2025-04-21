"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Award } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  company: string
  description: string
  achievements: string[]
  tech: string[]
  index: number
}

export function ProjectCard({ title, company, description, achievements, tech, index }: ProjectCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
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
        y: -10,
        transition: { duration: 0.2 },
      }}
    >
      <Card className="h-full transition-all hover:shadow-xl border-none bg-gray-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
        <CardHeader className="pb-2">
          <div className="flex items-center text-sm text-muted-foreground mb-1">
            <Building className="h-4 w-4 mr-1" />
            <span>{company}</span>
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm mb-4">{description}</CardDescription>

          {achievements.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <Award className="h-4 w-4 text-blue-500 mr-1" />
                <span className="text-sm font-medium">成果</span>
              </div>
              <ul className="space-y-1">
                {achievements.map((achievement, index) => (
                  <li key={index} className="text-sm flex items-start">
                    <span className="text-blue-500 mr-2">→</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-wrap gap-1 pt-0">
          {tech.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
            >
              <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200">
                {item}
              </Badge>
            </motion.div>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
