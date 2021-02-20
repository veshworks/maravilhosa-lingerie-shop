// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const transformRelativePaths = (source, keylist) => Object.fromEntries(
  Object.entries(source)
    .map(([key, value]) => keylist.includes(key)
      ? [key, require.resolve(`./${value}`)]
      : [key, value])
)

module.exports = function (api) {
  api.onCreateNode(node => {
    if (node.internal.typeName !== 'Offer') { return options }

    return {
      ...node,
      imageList: node.imageList.map((image) => transformRelativePaths(image, ['src'])),
    }
  })

  api.loadSource(({ addCollection, getCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
