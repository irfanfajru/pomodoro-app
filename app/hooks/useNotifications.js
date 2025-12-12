"use client";

import { useEffect, useState } from "react";

export function useNotifications() {
  const [isGranted, setIsGranted] = useState(false);

  const sendNotification = (title, message) => {
    if (isGranted) {
      const notification = new Notification(title, {
        body: message,
        icon: "alarm.jpg",
      });

      notification.onclick = function () {
        window.focus();
      };

      setTimeout(() => {
        notification.close();
      }, 5000);
    }
  };

  useEffect(() => {
    if (Notification.permission === "granted") {
      setIsGranted(true);
    }

    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          setIsGranted(true);
        }
      });
    }
  }, []);

  return { isGranted, sendNotification };
}
