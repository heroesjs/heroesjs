import React from "react";
import styled from "styled-components";

export interface ScreenProps {
  readonly onClick?: () => void;
}

export function Screen(props: React.PropsWithChildren<ScreenProps>) {
  return (
    <Root {...props} />
  );
}

const Root = styled.div`
  width: 640px;
  height: 480px;
`;
