import React from "react";

import { Button } from "@heroesjs/homm1-components";

import { Menu, MenuItem } from "../Menu";
import { cancel, playLordAlamar, playLordIronfist, playLordSlayer, playQueenLamanda } from "./assets";

export interface CampaignMenuProps {
  readonly onPlayLordIronfistClick?: () => void;
  readonly onPlayLordSlayerClick?: () => void;
  readonly onPlayQueenLamandaClick?: () => void;
  readonly onPlayLordAlamarClick?: () => void;
  readonly onCancelClick?: () => void;
}

export function CampaignMenu(props: CampaignMenuProps) {
  return (
    <Menu>
      <MenuItem>
        <Button
          assets={playLordIronfist}
          onClick={props.onPlayLordIronfistClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={playLordSlayer}
          onClick={props.onPlayLordSlayerClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={playQueenLamanda}
          onClick={props.onPlayQueenLamandaClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={playLordAlamar}
          onClick={props.onPlayLordAlamarClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={cancel}
          onClick={props.onCancelClick}
        />
      </MenuItem>
    </Menu>
  );
}
