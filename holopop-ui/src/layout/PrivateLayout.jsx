import React from "react";
import NavBarMain from "../pages/dasboard/navBar/Navbar";
import HeaderSection from "../pages/dasboard/header/HeaderSection";

const PrivateLayout = ({ children }) => {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <div
        style={{
          width: "310px",
          backgroundColor: "#f4f4f4",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavBarMain />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <header style={{ height: "60px", backgroundColor: "#ddd" }}>
          <HeaderSection />
        </header>
        <main
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px",
            backgroundColor: "#fff",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;
