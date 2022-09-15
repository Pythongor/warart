import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { StateType } from "ducks/types";
import { tagsByCategory } from "./tags";
import styles from "./filter.module.scss";
import { t } from "i18next";

type OwnProps = { type: string };
type StateProps = ReturnType<typeof MSTP>;

const Filter: React.FC<StateProps & OwnProps> = ({ token, type }) => {
  const tags = tagsByCategory[type];
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.categoryTitle}>
        {t("filterBy")} <span className={styles.bold}>{t("tags")}</span>{" "}
      </h2>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <button className={styles.tag} key={tag}>
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

const MSTP = ({ token }: StateType) => ({ token });

export default connect(MSTP)(Filter);
