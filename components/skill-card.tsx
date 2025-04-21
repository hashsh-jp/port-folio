import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import * as Icons from "lucide-react"

interface SkillCardProps {
  name: string
  icon: keyof typeof Icons
}

export function SkillCard({ name, icon }: SkillCardProps) {
  const Icon = Icons[icon as keyof typeof Icons] as LucideIcon

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
      <CardContent className="p-4 flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <p className="font-medium text-sm">{name}</p>
      </CardContent>
    </Card>
  )
}
