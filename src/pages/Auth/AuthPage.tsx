import { Button, Form, Input } from "antd";
import React from "react";
import style from "./index.module.scss";

const { Item } = Form;
const { Password } = Input;

const AuthPage = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

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
            name="username"
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