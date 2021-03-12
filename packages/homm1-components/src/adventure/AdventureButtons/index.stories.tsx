import { Story } from "@storybook/react";
import React from "react";

import { AdventureButtons, AdventureButtonsProps } from "./index";

export default {
  component: AdventureButtons,
  title: `Adventure/${AdventureButtons.name}`,
};

export const Default: Story<AdventureButtonsProps> = (args) => (
  <AdventureButtons {...args} />
);
