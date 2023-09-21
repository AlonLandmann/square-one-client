import css from '@/scss/study/Script.module.scss'
import { v4 as uuid } from 'uuid'
import Chapter from '../units/Chapter'
import Section from '../units/Section'
import Text from '../units/Text'
import Notion from '../units/Notion'
import Definition from '../units/Definition'
import Theorem from '../units/Theorem'
import Example from '../units/Example'
import Exercise from '../units/Exercise'
import Rule from '../units/Rule'
import { useRouter } from 'next/router'

export default function Script({ sectionContent }) {
  const router = useRouter()

  function navToPrevious() {
    if (sectionContent.previous) {
      router.push(sectionContent.previous)
    }
  }

  function navToNext() {
    if (sectionContent.next) {
      router.push(sectionContent.next)
    }
  }

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
          {unit.type === 'definition' && <Definition unit={unit} />}
          {unit.type === 'theorem' && <Theorem unit={unit} />}
          {unit.type === 'rule' && <Rule unit={unit} />}
          {unit.type === 'example' && <Example unit={unit} />}
          {unit.type === 'exercise' && <Exercise unit={unit} />}
        </div>
      ))}
      <div className={css.navs}>
        <div className={css.chevron} onClick={navToPrevious}>
          {sectionContent.previous &&
            <i className='bi bi-chevron-left'></i>
          }
        </div>
        <div className={css.check}><i className='bi bi-check2-all'></i></div>
        <div className={css.chevron} onClick={navToNext}>
          {sectionContent.next &&
            <i className='bi bi-chevron-right'></i>
          }
        </div>
      </div>
    </div>
  )
}