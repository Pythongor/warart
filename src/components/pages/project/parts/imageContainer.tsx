import React, { useEffect, useCallback, useState } from "react";
import cn from "classnames";
import { connect } from "react-redux";
import Api from "api";
import { StateType } from "ducks/types";
import { setViewerImage } from "ducks/actions";
import { CarouselSlide } from ".";
import Carousel from "better-react-carousel";
import Default from "assets/images/Olga.png";
import styles from "../project.module.scss";

type OwnProps = {
  image?: string | { name: string; src: string }[];
  name: string;
};
type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const ImageContainer: React.FC<OwnProps & StateProps & DispatchProps> = ({
  image,
  name,
  setViewerImage,
}) => {
  const imgSrc = Array.isArray(image) ? image[0]?.src : image || ""
  const [src, setSrc] = useState<string>(imgSrc || Default);

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
      {image.map((_, index) => {
        const imageName = Array.isArray(image) ? image[index].name : name;
        return (
          <Carousel.Item key={index}>
            <CarouselSlide imageName={imageName} imgSrc={image[index].src}/>
          </Carousel.Item>
        );
      })}
    </Carousel>
  ) : (
    <img
      src={image || src}
      alt={name}
      className={cn(styles.art, { [styles.art__default]: image === Default })}
      onClick={() => {
        if (image !== Default) setViewerImage(src);
      }}
      onError={() => setSrc(Default)}
    />
  );
};

const MSTP = ({ currentProject }: StateType) => ({ currentProject });
const MDTP = { setViewerImage };

export default connect(MSTP, MDTP)(ImageContainer);
