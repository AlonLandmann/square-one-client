import Link from 'next/link'
import css from '@/scss/HomeRoot.module.scss'

export default function HomeRoot() {
  return (
    <div>
      <Link href='/study/logical-foundations'>Logical Foundations</Link>
    </div>
  )
}