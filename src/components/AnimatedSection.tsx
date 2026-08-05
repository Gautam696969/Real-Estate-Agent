import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface Props {
  children: ReactNode
  className?: string
  direction?: Direction
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
  style?: React.CSSProperties
  as?: 'section' | 'div' | 'footer' | 'header'
}

const directionVariants = {
  up: { y: 60 },
  down: { y: -60 },
  left: { x: 60 },
  right: { x: -60 },
  none: {},
}

export default function AnimatedSection({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  once = true,
  style,
  as = 'section',
}: Props) {
  const MotionTag = motion[as as keyof typeof motion] as React.ComponentType<{
    children: ReactNode
    className?: string
    style?: React.CSSProperties
    initial: object
    whileInView: object
    viewport: object
    transition: object
  }>

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{
        opacity: 0,
        ...directionVariants[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </MotionTag>
  )
}
