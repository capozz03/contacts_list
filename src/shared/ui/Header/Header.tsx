import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../store/slice/userAuth/slice";
import style from "./index.module.scss";

const Header = () => {
  const dispatch = useDispatch<any>();
  const onClick = (e: any) => {
    e.preventDefault();
    dispatch(logoutUser());
  };
  return (
    <div className={style.header}>
      <div className={style.headerLogo}>Список контактов</div>
      <Button className={style.exitBtn} type="primary" onClick={onClick}>
        Выход
      </Button>
    </div>
  );
};

export default Header;
