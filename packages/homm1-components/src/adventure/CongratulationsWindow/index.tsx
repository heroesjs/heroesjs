import React from "react";
import styled from "styled-components";

import { Screen } from "../../core";
import { background } from "./assets";

export interface CongratulationsWindowProps {
  readonly onClick?: () => void;
}

export function CongratulationsWindow(props: React.PropsWithChildren<CongratulationsWindowProps>) {
  return (
    <Root onClick={props.onClick}>
      <Content>
        {props.children}
      </Content>
    </Root>
  );
}

const Root = styled(Screen)`
  background: url(${background});
`;

const Content = styled.div`
  position: absolute;
  top: 133px;
  left: 305px;
  width: 292px;
  height: 110px;
`;
