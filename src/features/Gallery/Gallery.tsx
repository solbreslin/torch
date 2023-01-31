import React, { useState } from 'react';
import { GalleryStyled } from './Gallery.styled';
import Button from '../../shared/Button/Button';
import { ActionText } from '../constants';

type Image = {
  src: string;
  alt: string;
};

type Props = {
  feature_image: Image;
  images: Image[];
};

const Gallery: React.FC<Props> = ({ feature_image, images }) => {
  const [galleryIsOpen, setGalleryIsOpen] = useState(false);

  function handleOpenGallery() {
    setGalleryIsOpen(true);
  }

  return (
    <GalleryStyled>
      <img src={feature_image.src} alt={feature_image.alt} />
      {images.map((i) => (
        <img src={i.src} alt={i.alt} />
      ))}
      <Button onClick={handleOpenGallery}>{ActionText.OPEN_GALLERY}</Button>
    </GalleryStyled>
  );
};

export default Gallery;
