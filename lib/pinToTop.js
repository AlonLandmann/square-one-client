import { cloneDeep } from 'lodash'

export default function pinToTop(unit, prevStack) {
  let stack = cloneDeep(prevStack)

  for (let i = 0; i < stack.length; i++) {
    if (stack[i] && stack[i].index === unit.index) {
      stack.splice(i, 1)
    }
  }

  stack.unshift(unit)

  return stack
}