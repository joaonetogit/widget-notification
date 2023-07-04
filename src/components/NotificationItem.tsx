import { Rocket } from 'lucide-react';
import React from 'react';
import NotificationContent from './NotificationContent';

export interface NotificationItemProps {
  text: string;
  category: string;
  time: string;
  hasButtons: boolean;
}

const NotificationItem = ({
  text,
  category,
  time,
  hasButtons,
}: NotificationItemProps) => {
  return (
    <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-6">
      <Rocket className="w-6 h-6 text-violet-500 mt-3" />
      <NotificationContent
        text={text}
        category={category}
        time={time}
        hasButtons={hasButtons}
      />
    </div>
  );
};

export default NotificationItem;
