import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setModal } from "ducks/actions";
import { StateType } from "ducks/types";
import { Section, Categories } from "components";
// import { ReactComponent as Coin } from "assets/images/coin.svg";
import styles from "./home.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const Home: React.FC<StateProps & DispatchProps> = ({
  isLoggedIn,
  setModal,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { hash } = useLocation();
  const anchorRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (hash === "#categories" && anchorRef.current) {
      anchorRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash, anchorRef]);
  return (
    <div className={styles.wrapper}>
      <Section
        button={[
          { text: t("readMore"), action: "/about", type: "blue" },
          {
            text: t("submit"),
            action: () => {
              // if (!isLoggedIn) {
              //   navigate("/?next=submission");
              //   setModal("LOGIN");
              // } else {
              navigate("/submission");
              // }
            },
          },
        ]}
        // imageComponent={Coin}
        title={
          <>
            {t("aboutThis")} <span className={styles.bold}>{t("project")}</span>
          </>
        }
      >
        WAR<span className={styles.bold}>ART</span> {t("aboutArticle")}
      </Section>
      <a className={styles.anchor} id="submitTitle" ref={anchorRef}></a>
      <Categories />
    </div>
  );
};

const MSTP = ({ isLoggedIn }: StateType) => ({
  isLoggedIn,
});

const MDTP = { setModal };

export default connect(MSTP, MDTP)(Home);
