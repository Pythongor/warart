import React from "react";
import { connect } from "react-redux";
import { categories, CategoryType } from "components/filter/tags";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Section, ProjectsContainer, ProjectsPagination } from "components";
import { Button } from "components/widgets";
import styles from "./category.module.scss";

type OwnProps = {
  type: string;
};

const perceptionVerbs = { visual: "see", sound: "hear", textual: "perceive" };

const Category: React.FC<OwnProps> = ({ type }) => {
  const { t } = useTranslation();
  const category = (Object.entries(categories).find(([, subcategories]) =>
    subcategories.includes(type)
  ) || ["textual"])[0];
  const verb = t(perceptionVerbs[category as CategoryType]);
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <Section
        title={
          <>
            {t("howWeFeelWarPart1")}
            <span className={styles.bold}>{verb}</span>
            {t("howWeFeelWarPart2")}
          </>
        }
      >
        {t(`${category}CategoryTextPart1`)}
        <span className={styles.bold}>{t(`${category}CategoryTextPart2`)}</span>
        {t(`${category}CategoryTextPart3`)}
      </Section>
      {/* <Filter type={type} /> */}
      <ProjectsPagination />
      <ProjectsContainer />
      <Button
        text={t("back")}
        onClick={() => navigate(-1)}
        type="blue"
        customClass={styles.button}
      />
    </div>
  );
};

export default connect()(Category);
