import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotificationProvider from "use-toast-notification";
import Loading from "components/loading/Loading";
import "./App.css";
import { GG_WEB_CLIENT_ID } from "constants/Constants";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AppFooter from "components/appFooter/AppFooter";

const Home = lazy(() => import("./pages/home/Home"));
const Intro = lazy(() => import("./pages/intro/Intro"));
const Group = lazy(() => import("./pages/group/Group"));
const Course = lazy(() => import("./pages/course/Course"));
const Topic = lazy(() => import("./pages/topic/Topic"));
const Lesson = lazy(() => import("./pages/lesson/Lesson"));
const Account = lazy(() => import("./pages/account/Account"));
const LessonDetail = lazy(() => import("./pages/lessonDetail/LessonDetail"));
const Event = lazy(() => import("./pages/event/Event"));
const Login = lazy(() => import("./pages/login/Login"));

const App = () => {
  const userInfoString = localStorage.getItem("TOKEN");
  const [isAuthen, setIsAuthen] = useState(false);
  useEffect(() => {
    setIsAuthen(!!userInfoString);
  }, [userInfoString]);
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={GG_WEB_CLIENT_ID}>
        <NotificationProvider
          config={{
            position: "top-right",
            isCloseable: false,
            showTitle: true,
            showIcon: true,
            duration: 300,
          }}
          overrideStyles={{
            border: "2px solid red",
          }}
        >
          <Router>
            {!isAuthen ? (
              <Suspense fallback={<Loading />}>
                <Switch>
                  <Route path="/" exact component={() => <Login />} />
                  <Route path="/login" exact component={() => <Login />} />
                </Switch>
              </Suspense>
            ) : (
              <Suspense fallback={<Loading />}>
                {/* <AppHeader /> */}
                <div style={{paddingBottom: "97px"}}>
                  <Switch>
                    <Route path="/" exact component={() => <Intro />} />
                    <Route path="/login" exact component={() => <Login />} />
                    <Route path="/home" exact component={() => <Home />} />
                    <Route path="/account" exact component={() => <Account />} />
                    <Route path="/group" exact component={() => <Group />} />
                    <Route path="/course" exact component={() => <Course />} />
                    <Route path="/course/:courseId" exact component={() => <Topic />} />
                    <Route path="/course/:courseId/lesson/:lessonId" exact component={() => <Lesson />} />
                    <Route path="/course/:courseId/lesson/:lessonId/detail/:videoId" exact component={() => <LessonDetail />} />
                    <Route path="/event" exact component={() => <Event />} />
                  </Switch>
                </div>
                <AppFooter />
              </Suspense>
            )}
          </Router>
        </NotificationProvider>
      </GoogleOAuthProvider>
    </div>
  );
};

export default App;
