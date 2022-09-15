import React from "react";
import styles from "../project.module.scss";

type OwnProps = {
  audio?:
    | string
    | {
        name: string;
        track: string;
      }[];
};

const AudioPlayer: React.FC<OwnProps> = ({ audio }) => {
  return Array.isArray(audio) ? (
    <>
      {audio.map(({ name, track }, index) => (
        <div className={styles.audioWrapper} key={index}>
          <div className={styles.trackName}>{name}</div>
          <audio controls className={styles.audio}>
            <source src={track} />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </>
  ) : (
    <div className={styles.audioWrapper}>
      <audio controls className={styles.audio}>
        <source src={audio} />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
