import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/file";
import styles from "../project.module.scss";

type OwnProps = { video: string };

const VideoPlayer: React.FC<OwnProps> = ({ video }) => {
  const [videoUrl, setVideoUrl] = useState<string | undefined>();
  useEffect(() => {
    if (video) {
      setVideoUrl(video);
    }
  }, [video]);

  return (
    <ReactPlayer
      url={[{ src: videoUrl || "" }]}
      controls={true}
      width="100%"
      height="100%"
      className={styles.videoContainer}
    />
  );
};

export default VideoPlayer;
