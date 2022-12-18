import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { useQuery } from "hooks";
import { setTotalProjects } from "ducks/actions";
import { projects } from "../../projects";
import { useTranslation } from "react-i18next";
import ProjectCard from "./projectCard";
import styles from "./projectsContainer.module.scss";

type DispatchProps = typeof MDTP;

const ProjectsContainer: React.FC<DispatchProps> = ({ setTotalProjects }) => {
  const SIZE = 20;
  const { pathname } = useLocation();
  const subcategory = pathname.slice(1);
  const query = useQuery();
  const page = query.get("page");
  const { t } = useTranslation();
  const categoryProjects = projects.filter((project) => project.subcategory === subcategory)
  const range = [(+(page || 1) - 1) * SIZE, +(page || 1) * SIZE]
  const paginatedProject = categoryProjects.length > SIZE ? categoryProjects.slice(...range) : categoryProjects

  useEffect(() => {
    return () => {
      setTotalProjects(categoryProjects.length);
    };
  }, [setTotalProjects, categoryProjects.length]);

  return (
    <div className={styles.wrapper}>
      {paginatedProject.length ? (
        paginatedProject.map(({ name, author, id, image, video }, index) => {
          const extension = video?.match(/(\.)(mov|mp4|MOV|MP4)$/)?.[0] || ""
          const thumbnailImgSrc = video?.replace(`${extension}`, "_thumbnail.jpg")
          return (
              <ProjectCard
              name={name}
              author={author}
              id={id}
              subcategory={subcategory}
              key={index}
              image={video ? thumbnailImgSrc : image}
              isVideo={!!video}
                />
                )
              })
      ) : (
        <div className={styles.empty}>{t("noProject")}</div>
      )}
    </div>
  );
};

const MDTP = { setTotalProjects };

export default connect(null, MDTP)(ProjectsContainer);
