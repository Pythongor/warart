import React from "react";
import { connect } from "react-redux";
import { StateType, ModalType } from "ducks/types";
import { setModal } from "ducks/actions";
import DonateModal from "./modals/donateModal";
import DonateSuccessModal from "./modals/donateSuccessModal";
import LoginModal from "./modals/loginModal";
import SignupModal from "./modals/signupModal";
import SubmitSuccessModal from "./modals/submitSuccessModal";
import InDevelopmentModal from "./modals/inDevelopmentModal";
import styles from "./modals.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;
type ModalElementsType = { [key in NonNullable<ModalType>]: React.ElementType };

const modalElements: ModalElementsType = {
  DONATE: DonateModal,
  DONATE_SUCCESS: DonateSuccessModal,
  LOGIN: LoginModal,
  SIGNUP: SignupModal,
  SUBMIT_SUCCESS: SubmitSuccessModal,
  IN_DEVELOPMENT: InDevelopmentModal,
};

const ModalWrapper: React.FC<StateProps & DispatchProps> = ({
  modal,
  setModal,
}) => {
  if (modal) {
    const Element = modalElements[modal];
    return (
      <>
        <div
          className={styles.modalWrapper}
          onClick={() => setModal(null)}
        ></div>
        <div className={styles.container}>
          <Element />
        </div>
      </>
    );
  }
  return null;
};

const MSTP = ({ modal }: StateType) => ({ modal });
const MDTP = { setModal };

export default connect(MSTP, MDTP)(ModalWrapper);
