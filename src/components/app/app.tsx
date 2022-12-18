import React, { useEffect } from "react";
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
  TermsAndConditions,
} from "../pages";
// import { getCookie, setCookie } from "helpers";
// import Api from "api";
import { StateType } from "ducks/types";
import styles from "./app.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const App: React.FC<StateProps & DispatchProps> = ({ modal, viewerImage }) => {
  // useEffect(() => {
  //   const username = process.env.USERNAME as string;
  //   if (!getCookie("currentUser") || !getCookie(username)) {
  //     const password = process.env.PASSWORD as string;
  //     Api.post(
  //       "/token",
  //       {
  //         username,
  //         password,
  //       },
  //       "form"
  //     ).then(
  //       (response) => {
  //         if (response.status === 200 && response.data?.access_token) {
  //           setCookie(username, response.data?.access_token || "", "1");
  //           setCookie("currentUser", username, "1");
  //         }
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   }
  // }, []);

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
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path={`project/:projectId`} element={<ProjectPage />} />
          {allCategories.map((category) => (
            <Route
              key={category}
              path={`/${category}`}
              element={<CategoryPage type={category} />}
            ></Route>
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
