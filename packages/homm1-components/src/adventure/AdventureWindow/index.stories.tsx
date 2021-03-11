import { Meta, Story } from "@storybook/react";
import React from "react";

import { Placeholder } from "../../core";
import { AdventureWindow, AdventureWindowProps } from "./index";

export default {
  args: {
    renderAdventureMap: () => <Placeholder name="Adventure Map" />,
    renderWorldMap: () => <Placeholder name="World Map" />,
    renderLocators: () => <Placeholder name="Locators" />,
    renderStatus: () => <Placeholder name="Status" />,
  },
  component: AdventureWindow,
  title: `Adventure/${AdventureWindow.name}`,
} as Meta<AdventureWindowProps>;

export const Default: Story<AdventureWindowProps> = (args) => (
  <AdventureWindow {...args} />
);
