import React, { useEffect, useCallback, useState, useRef } from "react";
import { connect } from "react-redux";
import Api from "api";
import ReactPlayer from "react-player/file";
import { StateType } from "ducks/types";
import styles from "../project.module.scss";

type OwnProps = { index?: number; name?: string };
type StateProps = ReturnType<typeof MSTP>;

const AudioTrack: React.FC<OwnProps & StateProps> = ({
  index,
  currentProject,
}) => {
  const [src, setSrc] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    if (Array.isArray(currentProject?.audio)) {
      const track = currentProject?.audio[index || 0]
      setSrc(track?.track || "")
      setName(track?.name || "")
    } else {
      setSrc(currentProject?.audio || "")
      setName(currentProject?.name || "")
    }
  }, [currentProject, index]);

  return (

    <div className={styles.audioWrapper}>
      {name && <div className={styles.trackName}>{name}</div>}
      <ReactPlayer
        config={{ forceAudio: true }}
        url={[{ src }]}
        controls={true}
        width="100%"
        height={35}
        className={styles.audio}
      />
    </div>
  );
};

const MSTP = ({ currentProject }: StateType) => ({ currentProject });

export default connect(MSTP)(AudioTrack);
