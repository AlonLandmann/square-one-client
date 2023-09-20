import css from '@/scss/Script.module.scss'
import { v4 as uuid } from 'uuid'

export default function Script({ module, chapterNr, sectionNr }) {
  const sectionContent = []

  let ch = 0
  let se = 0

  for (let i = 0; i < module.script.length; i++) {
    if (module.script[i].type === 'heading') {
      ch++
      se = 0

      if (chapterNr === ch) {
        sectionContent.push(module.script[i])
      }
    }
    if (module.script[i].type === 'subheading') {
      se++
    }
    if (chapterNr === ch && sectionNr === se) {
      sectionContent.push(module.script[i])
    }
  }

  return (
    <div className={css.container}>
      {sectionContent.map(unit => (
        <div key={uuid()}>{unit.type}</div>
      ))}
    </div>
  )
}