import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function LinkItem({
  children,
  toPath,
}: {
  children: React.ReactElement | string;
  toPath: string;
}) {
  const location = useLocation();
  const isActive =
    location.pathname === toPath ||
    (location.pathname === "/" && toPath === "/home");

  return (
    <li className="relative">
      <NavLink to={toPath}>{children}</NavLink>
      {isActive && (
        <span className="bg-primary-orange w-full h-[3px] absolute bottom-[-54px] left-0" />
      )}
    </li>
  );
}

export default function Navbar() {
  return (
    <ul className="flex font-primary gap-6 font-normal text-base w-[741px] justify-center items-center">
      <LinkItem toPath="/home">Home</LinkItem>
      <LinkItem toPath="/about-us">About Us</LinkItem>
      <LinkItem toPath="/services">Services</LinkItem>
      <LinkItem toPath="/patient">Patient</LinkItem>
      <LinkItem toPath="/blog">Blog</LinkItem>
      <LinkItem toPath="/courses">Courses</LinkItem>
      <LinkItem toPath="/research">Research</LinkItem>
      <LinkItem toPath="/contact-us">Contact Us</LinkItem>
    </ul>
  );
}
