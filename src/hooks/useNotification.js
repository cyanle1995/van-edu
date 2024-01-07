import { useNotification } from "use-toast-notification";

const useNotify = () => {
  const notification = useNotification();
  const showToastSuccess = (message, title) => {
    notification.show({
      message: message,
      title: title || "Success",
      variant: "success",
    });
  };
  const showToastError = (message, title) => {
    notification.show({
      message: message,
      title: title || "Error",
      variant: "error",
    });
  };
  return {
    showToastSuccess,
    showToastError,
  };
};

export default useNotify;
