import React from "react";
import { Button } from "components/widgets";
import styles from "./section.module.scss";

type ButtonType = {
  text: string;
  action: string | (() => void);
  type?: "yellow" | "blue";
};

type SectionType = {
  title: React.ReactNode;
  children: React.ReactNode;
  button?: ButtonType | ButtonType[];
  imageComponent?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

const Section: React.FC<SectionType> = ({
  title,
  children,
  button,
  imageComponent: ImageComponent,
}) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.text}>{children}</div>
          {Array.isArray(button) ? (
            <div className={styles.buttons}>
              {button.map((btn) => (
                <Button
                  link={
                    (typeof btn.action === "string" && btn.action) || undefined
                  }
                  onClick={
                    (typeof btn.action !== "string" && btn.action) || undefined
                  }
                  text={btn.text}
                  type={btn.type}
                  customClass={styles.button}
                  key={btn.text}
                />
              ))}
            </div>
          ) : (
            button && (
              <Button
                link={
                  (typeof button.action === "string" && button.action) ||
                  undefined
                }
                text={button.text}
                type={button.type}
                onClick={
                  (typeof button.action !== "string" && button.action) ||
                  undefined
                }
                customClass={styles.button}
              />
            )
          )}
        </div>
        {ImageComponent && (
          <div className={styles.imageWrapper}>
            <ImageComponent className={styles.image} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
