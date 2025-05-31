import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '../stores/active-section'

export function useSectionInView(sectionName, threshold = 0.5) {
  const { ref, inView } = useInView({
    threshold,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return {
    ref,
    inView,
  }
}

export const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted
}
