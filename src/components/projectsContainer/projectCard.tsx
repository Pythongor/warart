import React, { useCallback, useEffect, useState } from "react";
import {mediaEndPoint} from "../../config";
import { Link } from "react-router-dom";
import {projects} from "../../projects";
import { useTranslation } from "react-i18next";
import Default from "assets/images/Olga.png";
import styles from "./projectsContainer.module.scss";

type OwnProps = {
  name: string;
  author: string;
  id: number;
  subcategory: string;
  image?: string | {name: string, src: string}[];
  isVideo?: boolean
};

const ProjectCard: React.FC<OwnProps> = ({ name, author, id, subcategory, image, isVideo }) => {
  const imgSrc = Array.isArray(image) ? image[0]?.src : image || ""
  const extension = imgSrc?.match(/(\.)(png|jpg|jpeg|PNG|JPG|JPEG)$/)?.[0] || ""
  const compressedImgSrc = extension ? imgSrc.replace(extension, "_compressed.jpg"): imgSrc || Default
  const { t } = useTranslation();

  return (
    <Link to={`/project/${id}`} className={styles.project}>
      <img
        src={isVideo ? imgSrc : compressedImgSrc}
        alt={name || t("untitledProject")}
        className={styles.image}
      />
      <div className={styles.nameWrapper}>
        <div className={styles.name}>{name || t("untitledProject")}</div>
        <div className={styles.info}>{author}</div>
      </div>
    </Link>
  );
};

export default ProjectCard;
