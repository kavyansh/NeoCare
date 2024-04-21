import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
