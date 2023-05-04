import React from "react";
import AppName from "./components/AppName";

const Header = () => {
  return (
    <div className="h-16 bg-border flex justify-center shadow-xl items-center px-10 sticky top-0 z-10">
      <AppName />
    </div>
  );
};

export default Header;
