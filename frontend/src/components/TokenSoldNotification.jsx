import React, { useState, useEffect } from "react";

const TokenSoldNotification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    console.log("TokenSoldNotification mounted");
    const interval = setInterval(() => {
      const newNotification = {
        id: Date.now(), // Unique ID for each notification
        message: "$SAB sold to  buyer!",
      };

      // Add the new notification
      setNotifications((prev) => [...prev, newNotification]);

      // Remove the notification after 5 seconds
      setTimeout(() => {
        setNotifications((prev) =>
          prev.filter((notification) => notification.id !== newNotification.id)
        );
      }, 10000); // Notification disappears after 5 seconds
    }, 30000); // 1 minute in milliseconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="fixed bottom-4 left-4 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="bg-blue-600 text-[18px] text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out"
        >
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default TokenSoldNotification;
