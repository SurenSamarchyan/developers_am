import React from 'react'
import {graphql} from "gatsby";
import styled from "styled-components";
import BannerBlock from "../components/Banner/Banner";
import TitledSection from "../components/Common/TitledSection/TitledSection";
import TopArticles from "../components/TopArticles/TopArticles";
import TopPartners from "../components/TopPartners/TopPartners";
import Text from "../components/Common/Text";
import {useWindowSize} from "../hooks/useWindowSize";
import ContactUs from "../components/ContactUs/ContactUs";
import Seo from "../components/Seo";
import QuotesSection from "../components/Quotes Block/QuotesSection";

const TopPartnersSection = styled(TitledSection)`
  background-color: red;
  font-size: 500px;
`

const IndexPage = ({
                       data: {
                           datoCmsHomePage: {
                               seoSettings,
                               bannerBackgroundImage,
                               bannerTitle,
                               bannerSubtitle,
                               bannerBtnText,
                               bannerBtnLink,
                               aboutUsTitle,
                               aboutUsText,
                               topPartnersTitle,
                               topPartners,
                               topArticlesTitle,
                               topArticles,
                               quoteText,
                               quoteAuthor,
                               galleryImages,
                               contactUsTitle,
                               contactUsBackgroundImage,
                           }
                       }
                   }) => {
    const {width} = useWindowSize()

    return (
        <>
            <Seo {...seoSettings}/>

            <BannerBlock
                bgImage={bannerBackgroundImage}
                title={bannerTitle}
                subtitle={bannerSubtitle}
                bannerBtnText={bannerBtnText}
                bannerBtnLink={bannerBtnLink}
                isFullHeight={true}
            />

            <TitledSection title={aboutUsTitle} id={'aboutUs'}>
                <Text text={aboutUsText}
                      as={'div'}
                      color={'#444444'}
                      fontSize={width > 991 ? '22px' : '18px'}
                      lineHeight={'1.5'}
                      textType={'html'}
                      margin={'15px 0'}/>
            </TitledSection>

            <div className={`shadow-section`}>
                <TopPartnersSection title={topPartnersTitle} id={'partners'} seeMoreLink={'/partners'}>
                    <TopPartners topPartners={topPartners}/>
                </TopPartnersSection>
            </div>

            <QuotesSection author={quoteAuthor}
                           text={quoteText}
                          galleryImages={galleryImages}
            />

            <TitledSection title={topArticlesTitle} id={'news'} seeMoreLink={'/news'}>
                <TopArticles topArticles={topArticles} />
            </TitledSection>

            <ContactUs title={contactUsTitle}
                       bgImage={contactUsBackgroundImage}
            />
        </>

    )
}

export const query = graphql`
    query {
        datoCmsHomePage {
            seoSettings {
                title
                description
                image {
                    fixed(width: 600) {
                        src
                    }
                }
            }
            bannerSubtitle
            bannerTitle
            bannerBackgroundImage {
                url
            }
            bannerBtnText
            bannerBtnLink
            aboutUsTitle
            aboutUsText
            topPartnersTitle
            topPartners {
                id
                title
                slug
                coverImage {
                    alt
                    gatsbyImageData(aspectRatio: 1)
                }
            }
            topArticlesTitle
            topArticles {
                id
                title
                slug
                description
                coverImage {
                    gatsbyImageData(aspectRatio: 1.7)
                    alt
                }
            }
            quoteAuthor
            quoteText
            galleryImages {
                alt
                filename
                title
                gatsbyImageData(aspectRatio: 1.1, imgixParams: {fit: "crop"})
                url
            }
            contactUsTitle
            contactUsBackgroundImage {
                url
            }
        }
    }`

export default IndexPage

