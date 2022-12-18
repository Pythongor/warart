import React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StateType } from "ducks/types";
import { Button } from "../widgets";
import { setModal } from "ducks/actions";
import styles from "./submissionBanner.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const SubmissionBanner: React.FC<StateProps & DispatchProps> = ({
  isLoggedIn,
  setModal,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { pathname } = useLocation();
  return pathname === "/submission" ? null : (
    <div className={styles.wrapper}>
      <div className={styles.picture} />
      <div className={styles.rightContent}>
        <div className={styles.text}>
          {t("submitBannerPart1")}{" "}
          <span
            className={cn(styles.bold, styles.link)}
            onClick={() => {
              // if (!isLoggedIn) {
              //   navigate("/?next=submission");
              //   setModal("LOGIN");
              // } else {
              navigate("/submission#submitTitle");
              // }
            }}
          >
            {t("submitBannerPart2")}
          </span>{" "}
          {t("submitBannerPart3")}
        </div>
        <Button
          text={t("submit")}
          onClick={() => {
            // if (!isLoggedIn) {
            //   navigate("/?next=submission");
            //   setModal("LOGIN");
            // } else {
            navigate("/submission");
            // }
          }}
        />
      </div>
    </div>
  );
};

const MSTP = ({ isLoggedIn }: StateType) => ({ isLoggedIn });

const MDTP = { setModal };

export default connect(MSTP, MDTP)(SubmissionBanner);
