import { cloneDeep } from 'lodash'

export default function toggleToStack(unit, prevStack) {
  let stack = cloneDeep(prevStack)

  let wasFound = false

  for (let i = 0; i < stack.length; i++) {
    if (stack[i] && stack[i].index === unit.index) {
      stack.splice(i, 1)

      wasFound = true
    }
  }

  if (!wasFound) {
    stack.unshift(unit)
  }

  return stack
}