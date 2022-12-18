import { Accordion, Input } from "components/widgets";
import { useTranslation } from "react-i18next";
import styles from "../submission.module.scss";

type OwnProps = {
  isOpen?: boolean;
};

const TagsAccordion: React.FC<OwnProps> = ({ isOpen = false }) => {
  const { t } = useTranslation();
  return (
    <Accordion isOpen={isOpen}>
      <div className={styles.subtitle}>{t("selectTags")}</div>
      <Input placeholder="Add up to 10 tags…" labelClass={styles.input} />
    </Accordion>
  );
};

export default TagsAccordion;
