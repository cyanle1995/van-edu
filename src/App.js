import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppHeader from "components/appHeader/AppHeader";
import NotificationProvider from "use-toast-notification";
import Loading from "components/loading/Loading";
import "./App.css";
import { GG_WEB_CLIENT_ID } from "constants/Constants";
import { GoogleOAuthProvider } from '@react-oauth/google';

const Home = lazy(() => import("./pages/home/Home"));
const Intro = lazy(() => import("./pages/intro/Intro"));
const Group = lazy(() => import("./pages/group/Group"));
const Course = lazy(() => import("./pages/course/Course"));
const Topic = lazy(() => import("./pages/topic/Topic"));
const Lesson = lazy(() => import("./pages/lesson/Lesson"));
const LessonDetail = lazy(() => import("./pages/lessonDetail/LessonDetail"));
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
                <div>
                  <Switch>
                    <Route path="/login" exact component={() => <Login />} />
                    <Route path="/" exact component={() => <Intro />} />
                    <Route path="/group" exact component={() => <Group />} />
                    <Route path="/course" exact component={() => <Course />} />
                    <Route path="/topic" exact component={() => <Topic />} />
                    <Route path="/lesson" exact component={() => <Lesson />} />
                    <Route path="/lesson-detail" exact component={() => <LessonDetail />} />
                  </Switch>
                </div>
              </Suspense>
            )}
          </Router>
        </NotificationProvider>
      </GoogleOAuthProvider>
    </div>
  );
};

export default App;
