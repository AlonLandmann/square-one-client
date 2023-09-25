import Navbar from '@/components/home/Navbar'
import useAuth from '@/hooks/useAuth'
import css from '@/scss/home/HomeRoot.module.scss'

export default function HomeRoot() {
  const { isLoading, user } = useAuth()

  if (isLoading) {
    return null
  }

  return (
    <div>
      <Navbar user={user} />
    </div>
  )
}