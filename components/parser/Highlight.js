import { v4 as uuid } from 'uuid'
import TeX from '@/components/parser/TeX'
import css from '@/scss/parser/Highlight.module.scss'

export default function Highlight({ tex }) {
  return (
    <div className={css.container}>
      {tex.split('||||').map(row => (
        <div key={uuid()} className={css.row}>
          {row.split('|||').map(item => (
            <TeX key={uuid()} tex={item} />
          ))}
        </div>
      ))}
    </div>
  )
}