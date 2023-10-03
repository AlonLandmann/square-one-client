import Tooltip from '@mui/material/Tooltip'
import { cloneDeep } from 'lodash'
import { useStack } from '@/hooks/StackProvider'
import { useModule } from '@/hooks/ModuleProvider'
import pinToTop from '@/lib/pinToTop'
import css from '@/scss/parser/Reference.module.scss'

export default function Reference({ children, refNum, subNum }) {
  const module = useModule()
  const [_, setStack] = useStack()

  let unit = cloneDeep(module.script.filter(u => u.number === refNum)[0])

  if (unit) {
    if (subNum) {
      unit.selectedSub = subNum - 1
    } else {
      delete unit.selectedSub
    }
  }

  function handleClick() {
    setStack(prev => pinToTop(unit, prev))
  }

  return (
    <>
      {unit &&
        <Tooltip
          title={unit.name}
          placement='top'
          disableInteractive
          disableHoverListener={!Boolean(unit.name)}
          disableFocusListener={!Boolean(unit.name)}
          disableTouchListener={!Boolean(unit.name)}
        >
          <span className={css.container} onClick={handleClick}>
            {children}
          </span>
        </Tooltip>
      }
    </>
  )
}