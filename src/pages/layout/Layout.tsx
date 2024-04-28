import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Header from "./Header";
import Home from "../home/Home";

export default function Layout() {
  return (
    <div className="w-dvw h-dvh">
      <Header />
      <Home />
      <Outlet />
    </div>
  );
}
