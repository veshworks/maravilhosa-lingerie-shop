// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Maravilhosa Lingerie',
  siteUrl: 'https://maravilhosalingerie.netlify.app',
  plugins: [
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/admin'
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss'
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './src',
        path: '_offers/*.json',
        typeName: 'Offer',
      }
    },
  ]
}
