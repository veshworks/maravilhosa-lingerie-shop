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
  api.loadSource(({ addCollection, getCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    const offers = getCollection('Offers')
    offers.data().forEach(({ internal, ...node }) => {
      offers.updateNode({
        ...node,
        imageList: node.imageList.map((image) => transformRelativePaths(image, ['image'])),
      })
    })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
