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

export default function Home() {
  const [heroRoi, setHeroRoi] = useState('')

  return (
    <>
      <Nav />
      <Hero heroRoi={heroRoi} />
      <Strip />
      <HowItWorks />
      <Simulator onRoiChange={setHeroRoi} />
      <CTA />
      <Footer />
    </>
  )
}
