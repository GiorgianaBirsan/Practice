import React from "react";
import {Button} from "@chakra-ui/react";

export default function ButtonUI(props) {
  return (
    <Button
      variant={props.variant || "solid"}
      colorScheme={props.colorScheme || "pink"}
      type={props.type || "button"}
      onClick={props.onClick}
      pl={10}
      pr={10}
    >
      {props.children}
    </Button>
  );
}
