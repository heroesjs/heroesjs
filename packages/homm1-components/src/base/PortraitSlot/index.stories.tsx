import { Story } from "@storybook/react";
import React from "react";

import { Placeholder } from "../../core";
import { PortraitSlot, PortraitSlotProps } from "./index";

export default {
  component: PortraitSlot,
  title: `Base/${PortraitSlot.name}`,
};

export const Default: Story<PortraitSlotProps> = (args) => (
  <PortraitSlot {...args}>
    <Placeholder name="Content" />
  </PortraitSlot>
);
