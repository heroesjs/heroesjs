import React from "react";
import styled from "styled-components";

export interface TroopSlotProps {
  readonly className?: string;
}

export function TroopSlot(props: React.PropsWithChildren<TroopSlotProps>) {
  return (
    <Root className={props.className}>
      {props.children}
    </Root>
  );
}

const Root = styled.div`
  width: 82px;
  height: 93px;
`;
