import React, { useEffect, useCallback, useState } from "react";
import cn from "classnames";
import { connect } from "react-redux";
import Api from "api";
import { StateType } from "ducks/types";
import { setViewerImage } from "ducks/actions";
import Default from "assets/images/Olga.png";
import styles from "../project.module.scss";

type OwnProps = {
  imageName: string;
  imgSrc: string;
};
type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const CarouselSlide: React.FC<OwnProps & StateProps & DispatchProps> = ({
  imageName,
  setViewerImage,imgSrc
}) => {
  const [src, setSrc] = useState<string>(imgSrc || Default);

  return (
    <div className={styles.carouselItem}>
      <img
        src={src}
        alt={imageName}
        className={cn(styles.art, { [styles.art__default]: src === Default })}
        onClick={() => {
          if (src !== Default) setViewerImage(src);
        }}
        onError={() => setSrc(Default)}
      />
      <div className={styles.imageName}>{imageName}</div>
    </div>
  );
};

const MSTP = ({ currentProject }: StateType) => ({ currentProject });
const MDTP = { setViewerImage };

export default connect(MSTP, MDTP)(CarouselSlide);
