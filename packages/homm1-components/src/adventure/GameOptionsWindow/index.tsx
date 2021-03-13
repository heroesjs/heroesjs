import React from "react";
import styled from "styled-components";

import { Button } from "../../core";
import { background, info, loadGame, newGame, okay, quit, saveGame } from "./assets";

export interface GameOptionsWindowProps {
  readonly onNewGameClick?: () => void;
  readonly onLoadGameClick?: () => void;
  readonly onSaveGameClick?: () => void;
  readonly onQuitClick?: () => void;
  readonly renderOption?: (index: number) => React.ReactNode;
  readonly onOkayClick?: () => void;
  readonly onInfoClick?: () => void;
}

export function GameOptionsWindow(props: GameOptionsWindowProps) {
  return (
    <Root>
      <NewGameButton
        assets={newGame}
        onClick={props.onNewGameClick}
      />
      <LoadGameButton
        assets={loadGame}
        onClick={props.onLoadGameClick}
      />
      <SaveGameButton
        assets={saveGame}
        onClick={props.onSaveGameClick}
      />
      <QuitButton
        assets={quit}
        onClick={props.onQuitClick}
      />
      <Options>
        {[...new Array(6).keys()].map((k) => (
          <Option key={k}>
            {props.renderOption?.(k)}
          </Option>
        ))}
      </Options>
      <OkayButton
        assets={okay}
        onClick={props.onOkayClick}
      />
      <InfoButton
        assets={info}
        onClick={props.onInfoClick}
      />
    </Root>
  );
}

const Root = styled.div`
  position: relative;
  width: 322px;
  height: 459px;
  background: url(${background});
`;

const NewGameButton = styled(Button)`
  position: absolute;
  top: 31px;
  left: 46px;
`;

const LoadGameButton = styled(Button)`
  position: absolute;
  top: 31px;
  left: 179px;
`;

const SaveGameButton = styled(Button)`
  position: absolute;
  top: 107px;
  left: 46px;
`;

const QuitButton = styled(Button)`
  position: absolute;
  top: 107px;
  left: 179px;
`;

const Options = styled.div`
  position: absolute;
  top: 194px;
  left: 36px;
  display: flex;
  flex-wrap: wrap;
  width: 249px;
`;

const Option = styled.div`
  width: 65px;
  height: 65px;
  margin-right: 27px;

  &:first-child {
    margin-bottom: 55px;
  }

  &:nth-of-type(3n) {
    margin-right: 0;
  }
`;

const OkayButton = styled(Button)`
  position: absolute;
  top: 408px;
  left: 24px;
`;

const InfoButton = styled(Button)`
  position: absolute;
  top: 408px;
  left: 203px;
`;
