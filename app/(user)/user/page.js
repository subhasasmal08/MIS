"use client";
import React, { useState } from "react";
import "./user.scss";

export default function page() {
  const [selectedTab, setSelectedTab] = useState("data1");
  return (
    <div className="user_page">
      <div className="user_tabs">
        {["data1", "data2", "data3"].map((item) => {
          return (
            <p
              style={{
                color: selectedTab === item ? "#000" : "#525866",
                backgroundColor: selectedTab === item ? "#fff" : "#F6F8FA",
              }}
              className="tab_name"
              onClick={() => setSelectedTab(item)}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div className="user_filters"></div>
      <div className="user_data_wrapper"></div>
    </div>
  );
}
