import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppHeader from "components/appHeader/AppHeader";
import NotificationProvider from "use-toast-notification";
import Loading from "components/loading/Loading";
import "./App.css";

const Home = lazy(() => import("./pages/home/Home"));
const Pic = lazy(() => import("./pages/pic/Pic"));
const Group = lazy(() => import("./pages/group/Group"));
const Login = lazy(() => import("./pages/login/Login"));
const FacilityInformationList = lazy(() =>
  import("./pages/facilityInformationList/FacilityInformationList")
);
const FacilityInformation = lazy(() =>
  import("./pages/facilityInformation/FacilityInformation")
);
const DiaperType = lazy(() => import("./pages/diaperType/DiaperType"));
const Device = lazy(() => import("./pages/device/Device"));
const User = lazy(() => import("./pages/user/User"));
const Password = lazy(() => import("./pages/password/Password"));

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
                <Route path="/password" exact component={() => <Password />} />
              </Switch>
            </Suspense>
          ) : (
            <Suspense fallback={<Loading />}>
              <AppHeader />
              <div style={{ paddingLeft: "20px" }}>
                <Switch>
                  <Route path="/" exact component={() => <Home />} />
                  <Route path="/pic" exact component={() => <Pic />} />
                  <Route path="/group" exact component={() => <Group />} />
                  <Route
                    path="/master-setting/facility"
                    exact
                    component={() =>
                      userInfo.userId === "admin" ? (
                        <FacilityInformationList />
                      ) : (
                        <FacilityInformation />
                      )
                    }
                  />
                  <Route
                    path="/master-setting/diaper-type"
                    exact
                    component={() => <DiaperType />}
                  />
                  <Route
                    path="/master-setting/device"
                    exact
                    component={() => <Device />}
                  />
                  <Route
                    path="/master-setting/user"
                    exact
                    component={() => <User />}
                  />
                  <Route
                    path="/password"
                    exact
                    component={() => <Password />}
                  />
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
