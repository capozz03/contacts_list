import React from 'react';
import { LoadingOutlined } from "@ant-design/icons";
import style from "./index.module.scss";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 32 }} spin />;

const Loader = () => {
  return (
    <div className={style.loader}><Spin indicator={antIcon} /></div>
  );
};

export default Loader;