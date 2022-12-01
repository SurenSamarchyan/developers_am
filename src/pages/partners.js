import React from 'react'
import {graphql} from "gatsby";
import AllEntriesContainer from "../components/AllEntiesContainer";


const PartnersPage = ({
                      data: {
                          datoCmsPartnersPage: {
                              seoSettings,
                              cover,
                              title,
                          },
                          allDatoCmsPartner
                      }
                  }) => {

    return (
        <AllEntriesContainer
            seoSettings={seoSettings}
            title={title}
            cover={cover}
            allEntries={allDatoCmsPartner.nodes}
            entryType={'partner'}
        />
    )
}

export const query = graphql`
    query {
        allDatoCmsPartner(sort: {order: ASC, fields: position}) {
            nodes {
                title
                id
                slug
                coverImage {
                    gatsbyImageData(aspectRatio: 1.8, layout: FULL_WIDTH)
                    title
                }
            }
        }

        datoCmsPartnersPage {
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

export default PartnersPage

