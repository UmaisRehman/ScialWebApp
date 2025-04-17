import React from "react";
import Navbar from "./Components/Navbar";

import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  const hideLayoutPaths = ["/login", "/register"];
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      <div style={{ display: "flex" }}>
        
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
