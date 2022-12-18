import React from "react";
import { connect } from "react-redux";
import { setModal } from "ducks/actions";
// import { Button } from "components/widgets";
// import styles from "../header.module.scss";

type DispatchProps = typeof MDTP;

const AuthButtons: React.FC<DispatchProps> = ({ setModal }) => (
  <>
    {/* <Button
      customClass={styles.authButton}
      text="Log in"
      onClick={() => setModal("LOGIN")}
      type="blue"
    />
    <Button
      customClass={styles.authButton}
      text="Sign up"
      onClick={() => setModal("SIGNUP")}
    /> */}
  </>
);

const MDTP = { setModal };

export default connect(null, MDTP)(AuthButtons);
