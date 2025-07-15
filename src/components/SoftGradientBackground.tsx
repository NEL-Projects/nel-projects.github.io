"use client"

import React from 'react'

const SoftGradientBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large gradient circles */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-gradient-to-br from-pink-200/25 to-orange-200/25 rounded-full blur-3xl animate-float-slower"></div>
      <div className="absolute -bottom-32 left-1/4 w-72 h-72 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-3xl animate-float-medium"></div>
      
      {/* Medium gradient circles */}
      <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-gradient-to-br from-violet-200/35 to-indigo-200/35 rounded-full blur-2xl animate-float-reverse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-gradient-to-br from-cyan-200/30 to-teal-200/30 rounded-full blur-2xl animate-float-slow"></div>
      
      {/* Small accent circles */}
      <div className="absolute top-2/3 left-1/5 w-32 h-32 bg-gradient-to-br from-rose-200/40 to-pink-200/40 rounded-full blur-xl animate-float-fast"></div>
      <div className="absolute top-1/6 right-1/4 w-24 h-24 bg-gradient-to-br from-amber-200/45 to-yellow-200/45 rounded-full blur-xl animate-float-medium"></div>
      <div className="absolute bottom-1/4 left-2/3 w-28 h-28 bg-gradient-to-br from-emerald-200/35 to-green-200/35 rounded-full blur-xl animate-float-reverse"></div>
    </div>
  )
}

export default SoftGradientBackground 