import Navbar from '@/components/home/Navbar'
import Hero from '@/components/home/Hero'
import Modules from '@/components/home/Modules'
import useAuth from '@/hooks/useAuth'
import css from '@/scss/home/HomeRoot.module.scss'

export default function HomeRoot({ modulesInfo }) {
  const { isLoading, user } = useAuth()

  if (isLoading) {
    return null
  }

  return (
    <div>
      <Navbar user={user} />
      <Hero />
      <Modules modulesInfo={modulesInfo} />
    </div>
  )
}