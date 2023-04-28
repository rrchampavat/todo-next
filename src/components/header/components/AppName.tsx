import Link from "next/link";
import React from "react";

const AppName = () => {
  return (
    <Link
      className="font-sans text-xl font-medium text-[#F1F6F9] cursor-pointer"
      href="/"
    >
      Todo App
    </Link>
  );
};

export default AppName;
