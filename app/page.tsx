"use client"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { StrengthSection } from "@/components/strength-section"
import { TechSection } from "@/components/tech-section"
import { ProjectSection } from "@/components/project-section"
import { CareerSection } from "@/components/career-section"
import { ContactSection } from "@/components/contact-section"
import { useEffect } from "react"
import { AnimatePresence } from "framer-motion"

export default function Home() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      
      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute('href')
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId)
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <AnimatePresence>
      <main className="min-h-screen bg-white overflow-hidden">
        <HeroSection />
        <AboutSection />
        <StrengthSection />
        <TechSection />
        <ProjectSection />
        <CareerSection />
        <ContactSection />
      </main>
    </AnimatePresence>
  )
}
