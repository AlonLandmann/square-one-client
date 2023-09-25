import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import css from '@/scss/auth/SignupRoot.module.scss'

export default function SignupRoot() {
  const router = useRouter()
  const [formData, setFormData] = useState(
    {
      username: '',
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

    const userRes = await fetch(`/api/users/${formData.email}`)
    const userJson = await userRes.json()

    if (userJson.success) {
      toast.error('An account with this email already exists. Try logging in instead.')

      return
    }

    const signupRes = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    const signupJson = await signupRes.json()

    if (signupJson.success) {
      router.push('/')
    } else {
      toast.error('an unexpected error occurred')
    }
  }

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.logo}><i className='bi bi-1-square'></i></div>
        <div className={css.heading}>Hello</div>
        <div className={css.instructions}>Complete the form to sign up.</div>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          name='username'
          type='text'
          value={formData.username}
          onChange={handleChange}
        />
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
        <div className={css.button} onClick={handleSubmit}>sign up</div>
        <div className={css.redirect}>
          Already have an account? <Link className={css.link} href='/login'>Log in</Link> instead.
        </div>
      </form>
    </div>
  )
}