import React from 'react'

import {GatsbyImage} from 'gatsby-plugin-image'
import {graphql} from 'gatsby'
import styled from "styled-components";

const ImageBlock = ({imageData: {image}}) => {
    return (
        <StyledImage alt={`${image?.alt || image?.filename?.split('.')[0]} || ''`} image={image?.gatsbyImageData}
                     style={{display: 'block'}}/>
    )
}

export default ImageBlock

const StyledImage = styled(GatsbyImage)`
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
`


export const query = graphql`
    fragment ImageBlock  on DatoCmsImage {
        id
        model {
            apiKey
        }
        image {
            alt
            filename
            gatsbyImageData
        }
    }
`
