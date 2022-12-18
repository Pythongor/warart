import { useTranslation } from "react-i18next";
import { Section } from "components";
import styles from "../submission.module.scss";

const SubmissionSection = () => {
  const { t } = useTranslation();
  return (
    <Section
      title={
        <>
          {t("submissionSectionTitlePart1")}
          <span className={styles.bold}>
            {t("submissionSectionTitlePart2")}
          </span>{" "}
          {t("submissionSectionTitlePart3")}
        </>
      }
    >
      WAR<span className={styles.bold}>ART</span> {t("submissionText")}
    </Section>
  );
};

export default SubmissionSection;
