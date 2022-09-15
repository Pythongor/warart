import React from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { Link } from "react-router-dom";
import { categories } from "components/filter/tags";
import { projects } from "projects";
import styles from "./categories.module.scss";

const Categories = () => {
  const { t, i18n } = useTranslation();
  const availableSubcategories: {
    [key: string]: {
      [key: string]: boolean;
    };
  } = {};
  Object.keys(categories).forEach((key, index) => {
    availableSubcategories[key] = {};
    categories[key].forEach((subcategory) => {
      availableSubcategories[key][subcategory] = projects.some(
        ({ subcategory: projectSubcategory }) =>
          subcategory === projectSubcategory
      );
    });
  });
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        <span className={styles.bold}>{t("view")}</span> {t("categories")}
      </h2>
      {Object.entries(availableSubcategories).map(([title, subcategories]) => (
        <div className={styles.category} key={title}>
          <h3 className={styles.categoryTitle}>
            {/* todo refactor i18n */}
            {i18n.language === "en" && t(title)}{" "}
            <span className={styles.bold}>{t("art")}</span>{" "}
            {i18n.language !== "en" && t(title)}
          </h3>
          <div className={styles.categoryContainer}>
            {Object.entries(subcategories).map(([subcategory, isActive]) => {
              return (
                <Link
                  to={isActive ? `/${subcategory}` : "#"}
                  key={subcategory}
                  className={cn(styles.categoryLink, {
                    [styles.categoryLink__inactive]: !isActive,
                  })}
                >
                  {t(subcategory)}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
