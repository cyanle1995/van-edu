import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppHeader from "components/appHeader/AppHeader";
import NotificationProvider from "use-toast-notification";
import Loading from "components/loading/Loading";
import "./App.css";

const Home = lazy(() => import("./pages/home/Home"));
const Intro = lazy(() => import("./pages/intro/Intro"));
const Group = lazy(() => import("./pages/group/Group"));
const Course = lazy(() => import("./pages/course/Course"));
const Topic = lazy(() => import("./pages/topic/Topic"));
const Login = lazy(() => import("./pages/login/Login"));

const App = () => {
  const userInfoString = localStorage.getItem("USER_INFO");
  const [isAuthen, setIsAuthen] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    setIsAuthen(!!userInfoString);
    if (userInfoString) {
      setUserInfo(JSON.parse(userInfoString));
    }
  }, [userInfoString]);
  return (
    <div className="App">
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
                <Route path="/course" exact component={() => <Course />} />
                <Route path="/home" exact component={() => <Home />} />
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
                </Switch>
              </div>
            </Suspense>
          )}
        </Router>
      </NotificationProvider>
    </div>
  );
};

export default App;
