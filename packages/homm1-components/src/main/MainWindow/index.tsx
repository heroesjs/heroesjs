import React from "react";
import styled from "styled-components";

import { Screen } from "../../core";
import { background } from "./assets";

export function MainWindow(props: React.PropsWithChildren<{}>) {
  return (
    <Root {...props} />
  );
}

const Root = styled(Screen)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  box-sizing: border-box;
  background: url(${background});
  padding: 20px 10px;
`;
