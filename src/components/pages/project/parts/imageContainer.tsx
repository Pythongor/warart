import React from "react";
import Carousel from "better-react-carousel";
import Default from "assets/images/Olga.png";
import styles from "../project.module.scss";

type OwnProps = {
  image?: string | { name: string; src: string }[];
  name: string;
  onClick?: (image: string) => void;
};

const ImageContainer: React.FC<OwnProps> = ({ image, onClick, name }) => {
  return Array.isArray(image) ? (
    <Carousel
      cols={1}
      rows={1}
      gap={10}
      loop
      showDots
      dotColorActive="#eec464"
      dotColorInactive="#6c86b2"
      arrowRight={<div className={styles.rightArrow} />}
      arrowLeft={<div className={styles.leftArrow} />}
    >
      {image.map(({ src, name }, index) => (
        <Carousel.Item key={index}>
          <div className={styles.carouselItem}>
            <img
              src={src || Default}
              alt={name}
              className={styles.art}
              onClick={() => onClick && onClick(src)}
            />
            <div className={styles.imageName}>{name}</div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  ) : (
    <img
      src={image || Default}
      alt={name}
      className={styles.art}
      onClick={() => image && onClick && onClick(image)}
    />
  );
};

export default ImageContainer;
