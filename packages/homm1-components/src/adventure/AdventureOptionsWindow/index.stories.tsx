import { Story } from "@storybook/react";
import React from "react";

import { AdventureOptionsWindow, AdventureOptionsWindowProps } from "./index";

export default {
  component: AdventureOptionsWindow,
  title: `Adventure/${AdventureOptionsWindow.name}`,
};

export const Default: Story<AdventureOptionsWindowProps> = (args) => (
  <AdventureOptionsWindow {...args} />
);
