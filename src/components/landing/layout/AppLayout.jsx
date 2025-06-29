// src/components/layout/AppLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
