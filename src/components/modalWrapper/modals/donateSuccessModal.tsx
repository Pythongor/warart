import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { StateType } from "ducks/types";
import { setModal } from "ducks/actions";
import { Button } from "components/widgets";
import Logo from "assets/images/logo.svg";
import LogoText from "assets/images/logoText.svg";
import styles from "../modals.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const DonateModal: React.FC<StateProps & DispatchProps> = ({
  modal,
  setModal,
}) => {
  const navigate = useNavigate();
  return modal === "DONATE_SUCCESS" ? (
    <div className={styles.container}>
      <img src={Logo} className={styles.logo} alt={"Warart Logo"} />
      <img src={LogoText} className={styles.logoText} alt={"Warart Logo"} />
      <h1 className={styles.title}>Thank you!</h1>
      <div className={styles.text}>Payment is processing.</div>
      <div className={styles.buttons}>
        <Button
          onClick={() => {
            setModal(null);
            navigate("/");
          }}
          text="Home"
          customClass={styles.button}
        />
        <Button
          onClick={() => setModal(null)}
          text="Back"
          customClass={styles.button}
          type="blue"
        />
      </div>
    </div>
  ) : null;
};

const MSTP = ({ modal }: StateType) => ({ modal });

const MDTP = { setModal };

export default connect(MSTP, MDTP)(DonateModal);
