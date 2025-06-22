'use client'

import Image   from 'next/image'
import bgMap   from '../../public/bg-map.png'
import layer   from '../../public/layer.png'

export default function DashboardPage() {
  return (
    <div className="relative w-full h-[650px] lg:left-32 md:h-[850px] lg:h-full max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg bg-[#042142]">

      {/* خريطة الخلفية */}
      <Image
        src={bgMap}
        alt="Map background"
        fill
        priority
        className="object-cover"
      />

      {/* طبقة التغميق الشفَّافة */}
      <div className="absolute inset-0 bg-[#001E33]/70" />

      {/* طبقة الـ glow */}
      <Image
        src={layer}
        alt=""
        fill
        priority
        className="pointer-events-none object-contain"
        style={{ objectPosition: 'center' }}
      />

      {/* العنوان الجانبي */}
      <h2 className="absolute top-6 left-6 text-sm font-medium text-white">
        Privacy Policy
      </h2>

      {/* النص الرئيسي */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 z-10 text-white">
        <span className="uppercase text-xs font-semibold tracking-widest text-[#BBBBBB]">
          THE
        </span>

        <h1 className="mt-1 text-4xl md:text-5xl font-extrabold">
          TRAVLAB&nbsp;LEGAL
        </h1>

        <p className="mt-4 max-w-xl text-base font-medium">
          The information provided here is for Travlab customers and users who
          have questions about our terms, policies, intellectual property, and
          compliance.
        </p>
      </div>
    </div>
  )
}
