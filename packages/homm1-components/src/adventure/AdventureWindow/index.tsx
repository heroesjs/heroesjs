import React from "react";
import styled from "styled-components";

import { Screen, screenHeight } from "../../core";
import { background } from "./assets";

export interface AdventureWindowProps {
  readonly renderAdventureMap?: () => React.ReactNode;
  readonly renderWorldMap?: () => React.ReactNode;
  readonly renderLocators?: () => React.ReactNode;
  readonly renderStatus?: () => React.ReactNode;
}

export function AdventureWindow(props: AdventureWindowProps) {
  return (
    <Root>
      <AdventureMap>
        {props.renderAdventureMap?.()}
      </AdventureMap>
      <WorldMap>
        {props.renderWorldMap?.()}
      </WorldMap>
      <Locators>
        {props.renderLocators?.()}
      </Locators>
      <Status>
        {props.renderStatus?.()}
      </Status>
    </Root>
  );
}

const borderWidth = 16;

const Root = styled(Screen)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-sizing: border-box;
  background: url(${background});
  padding: ${borderWidth}px;

  > div {
    margin-bottom: ${borderWidth}px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const adventureMapSize = screenHeight - 2 * borderWidth;

const AdventureMap = styled.div`
  width: ${adventureMapSize}px;
  height: ${adventureMapSize}px;
  margin-right: ${borderWidth}px;
`;

const sidebarWidth = 144;

const WorldMap = styled.div`
  width: ${sidebarWidth}px;
  height: ${sidebarWidth}px;
`;

const Locators = styled.div`
  width: ${sidebarWidth}px;
  height: 128px;
`;

const Status = styled.div`
  width: ${sidebarWidth}px;
  height: ${sidebarWidth}px;
`;
