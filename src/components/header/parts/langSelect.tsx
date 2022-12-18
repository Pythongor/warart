import React from "react";
import { connect } from "react-redux";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { StateType, LangType } from "ducks/types";
import { setLanguage } from "ducks/actions";
import styles from "../header.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const languages: LangType[] = ["en", "fr", "uk"];

const LangSelect: React.FC<StateProps & DispatchProps> = ({
  language,
  setLanguage,
}) => {
  const { i18n } = useTranslation();
  return (
    <div className={styles.langSelect}>
      {languages.map((lang) => (
        <div
          className={cn(styles.langOption, {
            [styles.langOption_selected]: i18n.language === lang,
          })}
          onClick={() => i18n.changeLanguage(lang)}
          key={lang}
        >
          {lang}
        </div>
      ))}
    </div>
  );
};

const MSTP = ({ language }: StateType) => ({
  language,
});

const MDTP = { setLanguage };

export default connect(MSTP, MDTP)(LangSelect);
