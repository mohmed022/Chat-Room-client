import { toast } from 'react-toastify';

export const notify = (msg, type) => {
    toast[type](msg, {
      position: "bottom-right",
      autoClose: type === "success" ? 5000 : 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };


  


export const showNotification = (notificationUsers) => {
  if (notificationUsers) {
    const Git_notification = notificationUsers[0]
    console.log("Git_notification" , Git_notification)
    setTimeout(() => {

      Git_notification?.user_name && toast.info(`User ${Git_notification?.user_name} ${Git_notification?.is_online ? "is_online" : "offline"}`);
    }, 1000);
  }
};

