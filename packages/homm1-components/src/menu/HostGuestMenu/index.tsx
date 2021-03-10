import React from "react";

import { Button } from "@heroesjs/homm1-components";

import { Menu, MenuItem } from "../Menu";
import { cancel, guest, guestAnswers, host, hostDials } from "./assets";

export interface HostGuestMenuProps {
  readonly descriptive?: boolean;
  readonly onHostClick?: () => void;
  readonly onGuestClick?: () => void;
  readonly onCancelClick?: () => void;
}

export function HostGuestMenu(props: HostGuestMenuProps) {
  return (
    <Menu>
      <MenuItem>
        <Button
          assets={props.descriptive ? hostDials : host}
          onClick={props.onHostClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={props.descriptive ? guestAnswers : guest}
          onClick={props.onGuestClick}
        />
      </MenuItem>
      <MenuItem />
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
