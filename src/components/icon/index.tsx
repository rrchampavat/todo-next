import React from "react";
import * as icons from "lucide-react";

const Icon = (props: Button) => {
  const {
    name,
    color = "black",
    size,
    strokeWidth,
    className,
    handleClick,
  } = props;
  //   @ts-expect-error
  const LucideIcon = icons[name];

  return (
    <div className={className} onClick={handleClick}>
      <LucideIcon color={color} size={size} strokeWidth={strokeWidth} />
    </div>
  );
};

export default Icon;
