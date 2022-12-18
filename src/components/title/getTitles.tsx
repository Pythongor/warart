import React from "react";
import styles from "./title.module.scss";

type TitlesType = [React.ReactNode, React.ReactNode];

export type TitleCaseType =
  | "notFound"
  | ""
  | "about"
  | "submission"
  | "subcategoryFr"
  | "subcategoryOther"
  | "project"
  | "terms";
type TType = (phrase?: string) => string;
type TitlesByCaseOptionsType = {
  parentCategory?: string;
  pageName?: string;
  subcategory?: string;
  projectName?: string;
};

export const getTitles = (
  titleCase: TitleCaseType,
  t: TType,
  {
    parentCategory,
    pageName,
    subcategory,
    projectName,
  }: TitlesByCaseOptionsType = {}
) => {
  const titles: { [key in TitleCaseType]: TitlesType } = {
    notFound: [
      <>
        4<span className={styles.bold}>0</span>4
      </>,
      <>
        <span className={styles.bold}>not</span> found
      </>,
    ],
    "": [
      <>
        War<span className={styles.bold}>art</span>:
      </>,
      <>
        {t("mottoPart1")}
        <span className={styles.bold}>{t("mottoPart2")}</span>
        {t("mottoPart3")}
      </>,
    ],
    about: [
      <>
        War<span className={styles.bold}>art</span>:
      </>,
      <>{t("about")}</>,
    ],
    submission: [
      <>
        War<span className={styles.bold}>art</span>:
      </>,
      <>
        {t("submitYour")} <span className={styles.bold}>{t("project")}</span>
      </>,
    ],
    subcategoryFr: [
      <>
        {t("mottoPart2")}{" "}
        <span className={styles.bold}>{t(parentCategory)}</span>:
      </>,
      <>{t(pageName)}</>,
    ],
    subcategoryOther: [
      <>
        <span className={styles.bold}>{t(parentCategory)}</span>{" "}
        {t("mottoPart2")}:
      </>,
      <>{t(pageName)}</>,
    ],
    project: [
      <>
        <span className={styles.bold}>{t(subcategory)}</span>:
      </>,
      <>{projectName || t("untitledProject")}</>,
    ],
    terms: [
      <>
        War<span className={styles.bold}>art</span>:
      </>,
      <>
        <span className={styles.bold}>TERMS</span> AND REGULATIONS
      </>,
    ],
  };
  return titles[titleCase];
};
