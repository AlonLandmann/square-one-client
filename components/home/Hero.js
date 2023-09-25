import Image from 'next/image'
import css from '@/scss/home/Hero.module.scss'

export default function Hero() {
  return (
    <div className={css.container}>
      <div className={css.image}>
        <Image
          src='/hero.jpg'
          alt='styud-image'
          fill
          objectFit='cover'
          priority
        />
      </div>
      <div className={css.content}>
        <h1>Welcome to Square One</h1>
        <h3>Study math, science, engineering, and technology from the ground up.</h3>
      </div>
    </div>
  )
}