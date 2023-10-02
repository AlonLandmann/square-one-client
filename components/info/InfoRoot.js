import Navbar from '@/components/common/Navbar'
import useAuth from '@/hooks/useAuth'
import Hero from '@/components/info/Hero'
import Objectives from '@/components/info/Objectives'
import Contents from '@/components/info/Contents'
import Reviews from '@/components/info/Reviews'

export default function InfoRoot({ module }) {
  const { isLoading, user } = useAuth()

  if (isLoading) return null

  return (
    <div>
      <Navbar user={user} />
      <Hero user={user} module={module} />
      <Objectives module={module} />
      <Contents module={module} />
      <Reviews module={module} />
    </div>
  )
}