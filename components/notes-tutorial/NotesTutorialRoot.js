import Navbar from '@/components/common/Navbar'
import useAuth from '@/hooks/useAuth'
import css from '@/scss/notes-tutorial/NotesTutorialRoot.module.scss'

export default function NotesTutorialRoot() {
  const { isLoading, user } = useAuth()

  if (isLoading) return null

  return (
    <div>
      <Navbar user={user} />
    </div>
  )
}