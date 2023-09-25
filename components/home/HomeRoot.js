import Image from 'next/image'
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
      <section className={css.heroSection}>
        <div className={css.heroImage}>
          <Image
            src='/hero.jpg'
            alt='styud-image'
            fill
            objectFit='cover'
            priority
          />
        </div>
        <div className={css.heroCard}>
          <h1>Welcome to Square One</h1>
          <h3>We study math, science, and technology the right way - from the ground up.</h3>
        </div>
      </section>
    </div>
  )
}