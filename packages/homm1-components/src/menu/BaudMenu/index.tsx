import React from "react";

import { Button } from "@heroesjs/homm1-components";

import { Menu, MenuItem } from "../Menu";
import { cancel, baud19200, baud2400, baud38400, baud9600 } from "./assets";

export interface BaudMenuProps {
  readonly on2400BaudClick?: () => void;
  readonly on9600BaudClick?: () => void;
  readonly on19200BaudClick?: () => void;
  readonly on38400BaudClick?: () => void;
  readonly onCancelClick?: () => void;
}

export function BaudMenu(props: BaudMenuProps) {
  return (
    <Menu>
      <MenuItem>
        <Button
          assets={baud2400}
          onClick={props.on2400BaudClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={baud9600}
          onClick={props.on9600BaudClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={baud19200}
          onClick={props.on19200BaudClick}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={baud38400}
          onClick={props.on38400BaudClick}
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
