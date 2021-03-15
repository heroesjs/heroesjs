import React from "react";

import { Button } from "@heroesjs/homm1-components";

import { Menu, MenuItem } from "../Menu";
import { baud19200, baud2400, baud38400, baud9600, cancel } from "./assets";

export interface BaudMenuProps {
  readonly onOptionClick?: (value: number) => void;
  readonly onCancelClick?: () => void;
}

export function BaudMenu(props: BaudMenuProps) {
  return (
    <Menu>
      <MenuItem>
        <Button
          assets={baud2400}
          onClick={() => props.onOptionClick?.(2400)}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={baud9600}
          onClick={() => props.onOptionClick?.(9600)}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={baud19200}
          onClick={() => props.onOptionClick?.(19200)}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={baud38400}
          onClick={() => props.onOptionClick?.(38400)}
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
