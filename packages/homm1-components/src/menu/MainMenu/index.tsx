import React from "react";

import { Button } from "@heroesjs/homm1-components";

import { Menu, MenuItem } from "../Menu";
import { loadGame, newGame, quit, viewCredits, viewHighScores } from "./assets";

export interface MainMenuProps {
  readonly onNewGameClick?: () => void;
  readonly onLoadGameClick?: () => void;
  readonly onViewHighScoresClick?: () => void;
  readonly onViewCreditsClick?: () => void;
  readonly onQuitClick?: () => void;
}

export function MainMenu(props: MainMenuProps) {
  return (
    <Menu>
      <MenuItem>
        <Button
          assets={newGame}
          onClick={props.onNewGameClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={loadGame}
          onClick={props.onLoadGameClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={viewHighScores}
          onClick={props.onViewHighScoresClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={viewCredits}
          onClick={props.onViewCreditsClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={quit}
          onClick={props.onQuitClick}
        />
      </MenuItem>
    </Menu>
  );
}
