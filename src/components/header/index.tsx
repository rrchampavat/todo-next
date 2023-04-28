import React from "react";
import AppName from "./components/AppName";

const Header = () => {
  return (
    <div className="h-20 bg-secondary flex justify-center shadow-xl items-center px-10">
      <AppName />
    </div>
  );
};

export default Header;
