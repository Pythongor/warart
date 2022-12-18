import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { StateType } from "ducks/types";
import { Link, useNavigate } from "react-router-dom";
import { setModal } from "ducks/actions";
import styles from "../header.module.scss";

type OwnProps = {
  closeCallback: () => void;
};

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

type LinkType = { text: string; action: () => void; to?: string };

const Links: React.FC<OwnProps & StateProps & DispatchProps> = ({
  isLoggedIn,
  setModal,
  closeCallback,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const links: LinkType[] = [
    { text: t("home"), to: "/", action: closeCallback },
    {
      text: t("submission"),
      action: () => {
        closeCallback();
        // if (!isLoggedIn) {
        //   navigate("/?next=submission");
        //   setModal("LOGIN");
        // } else {
        navigate("/submission#submitTitle");
        // }
      },
    },
    {
      text: t("about"),
      to: "/about",
      action: () => closeCallback(),
    },
  ];

  return (
    <div className={styles.links}>
      {links.map(({ text, action, to }) => {
        if (to) {
          return (
            <Link to={to} className={styles.link} key={text} onClick={action}>
              {text}
            </Link>
          );
        }
        return (
          <div className={styles.link} onClick={action} key={text}>
            {text}
          </div>
        );
      })}
    </div>
  );
};

const MSTP = ({ isLoggedIn }: StateType) => ({
  isLoggedIn,
});

const MDTP = { setModal };

export default connect(MSTP, MDTP)(Links);
