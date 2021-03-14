import React from "react";
import styled from "styled-components";

export interface CrestSlotProps {
  readonly className?: string;
}

export function CrestSlot(props: React.PropsWithChildren<CrestSlotProps>) {
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
