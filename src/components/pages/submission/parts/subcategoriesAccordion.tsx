import React, { useEffect } from "react";
import { StateType } from "ducks/types";
import { connect } from "react-redux";
import { initialState } from "ducks/reducer";
import { setSubcategories } from "ducks/actions";
import { tags, getKeys } from "components/filter/tags";
import { useTranslation } from "react-i18next";
import { Accordion, Input } from "components/widgets";
import styles from "../submission.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const SubcategoriesAccordion: React.FC<StateProps & DispatchProps> = ({
  selectedCategories,
  selectedSubcategories,
  setSubcategories,
}) => {
  useEffect(() => {
    for (let category in selectedCategories) {
      const cat = category as keyof typeof selectedCategories;
      if (!selectedCategories[cat]) {
        setSubcategories({
          [category]: initialState.selectedSubcategories[category],
        });
      }
    }
  }, [selectedCategories, setSubcategories]);
  const { t } = useTranslation();
  const { textual, visual, sound } = selectedCategories;
  const categories = getKeys(tags);
  return (
    <Accordion isOpen={textual || visual || sound}>
      <div className={styles.subtitle}>{t("selectSubcategory")}</div>
      <div className={styles.flexContainer}>
        {categories.map((category) => {
          const subcategories: string[] = getKeys(tags[category]);
          const isCategorySelected = selectedCategories[category];
          return (
            <div className={styles.flexColumn} key={category}>
              {isCategorySelected &&
                subcategories.map((subcategory) => {
                  return (
                    <Input
                      key={subcategory}
                      name={
                        t(subcategory)[0].toUpperCase() +
                        t(subcategory).toLowerCase().slice(1)
                      }
                      onCheck={(value) => {
                        setSubcategories({
                          [category]: { [subcategory]: value },
                        });
                      }}
                      initialChecked={
                        selectedSubcategories[category][subcategory]
                      }
                      type="checkbox"
                    />
                  );
                })}
            </div>
          );
        })}
      </div>
    </Accordion>
  );
};

const MSTP = ({ selectedCategories, selectedSubcategories }: StateType) => ({
  selectedCategories,
  selectedSubcategories,
});

const MDTP = { setSubcategories };

export default connect(MSTP, MDTP)(SubcategoriesAccordion);
