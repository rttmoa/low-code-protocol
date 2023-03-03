const visit = require('unist-util-visit')





// 树结构
module.exports.withLinkRoles = () => {
  return (tree) => {
    // console.log(tree)
    visit(tree, 'element', (element) => {
      if (['ol', 'ul'].includes(element.tagName)) {
        element.properties.role = 'list'
      }
    })
  }
}
