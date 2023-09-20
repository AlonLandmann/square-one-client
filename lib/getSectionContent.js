export default function getSectionContent(module, chapterNr, sectionNr) {
  let sectionContent = {
    module: { nr: module.id, name: module.displayName },
    chapter: { nr: chapterNr, name: '' },
    section: { nr: sectionNr, name: '' },
    units: []
  }

  let ch = 0
  let se = 0

  for (let i = 0; i < module.script.length; i++) {
    if (module.script[i].type === 'heading') {
      ch++
      se = 0

      if (chapterNr === ch) {
        sectionContent.chapter.name = module.script[i].content
      }
    } else if (module.script[i].type === 'subheading') {
      se++

      if (chapterNr === ch && sectionNr === se) {
        sectionContent.section.name = module.script[i].content
      }
    } else if (chapterNr === ch && sectionNr === se) {
      sectionContent.units.push(module.script[i])
    }
  }

  return sectionContent
}