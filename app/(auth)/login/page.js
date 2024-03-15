"use client";
import React, { useReducer, useState } from "react";
import "./login.scss";
import login from "../../../public/Assets/Images/login.jpg";
import Image from "next/image";
import InputBox from "@/component/InputBox/InputBox";
import Button from "@/component/Button/Button";
import { useRouter } from "next/navigation";
import { handleFocus } from "@/helper/utils";

export default function page() {
  const router = useRouter();
  const [loginCred, setLoginCred] = useState({
    email: "",
    password: "",
  });
  const postData = () => {
    let flag = [];
    if (loginCred.email === "") {
      flag.push("email");
    }
    if (loginCred.password === "") {
      flag.push("password");
    }
    if (flag.length > 0) {
      console.log(flag);
      flag.map((item) => {
        let ele = document.getElementById(item);
        ele.style.border = "1px solid red";
      });
      console.log("error");
    } else router.push("/user");
    console.log("on login");
  };

  return (
    <div className="login_page">
      <div className="login_page_wrapper">
        <div className="page_lhs">
          <Image className="image_" src={login} />
        </div>
        <div className="page_rhs">
          <h2 className="welcome_tag">Welcome!</h2>
          <div className="input_feilds">
            <InputBox
              id="email"
              placeholder="Enter your email address here"
              header="Email Address/Username"
              value={loginCred.email}
              onChange={(e) => {
                let _loginCred = { ...loginCred };
                _loginCred.email = e.target.value;
                setLoginCred({ ..._loginCred });
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  postData();
                }
              }}
              onFocus={(e) => handleFocus(e.target.id)}
            />
            <InputBox
              id="password"
              placeholder="Enter your password here"
              header="Password"
              value={loginCred.password}
              onChange={(e) => {
                let _loginCred = { ...loginCred };
                _loginCred.password = e.target.value;
                setLoginCred({ ..._loginCred });
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  postData();
                }
              }}
              onFocus={(e) => handleFocus(e.target.id)}
            />
          </div>
          <Button
            name="Login"
            bg="#3A62FF"
            onClick={() => {
              postData();
            }}
          />
          <p className="sign_up_tag">
            Don't have an account{" "}
            <span
              style={{
                color: "#3A62FF",
                fontWeight: "600",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                router.push("./register");
              }}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
