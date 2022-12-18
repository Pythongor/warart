import React from "react";
import { connect } from "react-redux";
import { StateType } from "ducks/types";
import { setViewerImage } from "ducks/actions";
import styles from "./imageViewer.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const ImageViewer: React.FC<StateProps & DispatchProps> = ({
  viewerImage,
  setViewerImage,
}) => {
  if (viewerImage) {
    return (
      <div className={styles.wrapper} onClick={() => setViewerImage(null)}>
        <img src={viewerImage} alt="" className={styles.image} />
      </div>
    );
  }
  return null;
};

const MSTP = ({ viewerImage }: StateType) => ({ viewerImage });
const MDTP = { setViewerImage };

export default connect(MSTP, MDTP)(ImageViewer);
