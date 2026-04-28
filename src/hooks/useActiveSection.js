import { useEffect, useState } from 'react'
import { navItems } from '../data/siteData'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState(navItems[0].id)

  useEffect(() => {
    const getCurrentSection = () => {
      const offset = 160
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean)

      const sectionInView = sections.find((section) => {
        const top = section.offsetTop - offset
        const bottom = top + section.offsetHeight

        return window.scrollY >= top && window.scrollY < bottom
      })

      if (sectionInView) {
        return sectionInView.id
      }

      const closestSection = sections.reduce(
        (closest, section) => {
          const distance = Math.abs(section.getBoundingClientRect().top - offset)

          if (distance < closest.distance) {
            return { id: section.id, distance }
          }

          return closest
        },
        { id: navItems[0].id, distance: Number.POSITIVE_INFINITY },
      )

      return closestSection.id
    }

    const updateActiveSection = () => {
      setActiveSection(getCurrentSection())
    }

    updateActiveSection()

    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return {
    activeSection,
    setActiveSection,
  }
}
