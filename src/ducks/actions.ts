import { createAction } from "typesafe-actions";
import {
  Actions,
  LangType,
  ModalType,
  ColorThemeType,
  CategoriesType,
  PartialSubcategoriesType,
} from "./types";
import { ProjectType } from "projects/types";

export const setToken = createAction(Actions.setToken)<string | null>();

export const setLanguage = createAction(Actions.setLanguage)<LangType>();

export const setModal = createAction(Actions.setModal)<ModalType>();

export const setLoggedIn = createAction(Actions.setLoggedIn)<boolean>();

export const setColorTheme = createAction(
  Actions.setColorTheme
)<ColorThemeType>();

export const setProjectName = createAction(Actions.setProjectName)<string>();

export const setAdultContent = createAction(Actions.setAdultContent)<boolean>();

export const setCategories = createAction(Actions.setCategories)<
  Partial<CategoriesType>
>();

export const setSubcategories = createAction(
  Actions.setSubcategories
)<PartialSubcategoriesType>();

export const setDescription = createAction(Actions.setDescription)<string>();

export const setViewerImage = createAction(Actions.setViewerImage)<
  string | null
>();

export const setCurrentProject = createAction(
  Actions.setCurrentProject
)<ProjectType | null>();

export const setTotalProjects = createAction(Actions.setTotalProjects)<
  number | null
>();
