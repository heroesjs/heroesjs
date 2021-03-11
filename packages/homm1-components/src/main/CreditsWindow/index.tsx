import React from "react";
import styled from "styled-components";

import { Screen } from "../../core";
import { background } from "./assets";

export interface CreditsWindowProps {
  readonly onClick?: () => void;
}

export function CreditsWindow(props: CreditsWindowProps) {
  return (
    <Root onClick={props.onClick} />
  );
}

const Root = styled(Screen)`
  background: url(${background});
`;
