import React from 'react'
import BannerBlock from "./Banner/Banner";
import Seo from "./Seo";
import ContentGrid from "./Common/ContentGrid/ContentGrid";
import EntryTile from "./Common/EntryTile";
import {ContainerBox} from "./Common/ContainerBox/ContainerBox";
import {theme} from "../styles/theme";
import styled from "styled-components";
import PartnerTile from "./TopPartners/PartnerTile";


const AllEntriesContainer = ({
                                seoSettings,
                                cover,
                                title,
                                allEntries,
                                entryType
                            }) => {

    return (
        <>
            <Seo {...seoSettings}/>

            <BannerBlock
                bgImage={cover}
                title={title}
            />

            <StyledContainerBox>
                <ContentGrid cols={4} justifyContent={'flex-start'}>
                    {allEntries.map(entry => entryType === "partner" ? <PartnerTile {...entry} key={entry.id} /> : <EntryTile {...entry} key={entry.id} type={entryType}/>)}
                </ContentGrid>
            </StyledContainerBox>
        </>
    )
}

export const StyledContainerBox = styled(ContainerBox)`
  padding-top: 36px;
  padding-bottom: 36px;

  ${theme.media.md} {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  ${theme.media.lg} {
    padding-top: 56px;
    padding-bottom: 56px;
  }

  ${theme.media.xl} {
    padding-top: 140px;
    padding-bottom: 140px;
  }`

export default AllEntriesContainer

