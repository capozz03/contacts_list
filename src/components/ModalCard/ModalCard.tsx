import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Input, Modal } from "antd";
import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import { TUserCardInner, TUserInfo } from "../../store/slice/userCard/entities";
import style from "./index.module.scss";

const { Item } = Form;

interface ModalCardProps {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  onFinish: (value: TUserInfo) => void;
  userInfo: TUserCardInner | null;
  title: string;
  isAddModal?: boolean;
}

const ModalCard: FC<ModalCardProps> = ({
  isModalVisible,
  setIsModalVisible,
  onFinish,
  userInfo,
  title,
  isAddModal,
}) => {
  const [form] = Form.useForm();

  const handleCancel = () => {
    setIsModalVisible(false);
    if (!isAddModal) {
      form.setFieldsValue({
        name: userInfo?.name,
        description: userInfo?.description,
      });
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      name: userInfo?.name,
      description: userInfo?.description,
    });
  }, [form, userInfo]);

  return (
    <Modal
      title=""
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <div className={style.flexWrapper}>
        <Avatar
          className={style.avatar}
          size={80}
          src={userInfo && userInfo.logo}
          icon={isAddModal && <UserOutlined />}
        />
        <h3>{title}</h3>
      </div>

      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        form={form}
        onFinish={onFinish}
      >
        <Item
          label="Имя"
          name="name"
          initialValue={userInfo?.name}
          rules={[{ required: true, message: 'Имя не может быть пустым' }]}
          shouldUpdate
        >
          <Input value={userInfo?.name} />
        </Item>
        <Item
          label="Статус"
          name="description"
          initialValue={userInfo?.description}
        >
          <Input value={userInfo?.description} />
        </Item>
        <div className={style.btns}>
          <Item>
            <Button type="primary" htmlType="submit">
              Сохранить изменения
            </Button>
          </Item>
          <Item>
            <Button onClick={handleCancel}>Отмена</Button>
          </Item>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalCard;
