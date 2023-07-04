import React from 'react';
import NotificationItem, { NotificationItemProps } from './NotificationItem';

interface NotificationProps {
  title: string;
  listNotification: object;
}

const Notification = ({ title, listNotification }: NotificationProps) => {
  return (
    <>
      <div className="bg-zinc-300 dark:bg-zinc-950 px-5 py-2 text-s text-zinc-500 dark:text-zinc-400">
        {title}
      </div>
      <div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
        {Object.values(listNotification).map(
          (value: NotificationItemProps, index) => (
            <NotificationItem
              key={index}
              text={value.text}
              category={value.category}
              time={value.time}
              hasButtons={value.hasButtons}
            />
          ),
        )}
      </div>
    </>
  );
};

export default Notification;
