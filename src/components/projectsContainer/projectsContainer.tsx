import React from "react";
import { Link, useLocation } from "react-router-dom";
import { projects } from "projects";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player/file";
import Default from "assets/images/Olga.png";
import styles from "./projectsContainer.module.scss";

const ProjectsContainer = () => {
  const { pathname } = useLocation();
  const subcategory = pathname.slice(1);
  const categoryProjects = projects.filter(
    ({ subcategory: projectSubcategory }) => projectSubcategory === subcategory
  );
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      {categoryProjects.length ? (
        categoryProjects.map(({ name, author, image, id, video }, index) => (
          <Link to={`${pathname}/${id}`} className={styles.project} key={index}>
            {subcategory === "videoArt" ? (
              <ReactPlayer
                url={video}
                width="100%"
                height="100%"
                className={styles.videoPreview}
              />
            ) : (
              <img
                src={Array.isArray(image) ? image[0].src : image || Default}
                alt={name || t("untitledProject")}
                className={styles.image}
              />
            )}
            <div className={styles.nameWrapper}>
              <div className={styles.name}>{name || t("untitledProject")}</div>
              <div className={styles.info}>{author}</div>
            </div>
          </Link>
        ))
      ) : (
        <div className={styles.empty}>{t("noProject")}</div>
      )}
    </div>
  );
};

export default ProjectsContainer;
