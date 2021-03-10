import React from "react";

import { Button } from "@heroesjs/homm1-components";

import { Menu, MenuItem } from "../Menu";
import { cancel, com1, com2, com3, com4 } from "./assets";

export interface ComPortMenuProps {
  readonly onCom1Click?: () => void;
  readonly onCom2Click?: () => void;
  readonly onCom3Click?: () => void;
  readonly onCom4Click?: () => void;
  readonly onCancelClick?: () => void;
}

export function ComPortMenu(props: ComPortMenuProps) {
  return (
    <Menu>
      <MenuItem>
        <Button
          assets={com1}
          onClick={props.onCom1Click}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={com2}
          onClick={props.onCom2Click}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={com3}
          onClick={props.onCom3Click}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={com4}
          onClick={props.onCom4Click}
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
