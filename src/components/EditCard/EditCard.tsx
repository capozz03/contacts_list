import React, { Dispatch, FC, SetStateAction } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { editUserInfoAsync } from "../../store/slice/userCard/asyncActions";
import { TUserCardInner, TUserInfo } from "../../store/slice/userCard/entities";
import ModalCard from "../ModalCard/ModalCard";

interface EditCardProps {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  userInfo: TUserCardInner | null;
}

const EditCard: FC<EditCardProps> = ({
  isModalVisible,
  setIsModalVisible,
  userInfo,
}) => {
  const dispatch = useAppDispatch();

  const onFinish = (editedUserInfo: TUserInfo) => {
    const userId = userInfo?.id;
    if (userId) {
      dispatch(editUserInfoAsync({ userId, editedUserInfo }));
      setIsModalVisible(false);
    }
  };

  return (
    <ModalCard
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      onFinish={onFinish}
      userInfo={userInfo}
      title="Редактирование контакта"
    />
  );
};

export default EditCard;
