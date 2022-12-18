import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Section } from "components";
import { Button } from "components/widgets";
import OurTeam from "./ourTeam";
import styles from "./about.module.scss";

const About = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <Section
        title={
          <>
            {t("whoAreWeTitlePart1")}
            <span className={styles.bold}>{t("whoAreWeTitlePart2")}</span>
          </>
        }
      >
        {t("whoAreWeTextPart1")}
        <span className={styles.bold}>{t("whoAreWeTextPart2")}</span>
        {t("whoAreWeTextPart3")}
      </Section>
      <Section
        title={
          <>
            {t("ourTeamPart1")}
            <span className={styles.bold}>{t("ourTeamPart2")}</span>
          </>
        }
      >
        <OurTeam />
      </Section>
      <Section
        title={
          <>
            {t("aboutThis")} <span className={styles.bold}>{t("project")}</span>
          </>
        }
        // imageComponent={Coin}
      >
        WAR<span className={styles.bold}>ART</span> {t("aboutTextPart1")}WAR
        <span className={styles.bold}>ART</span>
        {t("aboutTextPart2")}
        <span className={styles.bold}>{t("aboutTextPart3")}</span>!
      </Section>
      <Button
        text={t("back")}
        onClick={() => navigate(-1)}
        type="blue"
        customClass={styles.button}
      />
    </div>
  );
};

export default About;
