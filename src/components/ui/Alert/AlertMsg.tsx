import React from "react";
import { Alert, AlertDescription, AlertTitle } from "./index";
import { AlertCircle } from "lucide-react";

const AlertMsg = (props: AlertMsg) => {
  const { description, title = "Error", variant = "destructive" } = props;

  return (
    <Alert variant={variant}>
      <AlertCircle />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default AlertMsg;
