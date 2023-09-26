import Navbar from '@/components/common/Navbar'
import useAuth from '@/hooks/useAuth'
import Hero from './Hero'
import Description from './Description'
import Contents from './Contents'
import Reviews from './Reviews'

export default function InfoRoot({ module }) {
  const { isLoading, user } = useAuth()

  if (isLoading) {
    return null
  }

  return (
    <div>
      <Navbar user={user} />
      <Hero module={module} />
      <Contents module={module} />
      <Reviews module={module} />
    </div>
  )
}