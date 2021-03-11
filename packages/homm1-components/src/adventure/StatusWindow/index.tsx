import React from "react";
import styled from "styled-components";

import { background } from "./assets";

export function StatusWindow(props: React.PropsWithChildren<{}>) {
  return (
    <Root {...props} />
  );
}

const Root = styled.div`
  width: 144px;
  height: 72px;
  background: url(${background});
`;
