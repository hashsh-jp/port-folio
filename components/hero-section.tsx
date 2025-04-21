"use client"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  // 上部 useState の下に追加
  const birthDate = new Date(2000, 0, 10) // 月は0-indexed（0 = 1月）
  const startDate = new Date(2019, 9, 1) // 9 = 10月

  const getAge = () => {
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  const getExperience = () => {
    const today = new Date()
    const diff = today.getTime() - startDate.getTime()
    const years = diff / (1000 * 60 * 60 * 24 * 365.25)
    // 0.5年単位で四捨五入
    const roundedYears = Math.round(years * 2) / 2
    // 年数を「年」「年半」形式で返す
    return Number.isInteger(roundedYears) ? `${roundedYears}年` : `${Math.floor(roundedYears)}年半`
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-blue-50"
    >
      {/* 背景要素 - PCでより豪華に、モバイルでシンプルに */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-1/3 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        <div className="hidden md:block absolute -bottom-20 -right-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="container max-w-7xl px-4 md:px-6 relative z-10">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center pb-16 md:pb-24">
          <div
            className="flex flex-col justify-center space-y-6 md:space-y-8"
          >
            <div className="space-y-3 md:space-y-4">
              <div className="overflow-hidden">
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight transform transition-all duration-700 hover:text-blue-600"
                >
                  Kazuya Hashimoto
                </h1>
              </div>
              <div className="text-sm text-gray-500">
                {getAge()}歳 / エンジニア歴 {getExperience()}年
              </div>
              
              <div className="overflow-hidden">
                <p
                  className="max-w-[600px] text-gray-500 text-lg md:text-xl lg:text-2xl leading-relaxed"
                >
                  PMも開発も。AIもUIも。
                  <br />
                  <span className="font-semibold text-blue-600 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">自走型フルスタックエンジニア</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* 右側のビジュアル要素 - PCでより豊かに */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-white rounded-xl shadow-lg transform rotate-3 transition-all duration-500 hover:rotate-6 hover:scale-105"></div>
              <div className="absolute inset-0 bg-white rounded-xl shadow-lg transform -rotate-3 transition-all duration-500 hover:-rotate-6 hover:scale-105 flex items-center justify-center">
                <div className="text-6xl font-bold text-blue-600 opacity-20">&lt;/&gt;</div>
              </div>
              <div className="absolute inset-x-0 -bottom-6 mx-auto w-3/4 h-4 bg-black/5 blur-xl rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center"
        >
          <a href="#about" className="text-gray-400 hover:text-blue-600 transition-colors duration-300 flex flex-col items-center">
            <span className="text-sm font-medium mb-2 opacity-80">詳細を見る</span>
            <div className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-300 hover:border-blue-400 animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </a>
        </div>
      </div>
      
      {/* スタイル定義 */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(-30px, -20px) scale(1.05);
          }
        }
        
        .animate-blob {
          animation: blob 10s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
