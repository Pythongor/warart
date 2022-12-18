import React, { useEffect, useRef } from "react";
import cn from "classnames";
import { getMailtoRef } from "ducks/selectors";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { setModal } from "ducks/actions";
import { StateType } from "ducks/types";
import { Button } from "components/widgets";
import {
  CategoriesAccordion,
  SubcategoriesAccordion,
  // TagsAccordion,
  ProjectSettingsAccordion,
  ProjectUploadAccordion,
  SubmissionSection,
} from "./parts";
import styles from "./submission.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const Submission: React.FC<StateProps & DispatchProps> = ({
  setModal,
  projectDescription,
  mailtoRef,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { hash } = useLocation();
  const anchorRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (hash === "#submitTitle" && anchorRef.current) {
      anchorRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash, anchorRef]);
  return (
    <div className={styles.wrapper}>
      <SubmissionSection />
      <a className={styles.anchor} id="submitTitle" ref={anchorRef}></a>
      <h2 className={styles.title}>
        {t("submitYour")}
        <span className={styles.bold}> {t("project").toLocaleUpperCase()}</span>
      </h2>
      <ProjectSettingsAccordion />
      <CategoriesAccordion />
      <SubcategoriesAccordion />
      {/* <TagsAccordion /> */}
      <ProjectUploadAccordion />
      <div className={styles.buttons}>
        <Button text={t("back")} type="blue" onClick={() => navigate(-1)} />
        <Button
          text={t("submit")}
          onClick={() => {
            if (projectDescription) window.location.href = mailtoRef;
          }}
          customClass={cn({ [styles.disabled]: !projectDescription })}
        />
      </div>
    </div>
  );
};

const MSTP = (state: StateType) => {
  const { projectDescription } = state;
  const mailtoRef = getMailtoRef(state);
  return {
    projectDescription,
    mailtoRef,
  };
};

const MDTP = { setModal };

export default connect(MSTP, MDTP)(Submission);
