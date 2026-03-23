import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  // Spring-smoothed cursor position for trailing effect
  const cursorX = useSpring(0, { stiffness: 300, damping: 28, mass: 0.5 })
  const cursorY = useSpring(0, { stiffness: 300, damping: 28, mass: 0.5 })

  // Outer ring trails more slowly
  const ringX = useSpring(0, { stiffness: 150, damping: 25, mass: 0.8 })
  const ringY = useSpring(0, { stiffness: 150, damping: 25, mass: 0.8 })

  useEffect(() => {
    // Detect touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouchDevice(isTouch)
    if (isTouch) return

    const handleMouseMove = (e) => {
      setVisible(true)
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      ringX.set(e.clientX)
      ringY.set(e.clientY)
    }

    const handleMouseEnter = () => setVisible(true)
    const handleMouseLeave = () => setVisible(false)

    // Track hover on interactive elements
    const handleElementHover = () => setHovering(true)
    const handleElementLeave = () => setHovering(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Attach hover listeners to all interactive elements
    const attachHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]')
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleElementHover)
        el.addEventListener('mouseleave', handleElementLeave)
      })
      return interactiveElements
    }

    // Initial attach + MutationObserver for dynamically added elements
    let elements = attachHoverListeners()

    const observer = new MutationObserver(() => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleElementHover)
        el.removeEventListener('mouseleave', handleElementLeave)
      })
      elements = attachHoverListeners()
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleElementHover)
        el.removeEventListener('mouseleave', handleElementLeave)
      })
      observer.disconnect()
    }
  }, [cursorX, cursorY, ringX, ringY])

  if (isTouchDevice) return null

  return (
    <>
      {/* Inner dot — precise tracking */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hovering ? 12 : 6,
          height: hovering ? 12 : 6,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </motion.div>

      {/* Outer ring — trailing with spring delay */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          opacity: visible ? (hovering ? 0.6 : 0.3) : 0,
          borderWidth: hovering ? 2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 22 }}
      >
        <div className="w-full h-full rounded-full border border-white" />
      </motion.div>
    </>
  )
}
