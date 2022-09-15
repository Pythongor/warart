import React from "react";
import { connect } from "react-redux";
import cn from "classnames";
// import { LoginForm } from "..";
import { useTranslation } from "react-i18next";
import { setModal } from "ducks/actions";
import { useNavigate } from "react-router-dom";
import { StateType } from "ducks/types";
import FacebookLogo from "assets/images/facebook.svg";
import InstagrammLogo from "assets/images/instagramm.svg";
import LinkedinLogo from "assets/images/linkedin.svg";
import styles from "./footer.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const links = [
  {
    title: "about",
    sublinks: [
      {
        name: "contactUs",
        reference:
          "mailto:warart.ua@gmail.com?subject=WARART&body=contactUsBody",
      },
      { name: "ourTeam", reference: "/about" },
      {
        name: "joinUs",
        reference:
          "mailto:warart.ua@gmail.com?subject=joinUsSubject&body=joinUsBody",
      },
    ],
  },
  {
    title: "services",
    sublinks: [
      { name: "partners", reference: null },
      { name: "donations", reference: null },
      { name: "submitYourWork", reference: "/submission" },
    ],
  },
  {
    title: "legal",
    sublinks: [
      { name: "terms", reference: null },
      { name: "privacy", reference: null },
      {
        name: "help",
        reference: "mailto:warart.ua@gmail.com?subject=helpSubject&body=",
      },
    ],
  },
  {
    title: "art",
    sublinks: [
      { name: "viewCategories", reference: "/#categories" },
      { name: "aboutOurArtists", reference: null },
      { name: "childrenAndWar", reference: null },
    ],
  },
];

const followLinks = [
  {
    src: LinkedinLogo,
    reference: "https://www.linkedin.com/company/warart/",
    alt: "linkedin",
  },
  {
    src: FacebookLogo,
    reference: "https://www.facebook.com/warart.ua",
    alt: "facebook",
  },
  {
    src: InstagrammLogo,
    reference: "https://www.instagram.com/warart.ua/",
    alt: "instagramm",
  },
];

const Footer: React.FC<StateProps & DispatchProps> = ({ setModal }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map(({ title, sublinks }) => (
          <div className={styles.section} key={title}>
            <h2 className={styles.sectionTitle}>{t(title)}</h2>
            {sublinks.map(({ name, reference }) => (
              // <Link className={styles.link} to={reference} key={name}>
              //   {t(name)}
              // </Link>
              <div
                className={cn(styles.link, {
                  [styles.link__notAllowed]: !reference,
                })}
                key={name}
                onClick={() => {
                  if (!reference) {
                    setModal("IN_DEVELOPMENT");
                  } else if (reference.startsWith("/")) {
                    navigate(reference);
                  } else if (reference.startsWith("mailto")) {
                    const [, mailToSubject, mailToBody] = reference.split(
                      /^.+\?subject=(.*)&body=(.*)$/
                    );
                    const mailToRef = reference
                      .replace(mailToSubject, t(mailToSubject))
                      .replace(mailToBody, t(mailToBody));
                    window.location.href = mailToRef;
                  }
                }}
              >
                {t(name)}
              </div>
            ))}
          </div>
        ))}
        <div className={styles.followOuterWrapper}>
          <div className={styles.followInnerWrapper}>
            <div className={styles.followLinks}>
              {followLinks.map(({ src, reference, alt }) => (
                <a href={reference} key={alt}>
                  <img src={src} className={styles.followLink} alt={alt} />
                </a>
              ))}
            </div>
            <div
              className={styles.followText}
              onClick={() =>
                (window.location.href = "mailto:warart.ua@gmail.com")
              }
            >
              warart.ua@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MSTP = ({ token }: StateType) => ({ token });

const MDTP = { setModal };

export default connect(MSTP, MDTP)(Footer);
