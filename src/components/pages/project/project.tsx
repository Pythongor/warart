import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { projects } from "projects";
import { setModal, setViewerImage } from "ducks/actions";
import {
  VideoPlayer,
  AudioPlayer,
  ImageContainer,
  DescriptionSection,
} from "./parts";
import { Section } from "components";
import styles from "./project.module.scss";

type DispatchProps = typeof MDTP;

const Project: React.FC<DispatchProps> = ({ setModal, setViewerImage }) => {
  const { pathname } = useLocation();
  const pageName = pathname.slice(1);
  const [, projectNumber] = pageName.split("/");
  const project = projects.find(({ id }) => id === +projectNumber);
  if (!project) throw new Error();
  const {
    name,
    author,
    description,
    category,
    // tags,
    image,
    video,
    audio,
    text,
  } = project;
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.artworkWrapper}>
        {video ? (
          <VideoPlayer video={video} />
        ) : (
          <ImageContainer
            image={image}
            name={name}
            onClick={(image: string) => image && setViewerImage(image)}
          />
        )}
        <div className={styles.author}>
          {name ? `"${name}"` : t("untitledProject")}. {author}
        </div>
      </div>
      {category === "textual" && (
        <Section title={name}>
          <div className={styles.text}>{text}</div>
        </Section>
      )}
      {category === "sound" && <AudioPlayer audio={audio} />}
      <DescriptionSection description={description} />
    </div>
  );
};

const MDTP = { setModal, setViewerImage };

export default connect(null, MDTP)(Project);
