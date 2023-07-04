import React from 'react';

interface WidgetHeaderProps {
  title: string;
}

const WidgetHeader = ({ title }: WidgetHeaderProps) => {
  return (
    <div className=" bg-zinc-200 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
      <span className="font-bold ">{title}</span>
      <button className=" text-violet-500 font-bold text-xs hover:text-violet-400">
        MARCAR TODOS COMO VISTAS
      </button>
    </div>
  );
};

export default WidgetHeader;
