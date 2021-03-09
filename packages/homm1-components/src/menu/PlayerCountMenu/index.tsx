import React from "react";

import { Button } from "@heroesjs/homm1-components";

import { Menu, MenuItem } from "../Menu";
import { cancel, fourPlayers, threePlayers, twoPlayers } from "./assets";

export interface PlayerCountMenuProps {
  readonly on2PlayersClick?: () => void;
  readonly on3PlayersClick?: () => void;
  readonly on4PlayersClick?: () => void;
  readonly onCancelClick?: () => void;
}

export function PlayerCountMenu(props: PlayerCountMenuProps) {
  return (
    <Menu>
      <MenuItem>
        <Button
          assets={twoPlayers}
          onClick={props.on2PlayersClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={threePlayers}
          onClick={props.on3PlayersClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={fourPlayers}
          onClick={props.on4PlayersClick}
        />
      </MenuItem>
      <MenuItem />
      <MenuItem>
        <Button
          assets={cancel}
          onClick={props.onCancelClick}
        />
      </MenuItem>
    </Menu>
  );
}
