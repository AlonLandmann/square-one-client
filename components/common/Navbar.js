import { toast } from 'react-hot-toast'
import css from '@/scss/common/Navbar.module.scss'

export default function Navbar({ user }) {
  const handleNavHome = () => {
    location.replace('/')
  }

  const handleLogin = () => {
    location.replace('/login')
  }

  const handleLogout = async () => {
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
      <div className={css.logo} onClick={handleNavHome}>
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