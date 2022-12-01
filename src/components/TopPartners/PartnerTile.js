import React from "react";
import {GatsbyImage} from "gatsby-plugin-image";
import styled from "styled-components";
import {partnerUrl} from "../../urls";
import {Link} from "gatsby";

const PartnerTile = ({title, slug, coverImage}) => {

    return (
        <StyledPartnerTile to={partnerUrl(slug)}>
            {coverImage && <GatsbyImage image={coverImage?.gatsbyImageData} alt={`${coverImage.alt || 'photo'}`} style={{maxHeight: 200, borderRadius: 3, display: "block"}}/>}
            <h3>{title}</h3>
        </StyledPartnerTile>
    )
}

export default PartnerTile

const StyledPartnerTile = styled(Link)`
  display: block;
  overflow: hidden;
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  color: #444444;
  img {
    transition: transform .3s ease !important;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
  h3 {
    margin-top: 16px;
    text-align: center;
  }
`