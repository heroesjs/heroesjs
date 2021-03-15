import React from "react";

import { Button } from "@heroesjs/homm1-components";

import { Menu, MenuItem } from "../Menu";
import { cancel, fourPlayers, threePlayers, twoPlayers } from "./assets";

export interface PlayerCountMenuProps {
  readonly onOptionClick?: (value: number) => void;
  readonly onCancelClick?: () => void;
}

export function PlayerCountMenu(props: PlayerCountMenuProps) {
  return (
    <Menu>
      <MenuItem>
        <Button
          assets={twoPlayers}
          onClick={() => props.onOptionClick?.(2)}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={threePlayers}
          onClick={() => props.onOptionClick?.(3)}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={fourPlayers}
          onClick={() => props.onOptionClick?.(4)}
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
