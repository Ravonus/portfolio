import React, { FC, useEffect } from "react";

interface InputProps {
  validate?: boolean;
  validateString?: string;
  id: string;
  disabled?: boolean;
  name?: string;
  info?: string;
  type?:
    | "text"
    | "number"
    | "textarea"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "time"
    | "url"
    | "week";
  label: string;
  value?: any;
  onChange?(event: any): void;
  onBlur?(event?: any): void;
}

const Input: FC<InputProps> = ({
  disabled,
  info,
  onChange,
  onBlur,
  type,
  validate,
  validateString,
  id,
  label,
  value,
}) => {
  return (
    <div className="md-input-main py-2">
      <div className="md-input-box">
        <input
          id={id}
          name={id}
          type={type}
          className="md-input bg-transparent"
          placeholder=" "
        />
        <label htmlFor={id} className="md-label text-gray-300 font-sans">
          {label}
        </label>
        <div className="md-input-underline" />
      </div>
    </div>
  );
};

export default Input;
