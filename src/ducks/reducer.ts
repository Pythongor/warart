import { createReducer } from "typesafe-actions";
import { RootActionType, StateType } from "./types";
import {
  setToken,
  setLanguage,
  setModal,
  setLoggedIn,
  setColorTheme,
  setAdultContent,
  setProjectName,
  setCategories,
  setSubcategories,
  setDescription,
  setViewerImage,
  setCurrentProject,
  setTotalProjects,
} from "./actions";

export const initialState: Readonly<StateType> = {
  token: null,
  language: "en",
  modal: null,
  isLoggedIn: false,
  colorTheme: "dark",
  projectName: "",
  adultContent: false,
  selectedCategories: { textual: false, visual: false, sound: false },
  selectedSubcategories: {
    textual: { poetry: false, prose: false, publicistic: false, drama: false },
    visual: {
      handcraft: false,
      videoArt: false,
      photography: false,
      graphicArt: false,
    },
    sound: { music: false, audioBooks: false, podcast: false },
  },
  projectDescription: "",
  viewerImage: null,
  currentProject: null,
  totalProjects: null,
};

export default createReducer<StateType, RootActionType>(initialState)
  .handleAction(setToken, (state, { payload }) => ({
    ...state,
    token: payload,
  }))
  .handleAction(setLanguage, (state, { payload }) => ({
    ...state,
    language: payload,
  }))
  .handleAction(setModal, (state, { payload }) => {
    return { ...state, modal: payload };
  })
  .handleAction(setLoggedIn, (state, { payload }) => ({
    ...state,
    isLoggedIn: payload,
  }))
  .handleAction(setColorTheme, (state, { payload }) => ({
    ...state,
    colorTheme: payload,
  }))
  .handleAction(setProjectName, (state, { payload }) => ({
    ...state,
    projectName: payload,
  }))
  .handleAction(setAdultContent, (state, { payload }) => ({
    ...state,
    adultContent: payload,
  }))
  .handleAction(setCategories, (state, { payload }) => ({
    ...state,
    selectedCategories: { ...state.selectedCategories, ...payload },
  }))
  .handleAction(setSubcategories, (state, { payload }) => {
    const {
      textual: stateTextual,
      visual: stateVisual,
      sound: stateSound,
    } = state.selectedSubcategories;
    const { textual, visual, sound } = payload;
    return {
      ...state,
      selectedSubcategories: {
        textual: { ...stateTextual, ...textual },
        visual: { ...stateVisual, ...visual },
        sound: { ...stateSound, ...sound },
      },
    };
  })
  .handleAction(setDescription, (state, { payload }) => ({
    ...state,
    projectDescription: payload,
  }))
  .handleAction(setViewerImage, (state, { payload }) => ({
    ...state,
    viewerImage: payload,
  }))
  .handleAction(setCurrentProject, (state, { payload }) => ({
    ...state,
    currentProject: payload,
  }))
  .handleAction(setTotalProjects, (state, { payload }) => ({
    ...state,
    totalProjects: payload,
  }));
