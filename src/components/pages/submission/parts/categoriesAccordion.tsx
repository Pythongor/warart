import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StateType } from "ducks/types";
import { setCategories } from "ducks/actions";
import { tags, getKeys } from "components/filter/tags";
import { useTranslation } from "react-i18next";
import { Accordion, Input } from "components/widgets";
import styles from "../submission.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const CategoriesAccordion: React.FC<StateProps & DispatchProps> = ({
  projectName,
  selectedCategories,
  setCategories,
}) => {
  const categories = getKeys(tags);
  const { t } = useTranslation();
  useEffect(() => {
    if (!projectName)
      setCategories({ textual: false, visual: false, sound: false });
  }, [projectName, setCategories]);
  return (
    <Accordion isOpen={!!projectName}>
      <div className={styles.subtitle}>{t("selectCategory")}</div>
      <div className={styles.flexContainer}>
        {categories.map((category) => (
          <div className={styles.flexColumn} key={category}>
            <Input
              name={t(category)[0].toUpperCase() + t(category).slice(1)}
              type="checkbox"
              initialChecked={selectedCategories[category]}
              onCheck={(value) => setCategories({ [category]: value })}
            />
          </div>
        ))}
      </div>
    </Accordion>
  );
};

const MSTP = ({ projectName, selectedCategories }: StateType) => ({
  projectName,
  selectedCategories,
});

const MDTP = { setCategories };

export default connect(MSTP, MDTP)(CategoriesAccordion);
