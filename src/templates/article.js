import React from 'react'
import {GatsbyImage} from "gatsby-plugin-image";
import {graphql} from 'gatsby'
import Seo from "../components/Seo";
import ArticleContent from "../components/Article/ArticleContent";
import {ContainerBox} from "../components/Common/ContainerBox/ContainerBox";
import styled from "styled-components";
import {theme} from "../styles/theme";

const Article = ({
                     data: {
                         article: {
                             seoSettings,
                             title,
                             coverImage,
                             content
                         }
                     }
                 }) => {
    return (
        <ArticleContaner>
            <Seo {...seoSettings}/>
            { coverImage && <CoverImage image={coverImage?.gatsbyImageData} alt={coverImage?.alt || ''}/>}
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleContent contentData={content}/>
        </ArticleContaner>
    )
}

export const query = graphql`
    query Article($slug: String!) {
        article: datoCmsArticle(slug: { eq: $slug }) {
            seoSettings {
                title
                description
                image {
                    fixed(width: 600) {
                        src
                    }
                }
            }
            title
            coverImage {
                gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.7)
                alt
            }
            content {
                ...RichText
                ...ImageBlock
                ...ImageGallery
                ...VideoUpload
                ...VideoExternal
                ...FileList
            }
        }
    }
`

const ArticleContaner = styled(ContainerBox)`
  padding-top: ${theme.space.xs}px;
`

const CoverImage = styled(GatsbyImage)`
  max-height: calc(100vh - 90px);
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background-color: #70707073;
    mix-blend-mode: hue;
  }
`

const ArticleTitle = styled.h1`
  margin: ${theme.space.s}px 0;
  color: ${theme.colors.red};
  ${theme.media.md} {
    margin: ${theme.space.m}px 0;
  }
  ${theme.media.lg} {
    margin: ${theme.space.l}px 0;
  }
`

export default Article