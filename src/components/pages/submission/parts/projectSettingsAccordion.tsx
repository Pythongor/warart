import { connect } from "react-redux";
import { Accordion, Input } from "components/widgets";
import { useTranslation } from "react-i18next";
import { setProjectName, setAdultContent } from "ducks/actions";
import styles from "../submission.module.scss";
type DispatchProps = typeof MDTP;

const ProjectSettingsAccordion: React.FC<DispatchProps> = ({
  setProjectName,
}) => {
  const { t } = useTranslation();
  return (
    <Accordion isOpen>
      <div className={styles.flexContainer}>
        <div className={styles.flexColumn}>
          <div className={styles.subtitle}>{`${t("projectName")}`}</div>
        </div>
        {/* <div className={styles.flexColumn}>
          <div className={styles.subtitle}>{`${t("visibility")}`}</div>
        </div> */}
        <div className={styles.flexColumn}>
          <div className={styles.subtitle}>{`${t("content")}`}</div>
        </div>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.flexColumn}>
          <Input
            placeholder={t("addTheTitle")}
            onChange={(name) => setProjectName(name)}
          />
        </div>
        <div className={styles.flexColumn}>
          <Input
            name={t("adult")}
            type="checkbox"
            onCheck={(value) => setAdultContent(value)}
          />
        </div>
      </div>
    </Accordion>
  );
};

const MDTP = { setProjectName, setAdultContent };

export default connect(null, MDTP)(ProjectSettingsAccordion);
