import Navbar from '@/components/home/Navbar'
import Hero from '@/components/home/Hero'
import Modules from '@/components/home/Modules'
import Features from '@/components/home/Features'
import useAuth from '@/hooks/useAuth'

export default function HomeRoot({ modulesInfo }) {
  const { isLoading, user } = useAuth()

  if (isLoading) {
    return null
  }

  return (
    <div>
      <Navbar user={user} />
      <Hero />
      <Features />
      <Modules modulesInfo={modulesInfo} />
    </div>
  )
}