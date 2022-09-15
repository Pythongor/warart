import React from "react";
import "langService";
import cn from "classnames";
import { connect } from "react-redux";
import { allCategories } from "components/filter/tags";
import { Routes, Route } from "react-router-dom";
import {
  Banner,
  Header,
  Footer,
  Title,
  SubmissionBanner,
  ModalWrapper,
  ImageViewer,
} from "..";
import {
  HomePage,
  CategoryPage,
  AboutPage,
  ProjectPage,
  SubmissionPage,
} from "../pages";
import { StateType } from "ducks/types";
import styles from "./app.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const App: React.FC<StateProps & DispatchProps> = ({ modal, viewerImage }) => {
  return (
    <>
      <ModalWrapper />
      <ImageViewer />
      <div
        className={cn(styles.wrapper, {
          [styles.noScroll]: modal || viewerImage,
        })}
      >
        <Header />
        <Banner />
        <Title />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/submission" element={<SubmissionPage />} />
          {allCategories.map((category) => (
            <React.Fragment key={category}>
              <Route
                path={`/${category}`}
                element={<CategoryPage type={category} />}
              ></Route>
              <Route
                path={`${category}/:projectId`}
                element={<ProjectPage />}
              />
            </React.Fragment>
          ))}
          <Route path="*" element={<></>} />
        </Routes>
        <SubmissionBanner />
        <Footer />
      </div>
    </>
  );
};

const MSTP = ({ modal, viewerImage }: StateType) => ({ modal, viewerImage });

const MDTP = {};

export default connect(MSTP, MDTP)(App);
