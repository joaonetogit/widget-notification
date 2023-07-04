import React from 'react';
import NotificationButton from './NotificationButton';

interface NotificationContentProps {
  text: string;
  category: string;
  time: string;
  hasButtons: boolean;
}

const NotificationContent = ({
  text,
  category,
  time,
  hasButtons,
}: NotificationContentProps) => {
  return (
    <>
      <div className="flex-1 flex flex-col gap-2">
        <p className=" text-sm leading-relaxed text-zinc-600 dark:text-zinc-100">
          {text}
        </p>
        <div className="text-xxs text-zinc-400 flex items-center gap-1">
          <span>{category}</span>
          <span>Há {time}</span>
        </div>
      </div>

      {hasButtons && <NotificationButton />}
    </>
  );
};

export default NotificationContent;
