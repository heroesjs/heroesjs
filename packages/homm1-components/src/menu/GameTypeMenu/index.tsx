import React from "react";

import { Button } from "@heroesjs/homm1-components";

import { Menu, MenuItem } from "../Menu";
import { campaignGame, cancel, multiPlayerGame, standardGame } from "./assets";

export interface GameTypeMenuProps {
  readonly onStandardGameClick?: () => void;
  readonly onCampaignGameClick?: () => void;
  readonly onMultiPlayerGameClick?: () => void;
  readonly onCancelClick?: () => void;
}

export function GameTypeMenu(props: GameTypeMenuProps) {
  return (
    <Menu>
      <MenuItem>
        <Button
          assets={standardGame}
          onClick={props.onStandardGameClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={campaignGame}
          onClick={props.onCampaignGameClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={multiPlayerGame}
          onClick={props.onMultiPlayerGameClick}
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
