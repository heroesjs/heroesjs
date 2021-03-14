import React from "react";
import styled from "styled-components";

export interface PortraitSlotProps {
  readonly className?: string;
}

export function PortraitSlot(props: React.PropsWithChildren<PortraitSlotProps>) {
  return (
    <Root className={props.className}>
      {props.children}
    </Root>
  );
}

const Root = styled.div`
  width: 101px;
  height: 93px;
`;
