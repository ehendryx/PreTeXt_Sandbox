var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Emily Lyons Applied Algebra Notes University of Central Oklahoma  Last Updated:       "
},
{
  "id": "Section_1-1",
  "level": "1",
  "url": "Section_1-1.html",
  "type": "Worksheet",
  "number": "",
  "title": "Applied Algebra Notes: Section 1.1",
  "body": " Applied Algebra Notes: Section 1.1   These are notes for the first day of class.     Where have you seen math applied in other courses or even daily life?      Using mathematical theory, notation, methods, and tools to answer practical questions is a form of .    "
},
{
  "id": "Section_1-1-3",
  "level": "2",
  "url": "Section_1-1.html#Section_1-1-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Where have you seen math applied in other courses or even daily life?   "
},
{
  "id": "Section_1-1-4",
  "level": "2",
  "url": "Section_1-1.html#Section_1-1-4",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Using mathematical theory, notation, methods, and tools to answer practical questions is a form of .   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
