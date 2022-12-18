import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import cn from "classnames";
import { categories, allCategories } from "components/filter/tags";
import { StateType } from "ducks/types";
import { getTitles, TitleCaseType } from "./getTitles";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./title.module.scss";

const getParentCategory = (pageName: string) => {
  const entry = Object.entries(categories).find(([, subcategories]) =>
    subcategories.includes(pageName)
  ) || [""];
  return entry[0];
};

type TitlesType = [React.ReactNode, React.ReactNode];

type StateProps = ReturnType<typeof MSTP>;

const Title: React.FC<StateProps> = ({ currentProject }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [titles, setTitles] = useState<TitlesType>(getTitles("notFound", t));
  const { pathname } = useLocation();
  const pageName = pathname.slice(1);

  useEffect(() => {
    if (["", "about", "submission", "terms"].includes(pageName)) {
      setTitles(getTitles(pageName as TitleCaseType, t));
    } else if (allCategories.includes(pageName)) {
      const parentCategory = getParentCategory(pageName);
      const titleCase =
        language === "fr" ? "subcategoryFr" : "subcategoryOther";
      setTitles(getTitles(titleCase, t, { parentCategory, pageName }));
    } else if (pageName.split("/")[0] === "project") {
      if (currentProject) {
        const { name: projectName, subcategory } = currentProject;
        setTitles(getTitles("project", t, { subcategory, projectName }));
      }
    }
  }, [language, pageName, currentProject, t]);

  return (
    <div className={styles.wrapper}>
      <h1 className={cn(styles.title, styles.title_top)}>{titles[0]}</h1>
      <div className={styles.divider} />
      <h1 className={cn(styles.title, styles.title_bottom)}>{titles[1]}</h1>
    </div>
  );
};

const MSTP = ({ currentProject }: StateType) => ({ currentProject });

export default connect(MSTP)(Title);
