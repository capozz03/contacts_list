import React from "react";
import AuthPage from "./pages/Auth/AuthPage";
import "./shared/assets/styles/index.scss";
import { useSelector, useDispatch } from "react-redux";
import { getUsersSelector } from "./store/slice/users/selectors";
import { Button } from "antd";
import { getUserInfoAsync } from "./store/slice/users/asyncActions";
import { AppRouter } from "./routing/AppRouter";

const App = () => {
  const users = useSelector(getUsersSelector);
  const dispatch = useDispatch<any>();

  const onClick = () => {
    dispatch(getUserInfoAsync());
    console.log(users);
  };

  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
