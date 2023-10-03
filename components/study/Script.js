import { v4 as uuid } from 'uuid'
import ScriptNav from '@/components/study/ScriptNav'
import Chapter from '@/components/units/Chapter'
import Section from '@/components/units/Section'
import Text from '@/components/units/Text'
import Notion from '@/components/units/Notion'
import Definition from '@/components/units/Definition'
import Axiom from '@/components/units/Axiom'
import Theorem from '@/components/units/Theorem'
import Rule from '@/components/units/Rule'
import Example from '@/components/units/Example'
import Exercise from '@/components/units/Exercise'
import css from '@/scss/study/Script.module.scss'

export default function Script({ localContent, setIsLoading, user, fetchUser }) {
  return (
    <div className={css.container}>
      {localContent.section.nr === 1 &&
        <Chapter chapter={localContent.chapter} />
      }
      <Section section={localContent.section} />
      {localContent.units.map(unit => (
        <div key={uuid()}>
          {unit.type === 'text' && <Text unit={unit} />}
          {unit.type === 'notion' && <Notion unit={unit} />}
          {unit.type === 'definition' && <Definition unit={unit} />}
          {unit.type === 'axiom' && <Axiom unit={unit} />}
          {unit.type === 'theorem' && <Theorem unit={unit} />}
          {unit.type === 'rule' && <Rule unit={unit} />}
          {unit.type === 'example' && <Example unit={unit} />}
          {unit.type === 'exercise' && <Exercise unit={unit} />}
        </div>
      ))}
      <ScriptNav
        localContent={localContent}
        setIsLoading={setIsLoading}
        user={user}
        fetchUser={fetchUser}
      />
    </div>
  )
}