import { motion, useScroll, useSpring } from 'motion/react'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: .25 })
  return <motion.div className="fixed inset-x-0 top-0 z-[90] h-[2px] origin-left bg-ember" style={{ scaleX }} aria-hidden="true" />
}
