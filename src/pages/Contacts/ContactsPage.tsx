import React, { Suspense, useEffect, useState } from "react";
import AddCard from "../../components/AddCard/AddCard";
import EditCard from "../../components/EditCard/EditCard";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Header from "../../shared/ui/Header/Header";
import Loader from "../../shared/ui/Loader/Loader";
import { getUserInfoAsync } from "../../store/slice/userCard/asyncActions";
import { getUserInfo } from "../../store/slice/userCard/selectors";
import { getUsersAsync } from "../../store/slice/users/asyncActions";
import {
  getUsersLoadingStatusSelector,
  getUsersSelector,
} from "../../store/slice/users/selectors";
import style from "./index.module.scss";

const CardComponent = React.lazy(
  () => import("../../components/CardComponent/CardComponent")
);

const ContactsPage = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(getUsersSelector);
  const userInfo = useAppSelector(getUserInfo);
  const isLoading = useAppSelector(getUsersLoadingStatusSelector);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [clickedUserId, setClickedUserId] = useState<number>(0);

  useEffect(() => {
    dispatch(getUsersAsync());
  }, []);

  useEffect(() => {
    if (clickedUserId) {
      dispatch(getUserInfoAsync(clickedUserId));
    }
  }, [clickedUserId]);

  return (
    <div className={style.contacts}>
      <Header />
      <AddCard
        isModalVisible={isAddModalVisible}
        setIsModalVisible={setIsAddModalVisible}
      />
      <div className={style.contactsContainer}>
        <div className={style.flexWrapper}>
          <Suspense fallback={<Loader />}>
            {users?.map((user, user_id) => {
              return (
                <CardComponent
                  key={user_id}
                  user={user}
                  isLoading={isLoading}
                  setIsModalVisible={setIsEditModalVisible}
                  setClickedUserId={setClickedUserId}
                />
              );
            })}
          </Suspense>
          <EditCard
            isModalVisible={isEditModalVisible}
            setIsModalVisible={setIsEditModalVisible}
            userInfo={userInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
