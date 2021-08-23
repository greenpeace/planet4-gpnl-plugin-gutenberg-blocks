import React from 'react';
import { useState } from '@wordpress/element';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import {Button, Modal, Card, CardBody, CardHeader ,CardFooter, TextControl, TextareaControl} from '@wordpress/components';
import {URLInput, MediaUpload, MediaUploadCheck} from '@wordpress/block-editor';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ResetIcon from '@material-ui/icons/RotateLeft';
import PropTypes from 'prop-types';

const MyModal = ({variantsBlock=[], onValueChange}) => {
  const [isOpen, setOpen] = useState(false);
  const [variants, setVariants] = useState(variantsBlock);
  const [variant, setVariant] = useState({});
  const [num, setNum] = useState(variants.length);
  const openModal = (index) => {setNum(index); setOpen(true);};
  const closeModal = () => setOpen(false);
  const saveVariant = () => {
    let tmp = [];
    if (num===variants.length+1) {
      tmp = [...variants, variant];
    }
    else{
      tmp = [...variants];
      tmp[num] = variant;
    }
    onValueChange(tmp);
    setVariants(tmp);
    setVariant({});
    closeModal();};
  const removeVariant = (value) => {
    let arr = variants.filter((elem,index) => { console.log(index); return index !== value; });
    onValueChange(arr);
    setVariants(arr);
  };
  const editVariant = (index) => {
    setVariant(variants[index]);
    openModal(index);
  };
  const handleInput = (attr, value) => {
    let tmp = variant;
    tmp[attr] = value;
    setVariant(prevVariant => {
      return {...prevVariant, ...tmp};
    });
  };

  const variantsList = () => {
    const list = variants.map((elem, index) => {
      return (
        <li key={index.toString()}>
          {index+1}
          <Button onClick={()=>editVariant(index)}><EditIcon/></Button>
          <Button onClick={()=>removeVariant(index)}><DeleteIcon/></Button>
        </li>
      );
    });
    return <ul>{list}</ul>;
  };

  return (
    <>
      {variantsList()}
      <Button variant="secondary" onClick={() => openModal(variants.length+1)}>
        <AddIcon/>
        {variants.length === 0 ? 'Setup first' : 'Add'} variant
      </Button>
      { variants.length !== 0 ?
        <Button
          variant="secondary"
          onClick={()=>{writeCookie('p4Experiment', 0, -1);}}
        >
          <ResetIcon/> Reset frontend cache
        </Button>
        : ''
      }

      {isOpen &&
      <Modal title="Definieer experiment" onRequestClose={closeModal}>
        <Card size="medium">
          <CardHeader><strong>Variant {num===variants.length+1?num:num+1}</strong></CardHeader>
          <CardBody>
            <TextControl
              label="Titel"
              name='title'
              value={variant.title}
              onChange={(value) => {handleInput('title', value); }}
            />
            <TextareaControl
              label="Abstract / omschrijving"
              value={variant.description}
              onChange={(value) => { handleInput('description', value); }}
            />
            {/*<MediaUploadCheck>*/}
            {/*  <MediaUpload*/}
            {/*    title='afbeelding'*/}
            {/*    onSelect={(media) =>*/}
            {/*      console.log('selected ' + media.length)*/}
            {/*    }*/}
            {/*    allowedTypes='image'*/}
            {/*    render={({open}) => (*/}
            {/*      <Button onClick={open}>Open Media Library</Button>*/}
            {/*    )}*/}
            {/*  />*/}
            {/*</MediaUploadCheck>*/}
            <TextControl
              label="Tekst op knop"
              name='link_text'
              value={variant.link_text}
              onChange={(value) => { handleInput('link_text', value); }}
            />
            {/*<URLInput*/}
            {/*  onChange={(value) => { handleInput('link_url', value); }}*/}
            {/*  value={variant.link_url}*/}
            {/*  tagName={'p'}*/}
            {/*  label={'URL van knop (kan een interne of externe link zijn)'}*/}
            {/*  placeholder={'URL'}*/}
            {/*/>*/}
          </CardBody>
          <CardFooter>
            <Button variant="secondary" onClick={saveVariant}>
              <SaveIcon/> Opslaan
            </Button>
          </CardFooter>
        </Card>

      </Modal>
      }
    </>
  );
};

MyModal.propTypes = {
  'variantsBlock': PropTypes.array,
  'onValueChange': PropTypes.func,
};

export default MyModal;

function writeCookie(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = encodeURI(name) + '=' + encodeURI(value) + ';domain=.' + document.domain + ';path=/;' + '; expires=' + date.toGMTString();
}
