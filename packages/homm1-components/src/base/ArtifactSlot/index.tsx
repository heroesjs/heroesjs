import React from "react";
import styled from "styled-components";

export interface ArtifactSlotProps {
  readonly className?: string;
}

export function ArtifactSlot(props: React.PropsWithChildren<ArtifactSlotProps>) {
  return (
    <Root className={props.className}>
      {props.children}
    </Root>
  );
}

const Root = styled.div`
  width: 76px;
  height: 76px;
`;
