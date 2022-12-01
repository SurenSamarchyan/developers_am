import React from 'react'

import VideoExternal from './Content/VideoExternal'
import RichText from './Content/RichText'
import VideoUpload from './Content/VideoUpload'
import ImageBlock from './Content/ImageBlock'
import ImageGallery from '../Content/ImageGallery/ImageGallery'
import FileList from './Content/FileList'
import {theme} from "../../styles/theme";
import styled from "styled-components";

const ArticleContent = ({contentData}) => {

    return (
        <Content>
            {contentData?.map(content => {
                switch (content?.model?.apiKey) {
                    case 'rich_text':
                        return content.body || content.title ? <RichText data={content} key={content.id} className={'content-block'}/> : ''
                    case 'image':
                        return content.image ? <ImageBlock imageData={content} key={content.id} className={'content-block'}/> : ''
                    case 'image_gallery':
                        return content.images ? <ImageGallery galleryData={content} key={content.id} className={'content-block'}/> : ''
                    case 'video_upload':
                        return  content.videoFile ? <VideoUpload videoData={content} key={content.id} className={'content-block'}/> : ''
                    case 'video_external':
                        return content.videoUrl ? <VideoExternal videoData={content} key={content.id} className={'content-block'}/> : ''
                    case 'file_list':
                        return <FileList files={content} key={content.id} className={'content-block'}/>
                    default:
                        return null
                }
            })}
        </Content>
    )
}

export default ArticleContent

const Content = styled.div`
  padding-bottom: ${theme.space.l}px;
  &>* {
    margin-bottom: ${theme.space.m}px;
    ${theme.media.md} {
      margin-bottom: ${theme.space.l}px;
    }
    ${theme.media.lg} {
      margin-bottom: ${theme.space.xl}px;
    }
  }
`