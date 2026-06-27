'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Strip from '@/components/Strip'
import HowItWorks from '@/components/HowItWorks'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

const Simulator = dynamic(() => import('@/components/Simulator'), { ssr: false })

export interface SimData {
  clientes: number
  ticket: number
  aliquota: number
  pctSva: number
  valorEbook: number
  eco: number
  ecoAnual: number
  roi: number
  ecoPct: number
}

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
