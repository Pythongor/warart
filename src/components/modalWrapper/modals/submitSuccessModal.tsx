import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { StateType } from "ducks/types";
import { setModal } from "ducks/actions";
import { Button } from "components/widgets";
import Logo from "assets/images/logo.svg";
import LogoText from "assets/images/logoText.svg";
import styles from "../modals.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const SubmitSuccessModal: React.FC<StateProps & DispatchProps> = ({
  modal,
  setModal,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return modal === "SUBMIT_SUCCESS" ? (
    <div className={styles.container}>
      <img src={Logo} className={styles.logo} alt={"Warart Logo"} />
      <img src={LogoText} className={styles.logoText} alt={"Warart Logo"} />
      <h1 className={styles.title}>{t("thanksForSubmitTitle")}</h1>
      <div className={styles.text}>{t("thanksForSubmitText")}</div>
      <div className={styles.buttons}>
        <Button
          onClick={() => {
            setModal(null);
            navigate("/");
          }}
          text={t("home")}
          customClass={styles.button}
          type="blue"
        />
        <Button
          onClick={() => setModal(null)}
          text={t("back")}
          customClass={styles.button}
        />
      </div>
    </div>
  ) : null;
};

const MSTP = ({ modal }: StateType) => ({ modal });

const MDTP = { setModal };

export default connect(MSTP, MDTP)(SubmitSuccessModal);
