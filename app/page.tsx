'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Strip from '@/components/Strip'
import HowItWorks from '@/components/HowItWorks'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import type { SimData } from '@/types/simData'

const Simulator = dynamic(() => import('@/components/Simulator'), { ssr: false })

export default function Home() {
  const [heroRoi, setHeroRoi] = useState('')
  const [simData, setSimData] = useState<SimData | null>(null)

  return (
    <>
      <Nav />
      <Hero heroRoi={heroRoi} />
      <Strip />
      <HowItWorks />
      <Simulator onRoiChange={setHeroRoi} onResult={setSimData} />
      <CTA simData={simData} />
      <Footer />
    </>
  )
}
