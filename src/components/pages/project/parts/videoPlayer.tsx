import React from "react";
import { connect } from "react-redux";
import { StateType } from "ducks/types";
import ReactPlayer from "react-player/file";
import styles from "../project.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const VideoPlayer: React.FC<StateProps & DispatchProps> = ({
  currentProject,
}) => {

  return (
    <ReactPlayer
      url={[{ src: currentProject?.video || "" }]}
      controls={true}
      width="100%"
      height="100%"
      className={styles.videoContainer}
    />
  )
};

const MSTP = ({ currentProject }: StateType) => ({
  currentProject,
});
const MDTP = {};

export default connect(MSTP, MDTP)(VideoPlayer);
