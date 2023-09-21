export default function getSectionContent(module, chapterNr, sectionNr) {
  let sectionContent = {
    module: { nr: module.id, name: module.displayName },
    chapter: { nr: chapterNr, name: '' },
    section: { ch: chapterNr, nr: sectionNr, name: '' },
    units: [],
    previous: null,
    next: null,
  }

  let ch = 0
  let se = 0

  const sections = []

  for (let i = 0; i < module.script.length; i++) {
    if (module.script[i].type === 'heading') {
      ch++
      se = 0

      if (chapterNr === ch) {
        sectionContent.chapter.name = module.script[i].content
      }
    } else if (module.script[i].type === 'subheading') {
      se++

      sections.push([ch, se])

      if (chapterNr === ch && sectionNr === se) {
        sectionContent.section.name = module.script[i].content
      }
    } else if (chapterNr === ch && sectionNr === se) {
      sectionContent.units.push(module.script[i])
    }
  }

  const index = sections.findIndex(section => {
    return section[0] === chapterNr && section[1] === sectionNr
  })

  if (index === 0) {
    sectionContent.next = `/${module.pathName}/${sections[1][0]}/${sections[1][1]}`
  } else if (index === sections.length - 1) {
    sectionContent.previous = `/${module.pathName}/${sections[sections.length - 2][0]}/${sections[sections.length - 2][1]}`
  } else {
    sectionContent.previous = `/${module.pathName}/${sections[index - 1][0]}/${sections[index - 1][1]}`
    sectionContent.next = `/${module.pathName}/${sections[index + 1][0]}/${sections[index + 1][1]}`
  }

  return sectionContent
}