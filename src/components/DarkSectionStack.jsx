import { useEffect, useRef, useState } from 'react'

function DarkSectionStack({ previous, children, disableParallax = false }) {
  const baseRef = useRef(null)
  const [autoDisableParallax, setAutoDisableParallax] = useState(false)

  useEffect(() => {
    if (disableParallax) {
      return undefined
    }

    if (typeof window === 'undefined') {
      return undefined
    }

    const baseNode = baseRef.current
    if (!baseNode) {
      return undefined
    }

    let frameId = 0
    let observer

    const getMeasuredNode = () => baseNode.querySelector('section') ?? baseNode

    const checkIfParallaxShouldBeDisabled = () => {
      const measuredNode = getMeasuredNode()
      const viewportHeight = window.innerHeight
      const contentHeight = measuredNode.scrollHeight
      setAutoDisableParallax(contentHeight > viewportHeight)
    }

    const scheduleCheck = () => {
      cancelAnimationFrame(frameId)
      frameId = window.requestAnimationFrame(checkIfParallaxShouldBeDisabled)
    }

    scheduleCheck()
    window.addEventListener('resize', scheduleCheck)

    if ('ResizeObserver' in window) {
      observer = new ResizeObserver(scheduleCheck)
      observer.observe(baseNode)
      const measuredNode = getMeasuredNode()
      if (measuredNode !== baseNode) {
        observer.observe(measuredNode)
      }
    }

    return () => {
      window.removeEventListener('resize', scheduleCheck)
      cancelAnimationFrame(frameId)
      if (observer) {
        observer.disconnect()
      }
    }
  }, [disableParallax])

  const shouldDisableParallax = disableParallax || autoDisableParallax

  return (
    <div
      className={`dark-section-stack${shouldDisableParallax ? ' dark-section-stack--no-parallax' : ''}`}
    >
      <div ref={baseRef} className="dark-section-stack__base">{previous}</div>
      <div className="dark-section-stack__overlay">{children}</div>
    </div>
  )
}

export default DarkSectionStack
