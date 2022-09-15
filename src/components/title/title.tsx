import React from "react";
import cn from "classnames";
import { categories, allCategories } from "components/filter/tags";
import { projects } from "projects";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./title.module.scss";

const getParentCategory = (pageName: string) => {
  const entry = Object.entries(categories).find(([, subcategories]) =>
    subcategories.includes(pageName)
  ) || [""];
  return entry[0];
};

const Title = () => {
  const { pathname } = useLocation();
  const pageName = pathname.slice(1);
  const {
    t,
    i18n: { language },
  } = useTranslation();

  let titles: [React.ReactNode, React.ReactNode] = [
    <>
      4<span className={styles.bold}>0</span>4
    </>,
    <>
      <span className={styles.bold}>not</span> found
    </>,
  ];
  if (pageName === "") {
    titles = [
      <>
        War<span className={styles.bold}>art</span>:
      </>,
      <>
        {t("mottoPart1")}
        <span className={styles.bold}>{t("mottoPart2")}</span>
        {t("mottoPart3")}
      </>,
    ];
  } else if (pageName === "about") {
    titles = [
      <>
        War<span className={styles.bold}>art</span>:
      </>,
      <>
        {t("mottoPart1")}
        <span className={styles.bold}>{t("mottoPart2")}</span>
        {t("mottoPart3")}
      </>,
    ];
  } else if (pageName === "submission") {
    titles = [
      <>
        War<span className={styles.bold}>art</span>:
      </>,
      <>
        {t("submitYour")} <span className={styles.bold}>{t("project")}</span>
      </>,
    ];
  } else if (allCategories.includes(pageName)) {
    const parentCategory = getParentCategory(pageName);
    const titlePart1 = {
      fr: (
        <>
          {t("mottoPart2")}{" "}
          <span className={styles.bold}>{t(parentCategory)}</span>:
        </>
      ),
      other: (
        <>
          <span className={styles.bold}>{t(parentCategory)}</span>{" "}
          {t("mottoPart2")}:
        </>
      ),
    };
    titles = [
      language === "fr" ? titlePart1.fr : titlePart1.other,
      <>{t(pageName)}</>,
    ];
  } else if (allCategories.includes(pageName.split("/")[0])) {
    const [, projectNumber] = pageName.split("/");
    const project = projects.find(({ id }) => id === +projectNumber);
    if (project) {
      const { name: projectName, subcategory } = project;
      titles = [
        <>
          <span className={styles.bold}>{t(subcategory)}</span>:
        </>,
        <>{projectName || t("untitledProject")}</>,
      ];
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={cn(styles.title, styles.title_top)}>{titles[0]}</h1>
      <div className={styles.divider} />
      <h1 className={cn(styles.title, styles.title_bottom)}>{titles[1]}</h1>
    </div>
  );
};

export default Title;
