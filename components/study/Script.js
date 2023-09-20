import css from '@/scss/study/Script.module.scss'
import { v4 as uuid } from 'uuid'
import Chapter from '../units/Chapter'
import Section from '../units/Section'
import Text from '../units/Text'
import Notion from '../units/Notion'

export default function Script({ sectionContent }) {
  return (
    <div className={css.container}>
      {sectionContent.section.nr === 1 &&
        <Chapter chapter={sectionContent.chapter} />
      }
      <Section section={sectionContent.section} />
      {sectionContent.units.map(unit => (
        <div key={uuid()}>
          {unit.type === 'text' && <Text unit={unit} />}
          {unit.type === 'notion' && <Notion unit={unit} />}
        </div>
      ))}
    </div>
  )
}