import React from "react";
import { connect } from "react-redux";
import { StateType } from "ducks/types";
import { setModal } from "ducks/actions";
import { Input, Button } from "components/widgets";
import Logo from "assets/images/logo.svg";
import LogoText from "assets/images/logoText.svg";
import styles from "../modals.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const DonateModal: React.FC<StateProps & DispatchProps> = ({
  modal,
  setModal,
}) => {
  return modal === "DONATE" ? (
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
        <Input name="Payment method" />
        <Input name="Placeholder name" />
        <Input name="Card number" type="number" />
        <div className={styles.inputGroup}>
          <Input name="MM/YY" type="number" />
          <Input name="CVC" type="number" />
        </div>
        <div className={styles.buttons}>
          <Button
            onClick={() => setModal(null)}
            text="Back"
            customClass={styles.button}
          />
          <Button
            onClick={() => setModal("DONATE_SUCCESS")}
            text="Donate"
            customClass={styles.button}
            type="blue"
          />
        </div>
      </form>
    </div>
  ) : null;
};

const MSTP = ({ modal }: StateType) => ({ modal });

const MDTP = { setModal };

export default connect(MSTP, MDTP)(DonateModal);
