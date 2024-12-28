// src/ExploreMore.js

import React, { useState } from 'react';
import styled from 'styled-components';

const ExploreMore = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: 'https://t4.ftcdn.net/jpg/10/58/81/63/240_F_1058816305_Xsvng00tc6H6DC81Iji4iof5pzDSr8dX.jpg',
      title: 'Dish 1',
      description: 'A delicious and savory dish with amazing flavors.',
    },
    {
      src: 'https://t4.ftcdn.net/jpg/02/17/39/75/240_F_217397519_MqLzfynUsUKGvZj1AB3iPREmr11sYRhk.jpg',
      title: 'Dish 2',
      description: 'A mouthwatering dish to satisfy your cravings.',
    },
    {
      src: 'https://t3.ftcdn.net/jpg/08/73/84/72/240_F_873847241_AyAi7s6WUiugqOfyTVNuv86bdTTXNwS7.jpg',
      title: 'Dish 3',
      description: 'A perfect blend of spices and textures.',
    },
    {
      src: 'https://t4.ftcdn.net/jpg/09/58/59/19/240_F_958591911_h2ywtWkNTqmHBZDqjRu1O8g8Kv2RzZHV.jpg',
      title: 'Dish 4',
      description: 'An exquisite treat for your taste buds.',
    },
    {
      src: 'https://t4.ftcdn.net/jpg/08/38/00/73/240_F_838007346_bC472yU8jDtUMGb6wJ2c8TQY7RNyUUQt.jpg',
      title: 'Dish 5',
      description: 'Rich flavors and vibrant colors in every bite.',
    },
    {
      src: 'https://t3.ftcdn.net/jpg/05/13/68/84/240_F_513688480_CAACc0NWtqvZrLBJl4yAfKRfzOZ3jycI.jpg',
      title: 'Dish 6',
      description: 'A delightful combination of taste and aroma.',
    },
    {
      src: 'https://t3.ftcdn.net/jpg/10/03/61/28/240_F_1003612872_Mm6FbcE8hwJp4N2d816lgCL1Ou2Ffd3Q.jpg',
      title: 'Dish 7',
      description: 'A fusion of traditional and modern culinary styles.',
    },
    {
      src: 'https://t3.ftcdn.net/jpg/11/01/52/78/240_F_1101527891_ZoCsXZXgfOXfAtopDmeIuhO6VwO0LCKD.jpg',
      title: 'Dish 8',
      description: 'An artistic presentation of fine ingredients.',
    },
    {
      src: 'https://t4.ftcdn.net/jpg/09/91/36/91/240_F_991369148_LM6TfKzzsxbq9ArLgXMAji7ZT3wynm8c.jpg',
      title: 'Dish 9',
      description: 'A healthy and flavorful dish for every occasion.',
    },
    {
      src: 'https://t4.ftcdn.net/jpg/11/03/97/63/240_F_1103976356_Z8X9QePvKhjoG43VfvXCB2CZ2jr0g05b.jpg',
      title: 'Dish 10',
      description: ' Taste in every bite.',
    },
  ];

  const closeModal = () => setSelectedImage(null);

  return (
    <Container>
      {images.map((image, index) => (
        <ImageContainer key={index} onClick={() => setSelectedImage(image)}>
          <Image src={image.src} alt={`Dish ${index + 1}`} />
        </ImageContainer>
      ))}

      {selectedImage && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalImage src={selectedImage.src} alt={selectedImage.title} />
            <ModalInfo>
              <Title>{selectedImage.title}</Title>
              <Description>{selectedImage.description}</Description>
            </ModalInfo>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default ExploreMore;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  cursor: pointer;
  overflow: hidden;

  &:hover img {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  max-width: 600px;
  width: 90%;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
`;

const ModalInfo = styled.div`
  padding: 16px;
  text-align: center;
`;

const Title = styled.h4`
  margin: 0;
  font-size: 20px;
`;

const Description = styled.p`
  margin: 8px 0 0;
  font-size: 16px;
  color: #555;
`;
