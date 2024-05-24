'use client'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from '../components/Preloader'
import Projects from '../components/Projects'

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
      <Projects />
    </main>
  )
}
