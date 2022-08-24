import { Card, Skeleton, Avatar } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { FC } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import style from "./index.module.scss";
import { useDispatch } from "react-redux";
import { deleteUserAsync } from "../../store/slice/userCard/asyncActions";

interface CardComponentProps {
  user: any;
  isLoading: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setClickedUserId: React.Dispatch<React.SetStateAction<undefined>>;
}

const CardComponent: FC<CardComponentProps> = ({
  user,
  isLoading,
  setIsModalVisible,
  setClickedUserId,
}) => {
  const dispatch = useDispatch<any>()
  const showEditCard = () => {
    setIsModalVisible(true);
    setClickedUserId(user.id);
  };

  const deleteUser = () => {
    dispatch(deleteUserAsync(user.id))
  };

  return (
    <div>
      <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <EditOutlined key="edit" onClick={showEditCard} />,
          <DeleteOutlined key="delete" className={style.deleteBtn} onClick={deleteUser} />,
        ]}
      >
        <Skeleton loading={isLoading} avatar active>
          <Meta
            avatar={<Avatar src={user.logo} />}
            title={user.name}
            description={user.description}
          />
        </Skeleton>
      </Card>
    </div>
  );
};

export default CardComponent;
