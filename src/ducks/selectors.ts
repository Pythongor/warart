import { StateType } from "./types";
import { getKeys } from "components/filter/tags";
import i18next from "i18next";

export const getMailtoRef = ({
  projectName,
  adultContent,
  selectedCategories,
  selectedSubcategories,
  projectDescription,
}: StateType) => {
  const { t } = i18next;
  const categories = Object.entries(selectedCategories)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .map((category) => t(category));

  const subcategories = getKeys(selectedSubcategories)
    .map((category) =>
      Object.entries(selectedSubcategories[category])
        .filter(([, value]) => value)
        .map(([key]) => key)
    )
    .flat()
    .map((subcategory) => t(subcategory));

  const email = "warart.ua@gmail.com";
  const subject = t("submittingProject");
  const reminder = t("dontForgetFile");
  const pn = `${t("projectName")}: ${projectName}`;
  const pd = `${t("projectDescription")}: ${projectDescription}`;
  const ac = adultContent ? "* includes adults content" : "";
  const c = `${t("categories")}:| -${categories.join("| - ")}`;
  const sc = `${t("subcategories")}:| -${subcategories.join("| - ")}`;
  const body = [reminder, pn, pd, ac, c, sc].join("|");
  const mailtoRef = `mailto:${email}?subject=${subject}&body=${body}`;
  return decodeURI(mailtoRef).replaceAll("|", "%0D%0A");
};
