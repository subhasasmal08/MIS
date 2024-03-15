import React from "react";
import "./button.scss";
export default function Button({
  icon,
  name,
  bg = "transparent",
  className,
  disabled,
  onClick,
  style = {},
  id,
  onFocus,
  title = "",
}) {
  return (
    <button
      id={id}
      className={`btn_ ${className ?? ""}`}
      style={{ backgroundColor: bg, ...style }}
      disabled={disabled}
      onClick={!disabled && onClick}
      onFocus={onFocus}
      title={title}
    >
      <div style={{ display: "flex" }} className="btn_icon">
        {icon ?? ""}
      </div>
      <span className="btn_name">{name}</span>
    </button>
  );
}
