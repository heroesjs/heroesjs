import { Story } from "@storybook/react";
import React from "react";

import { CampaignMenu, CampaignMenuProps } from "./index";

export default {
  component: CampaignMenu,
  title: `Menu/${CampaignMenu.name}`,
};

export const Default: Story<CampaignMenuProps> = (args) => (
  <CampaignMenu {...args} />
);
