import React from 'react'
import {graphql} from "gatsby";
import AllEntriesContainer from "../components/AllEntiesContainer";


const NewsPage = ({
                      data: {
                          datoCmsNewsPage: {
                              seoSettings,
                              cover,
                              title,
                          },
                          allDatoCmsArticle
                      }
                  }) => {

    return (
        <AllEntriesContainer
            seoSettings={seoSettings}
            title={title}
            cover={cover}
            allEntries={allDatoCmsArticle.nodes}
        />
    )
}

export const query = graphql`
    query {
        allDatoCmsArticle(sort: {order: DESC, fields: meta___createdAt}) {
            nodes {
                title
                slug
                id
                description
                coverImage {
                    gatsbyImageData(aspectRatio: 1.8, layout: FULL_WIDTH)
                    title
                }
            }
        }

        datoCmsNewsPage {
            seoSettings {
                title
                description
                image {
                    fixed(width: 600) {
                        src
                    }
                }
            }
            cover {
                url
            }
            title
        }
    }
`

export default NewsPage

