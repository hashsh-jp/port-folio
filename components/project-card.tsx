import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Award } from "lucide-react"

interface ProjectCardProps {
  title: string
  company: string
  description: string
  achievements: string[]
  tech: string[]
}

export function ProjectCard({ title, company, description, achievements, tech }: ProjectCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-md">
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
          <Badge key={index} variant="secondary" className="text-xs">
            {item}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}
