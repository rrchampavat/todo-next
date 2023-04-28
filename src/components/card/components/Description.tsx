import { Description } from "@/utils/types";
import React from "react";

import "./style.css";

const Description = (props: Description) => {
  const { desc } = props;
  return <div className="mt-5 description">{desc}</div>;
};

export default Description;
