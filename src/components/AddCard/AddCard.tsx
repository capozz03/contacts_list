import { PlusOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import { addUserAsync } from "../../store/slice/userCard/asyncActions";
import { TUserInfo } from "../../store/slice/userCard/entities";
import { getUsersSearchAsync } from "../../store/slice/users/asyncActions";
import ModalCard from "../ModalCard/ModalCard";
import style from "./index.module.scss";

const { Search } = Input;

interface AddCardProps {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
}

const AddCard: FC<AddCardProps> = ({ isModalVisible, setIsModalVisible }) => {
  const dispatch = useDispatch<any>();

  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

  const onFinish = (userInfo: TUserInfo) => {
    dispatch(addUserAsync(userInfo));
    setIsModalVisible(false);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const showAddModalCard = () => {
    setIsModalVisible(true);
  };

  useEffect(() => {
    dispatch(getUsersSearchAsync(debouncedValue))
  }, [debouncedValue])

  return (
    <div className={style.container}>
      <div className={style.flexWrapper}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={showAddModalCard}
        >
          Добавить контакт
        </Button>
        <Input
          className={style.searchBox}
          placeholder="Начните вводить..."
          onChange={onChange}
        />
      </div>
      <ModalCard
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        onFinish={onFinish}
        userInfo={null}
        title="Добавление контакта"
        isAddModal
      />
    </div>
  );
};

export default AddCard;
