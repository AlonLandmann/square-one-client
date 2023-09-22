import { cloneDeep } from 'lodash'

export default function hydrate(raw) {
  let module = cloneDeep(raw)
  let number = 1
  let chapter = 0
  let section = 0

  module.script.forEach((unit, i) => {
    unit.index = i

    if (unit.type !== 'heading' && unit.type !== 'subheading' && unit.type !== 'text') {
      unit.number = number
      number += 1
    }

    if (unit.parts) {
      unit.parts.forEach((part, j) => {
        part.index = j
      })
    }

    if (unit.type === 'heading') {
      chapter += 1
      section = 0
    } else if (unit.type === 'subheading') {
      section += 1
    }

    unit.chapter = chapter
    unit.section = section
  })

  return module
}