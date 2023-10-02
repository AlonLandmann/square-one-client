import { cloneDeep } from 'lodash'

function startingSectionProgress(module) {
  const sections = []

  let chapterNr = 0
  let sectionNr = 0

  module.script.forEach(unit => {
    if (unit.type === 'heading') {
      chapterNr += 1
      sectionNr = 0
    } else if (unit.type === 'subheading') {
      sectionNr += 1

      sections.push(
        {
          status: 'unread',
          notes: 'LaTeX Notes',
          chapterNr: chapterNr,
          sectionNr: sectionNr
        }
      )
    }
  })

  return sections
}

export function addModule(user, module) {
  const newUser = cloneDeep(user)

  newUser.modules.push(
    {
      id: module.id,
      sections: startingSectionProgress(module)
    }
  )

  return newUser
}

export function getSections(user, module) {
  return user.modules.filter(m => m.id === module.id)[0].sections
}
