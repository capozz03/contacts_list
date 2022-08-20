import { Button, Form, Input } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { userAuthAsync } from "../../store/slice/users/asyncActions";
import { getUserToken } from "../../store/slice/users/selectors";
import style from "./index.module.scss";

const { Item } = Form;
const { Password } = Input;

type TFormValues = {
  email: string;
  password: string;
};

const AuthPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const token = useSelector(getUserToken);
  
  const onFinish = ({ email, password }: TFormValues) => {
    console.log(email,password)
    dispatch(userAuthAsync({ email, password }));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <div className={style.authPage}>
      <header className={style.header}>
        <div className={style.headerLogo}>Список контактов</div>
      </header>
      <h3 className={style.authLogo}>Вход</h3>
      <div className={style.auth}>
        <Form
          name="auth"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Item
            name="email"
            rules={[{ required: true, message: "Логин обязателен" }]}
          >
            <Input className={style.formUsername} placeholder="Логин" />
          </Item>

          <Item
            name="password"
            rules={[{ required: true, message: "Пароль обязателен" }]}
          >
            <Password className={style.formPassword} placeholder="Пароль" />
          </Item>

          <Item>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Item>
        </Form>
      </div>
    </div>
  );
};

export default AuthPage;
