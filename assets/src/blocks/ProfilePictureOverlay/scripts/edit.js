import React from 'react';
import {PanelBody, Button, ResponsiveWrapper} from '@wordpress/components';
import {InspectorControls } from '@wordpress/editor';
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;

export default function edit(props) {

  const { attributes, setAttributes } = props;

  const removeMedia = () => {
    setAttributes({
      mediaId: 0,
      mediaUrl: ''
    });
  };

  const onSelectMedia = (media) => {
    setAttributes({
      mediaId: media.id,
      mediaUrl: media.url
    });
  };

  const blockStyle = {
    backgroundImage: attributes.mediaUrl != '' ? 'url("' + attributes.mediaUrl + '")' : 'none',
    backgroundSize: 'cover',
    height: '400px',
    width: '400px'
  };


  return (
    <>
      <InspectorControls>
        <PanelBody
          title={'Overlay image'}
          initialOpen={ true }
        >
          <div className="editor-post-featured-image">
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectMedia}
                value={attributes.mediaId}
                allowedTypes={ ['image'] }
                render={({open}) => (
                  <Button
                    className={attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
                    onClick={open}
                  >
                    {attributes.mediaId == 0 && 'Select an image'}
                    {props.media != undefined &&
                    <ResponsiveWrapper
                      naturalWidth={ props.media.media_details.width }
                      naturalHeight={ props.media.media_details.height }
                    >
                      <img src={props.media.source_url} />
                    </ResponsiveWrapper>
                    }
                  </Button>
                )}
              />
            </MediaUploadCheck>
            {attributes.mediaId != 0 &&
            <MediaUploadCheck>
              <MediaUpload
                title={'Replace image'}
                value={attributes.mediaId}
                onSelect={onSelectMedia}
                allowedTypes={['image']}
                render={({open}) => (
                  <Button onClick={open} isDefault isLarge>{'Replace image'}</Button>
                )}
              />
            </MediaUploadCheck>
            }
            {attributes.mediaId != 0 &&
            <MediaUploadCheck>
              <Button onClick={removeMedia} isLink isDestructive>{'Remove image'}</Button>
            </MediaUploadCheck>
            }
          </div>
        </PanelBody>
      </InspectorControls>
      <div style={blockStyle}/>
    </>
  );
}
