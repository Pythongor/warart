import React from "react";
import { connect } from "react-redux";
import { StateType } from "ducks/types";
import { AudioTrack } from ".";

type StateProps = ReturnType<typeof MSTP>;

const AudioPlayer: React.FC<StateProps> = ({ currentProject }) => {
  const audio = currentProject?.audio || "";
  return Array.isArray(audio) ? (
    <>
      {audio.map(({ name, track }, index) => (
        <AudioTrack index={index} key={index} />
      ))}
    </>
  ) : (
    <AudioTrack />
  );
};

const MSTP = ({ currentProject }: StateType) => ({ currentProject });

export default connect(MSTP)(AudioPlayer);
