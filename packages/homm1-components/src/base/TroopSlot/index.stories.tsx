import { Story } from "@storybook/react";
import React from "react";

import { Placeholder } from "../../core";
import { TroopSlot, TroopSlotProps } from "./index";

export default {
  component: TroopSlot,
  title: `Base/${TroopSlot.name}`,
};

export const Default: Story<TroopSlotProps> = (args) => (
  <TroopSlot {...args}>
    <Placeholder name="Content" />
  </TroopSlot>
);
