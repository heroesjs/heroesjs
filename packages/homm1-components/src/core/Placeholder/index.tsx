import React from "react";
import styled from "styled-components";

export interface PlaceholderProps {
  readonly name: string;
}

export function Placeholder(props: PlaceholderProps) {
  return (
    <Root>
      {props.name}
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0.5;
`;
