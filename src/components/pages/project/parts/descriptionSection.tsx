import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { setModal, setViewerImage } from "ducks/actions";
import { Section } from "components";
import styles from "../project.module.scss";

type OwnProps = {
  description: string;
};

const Project: React.FC<OwnProps> = ({ description }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Section
      button={[
        { text: t("home"), action: () => navigate("/"), type: "blue" },
        { text: t("donate"), action: () => setModal("IN_DEVELOPMENT") },
      ]}
      title={<span className={styles.bold}>{t("aboutAuthor")}</span>}
    >
      {description}
    </Section>
  );
};

const MDTP = { setModal, setViewerImage };

export default connect(null, MDTP)(Project);
