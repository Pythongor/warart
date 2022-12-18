import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import {projects} from "../../../projects";
import { ProjectType } from "projects/types";
import { StateType } from "ducks/types";
import { setCurrentProject } from "ducks/actions";
import {
  VideoPlayer,
  AudioPlayer,
  ImageContainer,
  DescriptionSection,
} from "./parts";
import { Section } from "components";
import styles from "./project.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const Project: React.FC<StateProps & DispatchProps> = ({
  setCurrentProject,
  currentProject,
}) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const pageName = pathname.slice(1);
  const [, projectNumber] = pageName.split("/");

  useEffect(() => {
    const project = projects.find((prj) => prj.id === +projectNumber)
    setCurrentProject(project || null)
    return () => {
      setCurrentProject(null)
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.artworkWrapper}>
        {currentProject?.video ? (
          <VideoPlayer />
        ) : (
          <ImageContainer
            image={currentProject?.image}
            name={currentProject?.name || t("untitledProject")}
          />
        )}
        <div className={styles.author}>
          {currentProject?.name
            ? `"${currentProject?.name}"`
            : t("untitledProject")}
          . {currentProject?.author}
        </div>
      </div>
      {currentProject?.category === "textual" && (
        <Section title={currentProject?.name}>
          <div className={styles.text}>{currentProject?.text}</div>
        </Section>
      )}
      {currentProject?.category === "sound" && <AudioPlayer />}
      <DescriptionSection description={currentProject?.description || ""} />
    </div>
  );
};

const MSTP = ({ currentProject }: StateType) => ({ currentProject });
const MDTP = { setCurrentProject };

export default connect(MSTP, MDTP)(Project);
