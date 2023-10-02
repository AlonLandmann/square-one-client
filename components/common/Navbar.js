import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import css from '@/scss/common/Navbar.module.scss'

export default function Navbar({ user }) {
  const router = useRouter()

  function handleLogin() {
    router.push('/login')
  }

  async function handleLogout() {
    const logoutRes = await fetch('/api/auth/logout', {
      method: 'POST',
      headers: { 'Accept': 'application/json' }
    })

    const logoutJson = await logoutRes.json()

    if (logoutJson.success) {
      location.replace('/')
    } else {
      toast.error('an unexpected error occured')
    }
  }

  return (
    <div className={css.container}>
      <div className={css.logo} onClick={() => { router.push('/') }}>
        <i className='bi bi-1-square'></i>
        <div>Square One</div>
      </div>
      {!user &&
        <div className={css.login}>
          <div className={css.buttonLight} onClick={handleLogin}>
            Log in
          </div>
        </div>
      }
      {user &&
        <div className={css.logout}>
          <div className={css.buttonWhite} onClick={handleLogout}>
            Log out
          </div>
        </div>
      }
    </div>
  )
}