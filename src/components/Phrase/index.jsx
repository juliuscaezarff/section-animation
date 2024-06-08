'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import Image1 from '../../../public/images/Image1.jpg'
import Image2 from '../../../public/images/Image2.jpg'
import Image3 from '../../../public/images/Image3.jpg'
import Lenis from '@studio-freight/lenis'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  return (
    <main className="overflow-hidden">
      <div className="h-[9.22vw]" />
      <div ref={container} className="hidden lg:block"> 
        <Slide src={Image1} left="-55%" progress={scrollYProgress} direction='left'/>
        <Slide src={Image2} left="-15%" progress={scrollYProgress} direction='right'/>
        <Slide src={Image3} left="-40%" progress={scrollYProgress} direction='left'/>
      </div>
      <div className="h-[10vw]" />
    </main>
  )
}

const Slide = ({ src, left, progress, direction }) => {
  const dir = direction == "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-250 * dir, 250 * dir])
  return (
    <motion.div style={{ left, x }} className="relative flex whitespace-nowrap">
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  )
}

const Phrase = ({ src }) => {
  return (
    <div className="flex px-5 gap-5 items-center">
      <p className="text-[7.5vw]">Front End Freelance</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: 'cover' }} src={src} alt="imagem" fill />
      </span>
    </div>
  )
}
