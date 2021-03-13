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

export const screenWidth = 640;
export const screenHeight = 480;

const Root = styled.div`
  position: relative;
  width: ${screenWidth}px;
  height: ${screenHeight}px;
`;
