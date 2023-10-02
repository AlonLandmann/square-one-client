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
  const moduleProgress = user.modules.filter(m => m.id === module.id)[0]

  return moduleProgress ? moduleProgress.sections : null
}

export function getModuleProgress(user, module) {
  const sections = getSections(user, module)

  if (sections) {
    const completed = sections.filter(s => s.status === 'complete')

    return completed.length / sections.length
  }

  return 0
}

export function getChapterProgress(user, module, unit) {
  const sectionsOfChapter = getSections(user, module).filter(s => s.chapterNr === unit.chapter)
  const completed = sectionsOfChapter.filter(s => s.status === 'complete')

  return completed.length / sectionsOfChapter.length
}

export function getSectionProgress(user, module, unit) {
  const section = getSections(user, module).filter(s => {
    return s.chapterNr === unit.chapter && s.sectionNr === unit.section
  })[0]

  return section.status === 'complete' ? 1 : 0
}