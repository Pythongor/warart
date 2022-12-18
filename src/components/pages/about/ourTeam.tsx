import React from "react";
import { useTranslation } from "react-i18next";
import Liza from "assets/images/Liza.svg";
import Dimon from "assets/images/Dimon.svg";
import Yarik from "assets/images/Yarik.svg";
import Katya from "assets/images/Katya.svg";
import Diana from "assets/images/Diana.svg";
import Svistik from "assets/images/Svistunova.svg";
import Default from "assets/images/Olga.png";
import Coin from "assets/images/coin.svg";
import Hanna from "assets/images/Ingingerda.svg";
import styles from "./about.module.scss";

const members = [
  { name: "YelyzavetaDrach", role: "YelyzavetaRole", src: Liza },
  { name: "DmytroDrach", role: "DmytroRole", src: Dimon },
  { name: "KaterynaPylypchuk", role: "KaterynaRole", src: Katya },
  { name: "YaroslavYarosh", role: "YaroslavRole", src: Yarik },
  { name: "DianaDrach", role: "DianaRole", src: Diana },
  { name: "NastiaSvistunova", role: "AnastasiiaRole", src: Svistik },
  { name: "joinUs", role: "weAreWait", src: Hanna },
  { name: "joinUs", role: "weAreWait", src: Coin },
];

const contacts = [
  {
    firstName: "WAR",
    lastName: "ART",
    email: "warart.ua@gmail.com",
  },
  // {
  //   firstName: "Yelyzaveta",
  //   lastName: "Drach",
  //   email: "yelyzavetadrach@gmail.com",
  // },
  // {
  //   firstName: "Dmytro",
  //   lastName: "Drach",
  //   email: "pythongor@gmail.com",
  // },
];

const OurTeam = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.membersWrapper}>
        <div className={styles.members}>
          {members.map(({ name, role, src }, index) => (
            <div className={styles.member} key={index}>
              <img
                src={src || Default}
                alt={t(name)}
                className={styles.avatar}
              />
              <div className={styles.name}>{t(name)}</div>
              <div className={styles.role}>{t(role)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.title}>
        <span className={styles.bold}>{t("contactUsPart1")}</span>
        {t("contactUsPart2")}
      </div>
      <div className={styles.contactsContainer}>
        {contacts.map(({ firstName, lastName, email }) => (
          <div className={styles.contact} key={firstName + lastName}>
            <div className={styles.contactName}>
              {t(firstName)}
              <span className={styles.bold}>{t(lastName)}</span>
            </div>
            <div className={styles.contactEmail}>{email}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurTeam;
