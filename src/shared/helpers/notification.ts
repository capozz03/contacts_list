import { notification } from "antd";

type NotificationType = "success" | "error";

export const openNotificationWithIcon = (
  message: string,
  description: string,
  type: NotificationType
) => {
  notification[type]({
    message,
    description,
  });
};
