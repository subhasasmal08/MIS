"use client";
import React, { useEffect, useState } from "react";
import "./inputbox.scss";
import { eyeoffIcon, eyeonIcon } from "@/helper/icon";
export default function InputBox(props) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const toggleIcon = () => {
    setSecureTextEntry(!secureTextEntry); //false
    props.typeValue(secureTextEntry);
  };

  const renderPasswordAccessory = () => {
    let name = secureTextEntry ? eyeoffIcon : eyeonIcon;
    return name({ onClick: () => toggleIcon(), className: "icon-toggle" });
  };

  useEffect(() => {
    if (props?.error && props?.id) {
      var ele = document.querySelector("#" + props.id);
      ele?.classList.add("error_shake");
      setTimeout(function () {
        ele.classList.remove("error_shake");
      }, 300);
    }
  }, [props.error]);
  return (
    <div className="__input__" style={props.containerStyle}>
      {props.header && (
        <label req={props.required ? "*" : ""}>{props.header}</label>
      )}
      <input
        id={props.id}
        type={props.type ? props.type : "text"}
        className={props.error ? "input_style input__error" : "input_style"}
        onChange={props.onChange}
        autoFocus={props.autoFocus}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        minLength={props.minLength}
        onKeyDown={props.onKeyDown}
        ref={props.ref}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        onInput={props.onInput}
        disabled={props.disabled}
        style={{ marginTop: props.header ? "10px" : null, ...props.style }}
        onKeyUp={props.onKeyUp}
        title={props.value}
        autoComplete="new-password"
        autofill="off"
      />
      {props.helperText && <p className="helperText"> {props.helperText}</p>}
      {props.password && renderPasswordAccessory()}
      {props?.children}
    </div>
  );
}
