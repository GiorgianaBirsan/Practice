import React from "react";
import {Alert, AlertDescription, AlertIcon} from "@chakra-ui/react";

export default function AlertUI(props) {
  return (
    <Alert status={props.status}>
      <AlertIcon />
      <AlertDescription>{props.children}</AlertDescription>
    </Alert>
  );
}
