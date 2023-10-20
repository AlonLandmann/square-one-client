import { v4 as uuid } from 'uuid'
import { InlineMath } from 'react-katex'
import Highlight from '@/components/parser/Highlight'
import Table from '@/components/parser/Table'
import 'katex/dist/katex.min.css'

export default function TeXForUser({ tex }) {
  let parsed = []
  let mode = 'text'
  let main = ''

  const mathSplits = /^(=|<|>|\\neq|\\geq|\\leq)/

  for (let i = 0; i <= tex.length; i += 1) {
    if (mode === 'text') {

      if (i === tex.length) { pushText() }
      else if (tex[i] === '[') { pushText(); mode = 'math' }
      else if (tex[i] === '#') { pushText(); mode = 'table' }
      else if (tex[i] === '$') { pushText(); mode = 'highlight' }
      else if (tex[i] === '%') { pushText(); pushNewLine() }
      else { main = main.concat(tex[i]) }

    } else if (mode === 'math') {

      if (tex[i] === ']') { pushMath(); mode = 'text' }
      else if (mathSplits.test(tex.slice(i))) { pushMath(); pushSpacer(); main = tex[i] }
      else { main = main.concat(tex[i]) }

    } else if (mode === 'table') {

      if (tex[i] === '#') { pushTable(); mode = 'text' }
      else { main = main.concat(tex[i]) }

    } else if (mode === 'highlight') {

      if (tex[i] === '$') { pushHighlight(); mode = 'text' }
      else { main = main.concat(tex[i]) }

    }
  }

  function pushText() {
    parsed.push(
      <span key={uuid()}>{main}</span>
    )

    main = ''
  }

  function pushNewLine() {
    parsed.push(
      <div key={uuid()} style={{ 'height': '25px' }}></div>
    )
  }

  function pushMath() {
    parsed.push(
      <InlineMath key={uuid()}>{main}</InlineMath>
    )

    main = ''
  }

  function pushSpacer() {
    parsed.push(
      <span key={uuid()} style={{ 'marginRight': '0.2778em' }}></span>
    )
  }

  function pushTable() {
    parsed.push(
      <Table key={uuid()} tex={main} />
    )

    main = ''
  }
  
  function pushHighlight() {
    parsed.push(
      <Highlight key={uuid()} tex={main} />
    )

    main = ''
  }

  return <div>{parsed}</div>
}