import { Story } from "@storybook/react";
import React from "react";

import { Placeholder } from "../Placeholder";
import { Screen, ScreenProps } from "./index";

export default {
  component: Screen,
  title: `Core/${Screen.name}`,
};

export const Default: Story<ScreenProps> = (args) => (
  <Screen {...args}>
    <Placeholder name="Content" />
  </Screen>
);
