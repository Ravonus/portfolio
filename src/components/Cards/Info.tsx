import React, { FC, useEffect } from "react";

interface CardProps {
  title: string;
  activeText: string | number;
  active?: boolean;
  inactiveText?: string;
  activeTextClass?: string;
  inactiveTextClass?: string;
}

const Card: FC<CardProps> = ({
  title,
  activeText,
  active,
  inactiveText,
  activeTextClass,
  inactiveTextClass,
}) => {
  if (!activeTextClass) activeTextClass = "font-bold text-gray-700";
  if (!inactiveTextClass) inactiveTextClass = "font-bold text-gray-800";

  if (typeof active === "undefined") active = true;

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 bg-white mx-2 border-2 rounded-lg border-gray-300">
      <div className="px-6 py-4">
        <div className="font-semibold text-md mb-2 text-center text-gray-400">
          {title}
        </div>
        <p className={active ? activeTextClass : inactiveTextClass}>
          {active ? activeText : inactiveText}
        </p>
      </div>
    </div>
  );
};

export default Card;
