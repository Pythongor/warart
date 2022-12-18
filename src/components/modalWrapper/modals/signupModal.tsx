import React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useQuery } from "hooks";
import { connect } from "react-redux";
import { StateType } from "ducks/types";
import { setModal, setLoggedIn } from "ducks/actions";
import { Button } from "components/widgets";
import { Input } from "components/widgets";
import Logo from "assets/images/logo.svg";
import LogoText from "assets/images/logoText.svg";
import FacebookLogo from "assets/images/facebook-color.svg";
import GoogleLogo from "assets/images/google.svg";
import styles from "../modals.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const SignupModal: React.FC<StateProps & DispatchProps> = ({
  modal,
  setModal,
  setLoggedIn,
}) => {
  const query = useQuery();
  const next = query.get("next");
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  return modal === "SIGNUP" ? (
    <div className={styles.container}>
      <img src={Logo} className={styles.logo} alt={"Warart Logo"} />
      <img src={LogoText} className={styles.logoText} alt={"Warart Logo"} />
      <form
        action=""
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          setModal(null);
        }}
      >
        <Input name={t("fullName")} />
        <Input name={t("email")} />
        <Input name={t("password")} type="password" />
        <div className={styles.buttons}>
          <Button
            onClick={() => setModal("LOGIN")}
            text={t("login")}
            customClass={styles.button}
            type="blue"
          />
          <Button
            onClick={() => {
              setLoggedIn(true);
              setModal(null);
              next && navigate(`/${next}`);
            }}
            text={t("signup")}
            customClass={styles.button}
          />
        </div>
        <div
          className={cn(styles.divider, styles[`divider__${i18n.language}`])}
        />
        <button className={styles.socialAuth} type="button">
          <img
            src={FacebookLogo}
            className={styles.socialAuth_logo}
            alt={"Facebook Logo"}
          />
          {t("signupWithFB")}
        </button>
        <button className={styles.socialAuth} type="button">
          <img
            src={GoogleLogo}
            className={cn(
              styles.socialAuth_logo,
              styles.socialAuth_logo__google
            )}
            alt={"Google Logo"}
          />
          {t("signupWithGoogle")}
        </button>
      </form>
    </div>
  ) : null;
};

const MSTP = ({ modal }: StateType) => ({ modal });

const MDTP = { setModal, setLoggedIn };

export default connect(MSTP, MDTP)(SignupModal);
