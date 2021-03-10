import React from "react";

import { Button } from "@heroesjs/homm1-components";

import { Menu, MenuItem } from "../Menu";
import { cancel, directConnect, hotSeat, modem, network } from "./assets";

export interface MultiPlayerGameMenuProps {
  readonly onHotSeatClick?: () => void;
  readonly onDirectConnectClick?: () => void;
  readonly onModemClick?: () => void;
  readonly onNetworkClick?: () => void;
  readonly onCancelClick?: () => void;
}

export function MultiPlayerGameMenu(props: MultiPlayerGameMenuProps) {
  return (
    <Menu>
      <MenuItem>
        <Button
          assets={hotSeat}
          onClick={props.onHotSeatClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={directConnect}
          onClick={props.onDirectConnectClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={modem}
          onClick={props.onModemClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={network}
          onClick={props.onNetworkClick}
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
