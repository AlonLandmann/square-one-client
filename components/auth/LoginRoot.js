import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import css from '@/scss/auth/LoginRoot.module.scss'

export default function LoginRoot() {
  const router = useRouter()
  const [formData, setFormData] = useState(
    {
      email: '',
      password: ''
    }
  )

  function handleChange(event) {
    setFormData(prevFormData => (
      {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    ))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const loginRes = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    const loginJson = await loginRes.json()

    if (loginJson.success) {
      router.push('/')
    } else if (loginJson.reason) {
      toast.error(loginJson.reason)
    } else {
      toast.error('an unexpected error occured')
    }
  }

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.logo}><i className='bi bi-1-square'></i></div>
        <div className={css.heading}>Hi</div>
        <div className={css.instructions}>Enter your credentials to log in.</div>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          type='email'
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          name='password'
          type='password'
          value={formData.password}
          onChange={handleChange}
        />
        <div className={css.button} onClick={handleSubmit}>log in</div>
        <div className={css.redirect}>
          Don't have an account yet? <Link className={css.link} href='/signup'>Sign up</Link> instead.
        </div>
      </form>
    </div>
  )
}