import Navbar from '@/components/common/Navbar'
import useAuth from '@/hooks/useAuth'
import TeXForUser from '@/components/parser/TeXForUser'
import css from '@/scss/notes-tutorial/NotesTutorialRoot.module.scss'
import { useState } from 'react'

export default function NotesTutorialRoot() {
  const { isLoading, user } = useAuth()
  const [notes, setNotes] = useState(`Hi there!\n%\nWelcome to this tutorial on how to use the Square-One note-taking editor. Glad to have you! The editor is qutie straight forward to use, but there are a few things to know before getting started.\n%\nFirst up, this is a live editor as well, feel free to change the input on the left-hand side.\n%\nThe most important aspect of this editor is that it allows you to type in TeX format, which is the scientific standard for mathematical notation. You can do so by using square brackets, [f(x)=x^2-4]. Anything that is within the two brackets will be converted to a mathematical format according to TeX rules.\n%\nIf you are not familiar with this format you may find a comprehensive guide at https://tug.ctan.org/info/symbols/comprehensive/symbols-a4.pdf, but there are also plenty of other materials on the web to learn TeX notation. The great thing about it is that you can learn it as you use it.\n%\nBesides using TeX, the Square One Editor has a designated special functionality to a few other symbols. The first is the percentage symbol, which is used to insert vertical spacing, as you might have noticed already.\n%\nNext, we can use dollar signs to open and close highlighted sections. You can use three vertical lines ||| to separate columns and four |||| to separate rows.\n$\n[Ax=b]|||[Bx=c]||||[Cx=d]|||[Dx=e]\n$\nFinally, there is a neat way to create tables in the editor as well. We start a and finish a table using the routing or 'hash-tag' symbol. Single vertical | and horizontal lines _ separate columns and rows respectively. If we use double lines || and __, then a border is created as well.\n$\n#\nSymbol||Set description|Examples__\n[\\mathbb{N}]||Natural numbers|[0,1,2]_\n[\\mathbb{Z}]||Integers|[-6,0,17]_\n[\\mathbb{Q}]||Rational numbers|[-10/7,3/4]_\n[\\mathbb{R}]||Real numbers|[-\\pi,1,\\sqrt 2,e]_\n[\\mathbb{C}]||Complex numbers|[-i, 3+2i]\n#\n$\nThis concludes all the features that are currently avaialbe for the note editor. Happy studying, and stay tuned for updates!'`)
  
  function handleChange(event) {
    setNotes(event.target.value)
  }

  if (isLoading) return null

  return (
    <div>
      <Navbar user={user} />
      <div className={css.main}>
        <textarea
          className={css.raw}
          spellCheck={false}
          autoFocus
          value={notes}
          onChange={handleChange}
        >

        </textarea>
        <div className={css.tex}>
          <TeXForUser tex={notes} />
        </div>
      </div>
    </div>
  )
}