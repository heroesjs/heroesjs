import React from "react";

import { Button } from "@heroesjs/homm1-components";

import { Menu, MenuItem } from "../Menu";
import { cancel, com1, com2, com3, com4 } from "./assets";

export interface ComPortMenuProps {
  readonly onOptionClick?: (value: number) => void;
  readonly onCancelClick?: () => void;
}

export function ComPortMenu(props: ComPortMenuProps) {
  return (
    <Menu>
      <MenuItem>
        <Button
          assets={com1}
          onClick={() => props.onOptionClick?.(1)}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={com2}
          onClick={() => props.onOptionClick?.(2)}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={com3}
          onClick={() => props.onOptionClick?.(3)}
        />
      </MenuItem>
      <MenuItem>
        <Button
          assets={com4}
          onClick={() => props.onOptionClick?.(4)}
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
