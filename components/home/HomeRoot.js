import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Navbar from '@/components/common/Navbar'
import Hero from '@/components/home/Hero'
import Modules from '@/components/home/Modules'
import Features from '@/components/home/Features'
import useAuth from '@/hooks/useAuth'

export default function HomeRoot({ moduleCatalogue }) {
  const { isLoading, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (router.asPath.includes('#courses')) {
      const coursesElement = document.getElementById('courses')

      if (coursesElement) {
        coursesElement.scrollIntoView();
      }
    }
  }, [isLoading])

  if (isLoading) return null

  return (
    <div>
      <Navbar user={user} />
      <Hero />
      <Features />
      <div id='courses'><Modules moduleCatalogue={moduleCatalogue} /></div>
    </div>
  )
}