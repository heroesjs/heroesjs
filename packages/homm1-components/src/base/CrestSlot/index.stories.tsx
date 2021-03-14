import { Story } from "@storybook/react";
import React from "react";

import { Placeholder } from "../../core";
import { CrestSlot, CrestSlotProps } from "./index";

export default {
  component: CrestSlot,
  title: `Base/${CrestSlot.name}`,
};

export const Default: Story<CrestSlotProps> = (args) => (
  <CrestSlot {...args}>
    <Placeholder name="Content" />
  </CrestSlot>
);
