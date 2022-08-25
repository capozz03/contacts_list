import { Card, Skeleton, Avatar } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { FC } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import style from "./index.module.scss";
import { deleteUserAsync } from "../../store/slice/userCard/asyncActions";
import { useAppDispatch } from "../../hooks/redux";
import { TUserData } from "../../store/slice/users/entities";

interface CardComponentProps {
  user: TUserData;
  isLoading: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setClickedUserId: React.Dispatch<React.SetStateAction<number>>;
}

const CardComponent: FC<CardComponentProps> = ({
  user,
  isLoading,
  setIsModalVisible,
  setClickedUserId,
}) => {
  const dispatch = useAppDispatch();
  const showEditCard = () => {
    setIsModalVisible(true);
    setClickedUserId(user.id);
  };

  const deleteUser = () => {
    dispatch(deleteUserAsync({ userId: user.id, userName: user.name }));
  };

  return (
    <div>
      <Card
        className={style.card}
        actions={[
          <EditOutlined key="edit" onClick={showEditCard} />,
          <DeleteOutlined
            key="delete"
            className={style.deleteBtn}
            onClick={deleteUser}
          />,
        ]}
      >
        <Skeleton loading={isLoading} avatar active>
          <Meta
            avatar={<Avatar src={user.logo} />}
            title={user.name}
            description={user.description ? user.description : "Нет статуса"}
          />
        </Skeleton>
      </Card>
    </div>
  );
};

export default CardComponent;
