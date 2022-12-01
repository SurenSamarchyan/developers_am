/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const urls = require('./src/urls')

exports.createPages = async ({actions, graphql}) => {
    const {data: {articles, partners}} = await graphql(`
    {
      articles: allDatoCmsArticle {
        nodes {
          slug
        }
      }
      partners: allDatoCmsPartner {
        nodes {
          slug
        }
      }
    }
  `)

    // Article pages
    articles.nodes.forEach((article) =>
        actions.createPage({
            path: urls.articleUrl(article.slug),
            component: path.resolve(`./src/templates/article.js`),
            context: {
                slug: article.slug
            },
        })
    )
    // Partner pages
    partners.nodes.forEach((partner) =>
        actions.createPage({
            path: urls.partnerUrl(partner.slug),
            component: path.resolve(`./src/templates/partner.js`),
            context: {
                slug: partner.slug
            },
        })
    )
}

exports.onCreateWebpackConfig = ({stage, actions}) => {
    if (stage.startsWith('develop')) {
        actions.setWebpackConfig({
            resolve: {
                alias: {
                    'react-dom': '@hot-loader/react-dom',
                },
            },
        })
    }
}
