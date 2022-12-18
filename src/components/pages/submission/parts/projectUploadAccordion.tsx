import React, { useEffect } from "react";
import { StateType } from "ducks/types";
import { initialState } from "ducks/reducer";
import { setDescription } from "ducks/actions";
import { compare } from "utilites";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { Accordion, Input } from "components/widgets";
// import { FileUploader } from "react-drag-drop-files";
// import Clip from "assets/images/clip.svg";
import styles from "../submission.module.scss";

// const fileTypes = ["JPG", "PNG", "GIF"];

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const ProjectUploadAccordion: React.FC<StateProps & DispatchProps> = ({
  selectedSubcategories,
  projectDescription,
  setDescription,
}) => {
  useEffect(() => {
    if (compare(selectedSubcategories, initialState.selectedSubcategories))
      setDescription("");
  }, [selectedSubcategories, setDescription]);
  const { t } = useTranslation();
  const isOpen = !compare(
    selectedSubcategories,
    initialState.selectedSubcategories
  );
  return (
    <Accordion isOpen={isOpen}>
      <div className={styles.flexContainer}>
        {/* <div className={styles.flexColumn}>
          <div className={styles.subtitle}>{t("uploadYourProject")}</div>
        </div> */}
        <div className={styles.flexColumn}>
          <div className={styles.subtitle}>{t("addDescription")}</div>
        </div>
      </div>
      <div className={styles.flexContainer}>
        {/* <div className={styles.flexColumn}>
          <FileUploader name="file" types={fileTypes}>
            <div className={styles.uploaderWrapper}>
              <div className={styles.uploaderText}>
                <span className={styles.uploaderSpan}>
                  <img src={Clip} alt="" className={styles.uploaderImage} />
                </span>{" "}
                {t("attachFile")}
              </div>
              <div className={styles.uploaderText}>{t("dropProject")}</div>
            </div>
          </FileUploader>
        </div> */}
        <div className={styles.flexColumn}>
          <Input
            placeholder={t("projectDescrPlaveholder")}
            type="textarea"
            inputClass={styles.textarea}
            initialValue={projectDescription}
            onChange={(value) => setDescription(value)}
          />
        </div>
      </div>
    </Accordion>
  );
};

const MSTP = ({ selectedSubcategories, projectDescription }: StateType) => ({
  selectedSubcategories,
  projectDescription,
});

const MDTP = { setDescription };

export default connect(MSTP, MDTP)(ProjectUploadAccordion);
