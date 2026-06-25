'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Strip from '@/components/Strip'
import HowItWorks from '@/components/HowItWorks'
import Simulator from '@/components/Simulator'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

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
