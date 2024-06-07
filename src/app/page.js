'use client'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from '../components/Preloader'
import Landing from '../components/Landing'
import Projects from '../components/Projects'
import { ButtonWave } from '@/common/ButtonWave'
import Description from '@/components/Description'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false)
        document.body.style.cursor = 'default'
        window.scrollTo(0, 0)
      }, 2000)
    })()
  }, [])

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
    </main>
  )
}
