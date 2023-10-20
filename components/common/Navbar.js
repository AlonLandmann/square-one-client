import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import css from '@/scss/common/Navbar.module.scss'

export default function Navbar({ user }) {
  const router = useRouter()

  const handleNavHome = () => {
    location.replace('/')
  }
  const handleNavToCourses = () => {
    console.log(router)
    if (router.asPath === '/' || router.asPath === '/#courses') {
      const coursesElement = document.getElementById('courses')

      if (coursesElement) {
        coursesElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      location.replace('/#courses')
    }
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
      <div className={css.nav} onClick={handleNavToCourses}>
        courses
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