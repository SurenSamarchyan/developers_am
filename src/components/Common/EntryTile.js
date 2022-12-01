import React from "react";
import {GatsbyImage} from "gatsby-plugin-image";
import SeeMore from "../SeeMore/SeeMore";
import styled from "styled-components";
import {articleUrl, partnerUrl} from "../../urls";
import {theme} from "../../styles/theme";
import {Link} from "gatsby";

const EntryTile = ({title, description, type, slug, coverImage, descriptionLinesCount = 2}) => {
    const entryLink = type === 'partner' ? partnerUrl(slug) : articleUrl(slug)

    return (
    <EntryCard>
        {coverImage &&
        <Link to={entryLink}>
            <CoverImage image={coverImage?.gatsbyImageData} alt={`${coverImage.alt}`} style={{maxHeight: 200}}/>
        </Link>}
        <CardContent descriptionLinesCount={descriptionLinesCount}>
            <HeaderLink to={entryLink}>
                <h3 title={title}> {title}</h3>
            </HeaderLink>
            <p title={description}>{description}</p>
            <SeeMore link={entryLink} text={'Տեսնել ավելին'} isOnTile={true}/>
        </CardContent>
    </EntryCard>
)}

export default EntryTile

const EntryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  overflow: hidden;
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  color: #444444;
  border-radius: 3px;
  box-shadow: 0 2px 7px 1px #e1e1e1;


  img {
    transition: transform .3s ease !important;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 16px;
  font-size: 16px;

  p {
    margin: 16px 0 24px;
    display: -webkit-box;
    width: 100%;
    height: 76px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const CoverImage = styled(GatsbyImage)`
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


const HeaderLink = styled(Link)`
width: 100%;
  h3 {
    font-size: 20px;
    color: ${theme.colors.red};
    line-height: 1.3;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`
