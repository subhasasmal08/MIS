"use client";
import React, { useReducer, useState } from "react";
import "./register.scss";
import Image from "next/image";
import InputBox from "@/component/InputBox/InputBox";
import Button from "@/component/Button/Button";
import { useRouter } from "next/navigation";
import { handleFocus } from "@/helper/utils";
import signup from "../../../public/Assets/Images/signup.jpg"

export default function page() {
  const router = useRouter();
  const [loginCred, setLoginCred] = useState({
    email: "",
    password: "",
    name : ""
  });
  const postData = () => {
    let flag = [];
    if (loginCred.name === "") {
      flag.push("email");
    }
    if (loginCred.email === "") {
      flag.push("password");
    }
    if (loginCred.password === "") {
      flag.push("name");
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
          <Image className="image_" src={signup} />
        </div>
        <div className="page_rhs">
          <h2 className="create_tag">Create your account</h2>
          <div className="input_feilds">
          <InputBox
              id="name"
              placeholder="Enter your name here"
              header="Name"
              value={loginCred.name}
              onChange={(e) => {
                let _loginCred = { ...loginCred };
                _loginCred.name = e.target.value;
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
            name="Sign up"
            bg="#3A62FF"
            onClick={() => {
              postData();
            }}
          />
          <p className="sign_up_tag">
            Already have an account{" "}
            <span
              style={{
                color: "#3A62FF",
                fontWeight: "600",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                router.push("./login");
              }}
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
