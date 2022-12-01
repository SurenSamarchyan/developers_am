import React, {useState} from "react";
import styled from "styled-components";
import {GatsbyImage} from "gatsby-plugin-image";
import {useWindowSize} from "../../hooks/useWindowSize";
import {theme} from "../../styles/theme";
import {ContainerBox} from "../Common/ContainerBox/ContainerBox";
import QuoteIcon from "../../images/Quotes.svg"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"


const QuotesSection = ({text, author, galleryImages}) => {
    const firstBanner = galleryImages[0]
    const secondBanner = galleryImages[1]
    const {width} = useWindowSize()


    const [isLightBoxOpen, setLightBoxOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    const openLightbox = (index) => {
        setLightBoxOpen(true)
        setPhotoIndex(index)
    }
    return (
        <SectionWrapper>
            <QuoteWrapper>
                {firstBanner?.gatsbyImageData && <GatsbyImage
                    alt={`${firstBanner?.alt} || 'photo'`}
                    image={firstBanner?.gatsbyImageData}
                    onClick={() => openLightbox(0)}
                    className={'hover'}
                />}
                <blockquote>
                    <p>{text}
                        <span>{author}</span>
                    </p>
                </blockquote>
            </QuoteWrapper>
            {width > theme.breakpoints.md && secondBanner?.gatsbyImageData &&
                <GatsbyImage
                    alt={`${secondBanner?.alt || 'photo'}`}
                    image={secondBanner?.gatsbyImageData}
                    onClick={() => openLightbox(1)}
                    className={'hover'}/>}

            {isLightBoxOpen && (
                <Lightbox
                    mainSrc={galleryImages[photoIndex].url}
                    nextSrc={galleryImages[(photoIndex + 1) % galleryImages.length].url}
                    prevSrc={galleryImages[(photoIndex + galleryImages.length - 1) % galleryImages.length].url}
                    onCloseRequest={() => setLightBoxOpen(false)}
                    imageTitle={galleryImages[photoIndex].title}
                    enableZoom={false}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + galleryImages.length - 1) % galleryImages.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % galleryImages.length)}
                />
            )}

        </SectionWrapper>
    )
}


export default QuotesSection


const SectionWrapper = styled(ContainerBox)`
  ${theme.media.md} {
    display: flex;
    gap: 24px;

    & > div:first-of-type {
      width: 60%;
    }

    & > div:last-of-type {
      width: 40%;
    }
  }

`
const QuoteWrapper = styled.div`
  font-size: 24px;

  blockquote {
    position: relative;
    margin-top: 24px;

    &::before {
      content: url(${QuoteIcon});
      position: absolute;
      left: -65px;
      top: -12px;
    }
  }

  span {
    color: ${theme.colors.red};
    font-size: 22px;
    font-weight: ${theme.fontWeights.semibold};
    padding-left: 16px;
  }
`




