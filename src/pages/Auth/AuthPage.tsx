import { Button, Form, Input } from "antd";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { openNotificationWithIcon } from "../../shared/helpers/notification";
import { userAuthAsync } from "../../store/slice/userAuth/asyncActions";
import { getUserToken } from "../../store/slice/userAuth/selectors";
import style from "./index.module.scss";

const { Item } = Form;
const { Password } = Input;

type TFormValues = {
  email: string;
  password: string;
};

const AuthPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector(getUserToken);

  const onFinish = ({ email, password }: TFormValues) => {
    dispatch(userAuthAsync({ email, password }));
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<TFormValues>) => {
    const errors = errorInfo.errorFields.map((err) => err.errors[0]);
    openNotificationWithIcon(
      "Ошибка авторизации",
      `${errors.map((err) => err)}`,
      "error"
    );
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [navigate, token]);

  return (
    <div className={style.authPage}>
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
