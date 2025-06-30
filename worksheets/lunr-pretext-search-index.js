var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Article",
  "number": "",
  "title": "In-Class Activities",
  "body": " In-Class Activities    Emily Lyons Applied Algebra Notes University of Central Oklahoma  Last Updated:         These activities are a way to sample guided notes for class.       PreTeXt   "
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
