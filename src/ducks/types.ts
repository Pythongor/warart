import { ActionType } from "typesafe-actions";
import { tags, getKeys } from "components/filter/tags";
import * as actions from "./actions";

export type LangType = "en" | "fr" | "uk";
export type ModalType =
  | "DONATE"
  | "DONATE_SUCCESS"
  | "SIGNUP"
  | "LOGIN"
  | "SUBMIT_SUCCESS"
  | "IN_DEVELOPMENT"
  | null;
export type ColorThemeType = "dark" | "light";
export type CategoriesType = Record<keyof typeof tags, boolean>;
// export type SubcategoriesType = {
//   textual: Record<keyof typeof tags.textual, boolean>;
//   visual: Record<keyof typeof tags.visual, boolean>;
//   sound: Record<keyof typeof tags.sound, boolean>;
// };
export type SubcategoriesType = {
  [key: string]: { [key: string]: boolean };
};
export type PartialSubcategoriesType = {
  textual?: Partial<Record<keyof typeof tags.textual, boolean>>;
  visual?: Partial<Record<keyof typeof tags.visual, boolean>>;
  sound?: Partial<Record<keyof typeof tags.sound, boolean>>;
};
// export type PartialSubcategoriesType = {
//   textual?: { string?: boolean };
//   visual?: { string?: boolean };
//   sound?: { string?: boolean };
// };

export type StateType = {
  token: string | null;
  modal: ModalType;
  language: LangType;
  isLoggedIn: boolean;
  colorTheme: ColorThemeType;
  projectName: string;
  adultContent: boolean;
  selectedCategories: CategoriesType;
  selectedSubcategories: SubcategoriesType;
  projectDescription: string;
  viewerImage: string | null;
};

export enum Actions {
  setToken = "SET_TOKEN",
  setModal = "SET_MODAL",
  setLanguage = "SET_LANGUAGE",
  setLoggedIn = "SET_LOGGED_IN",
  setColorTheme = "SET_COLOR_THEME",
  setProjectName = "SET_PROJECT_NAME",
  setAdultContent = "SET_ADULT_CONTENT",
  setCategories = "SET_SELECTED_CATEGORIES",
  setSubcategories = "SET_SELECTED_SUBCATEGORIES",
  setDescription = "SET_PROJECT_DESCRIPTION",
  setViewerImage = "SET_VIEWER_IMAGE",
}

export type RootActionType = ActionType<typeof actions>;
