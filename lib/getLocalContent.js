export default function getLocalContent(module, chapterNr, sectionNr) {
  let local = {
    module: { nr: module.id, name: module.displayName },
    chapter: { nr: chapterNr, name: '' },
    section: { nr: sectionNr, name: '', ch: chapterNr },
    units: [],
    previous: null,
    next: null,
  }

  let ch = 0
  let se = 0

  const sections = []

  for (let i = 0; i < module.script.length; i++) {
    if (module.script[i].type === 'heading') {
      ch += 1
      se = 0
      
      // add current chapter info
      if (chapterNr === ch) {
        local.chapter.name = module.script[i].content
      }
    } else if (module.script[i].type === 'subheading') {
      se += 1
      sections.push([ch, se])
      
      // add current section info
      if (chapterNr === ch && sectionNr === se) {
        local.section.name = module.script[i].content
      }
    } else if (chapterNr === ch && sectionNr === se) {
      // add local units
      local.units.push(module.script[i])
    }
  }

  // add navigation routes to previous and next sections
  const index = sections.findIndex(section => {
    return section[0] === chapterNr && section[1] === sectionNr
  })

  if (index === 0) {
    local.next = `/${module.pathName}/${sections[1][0]}/${sections[1][1]}`
  } else if (index === sections.length - 1 && sections.length >= 2) {
    local.previous = `/${module.pathName}/${sections[sections.length - 2][0]}/${sections[sections.length - 2][1]}`
  } else {
    local.previous = `/${module.pathName}/${sections[index - 1][0]}/${sections[index - 1][1]}`
    local.next = `/${module.pathName}/${sections[index + 1][0]}/${sections[index + 1][1]}`
  }

  return local
}