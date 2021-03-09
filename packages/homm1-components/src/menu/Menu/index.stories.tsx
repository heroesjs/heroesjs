import { Meta, Story } from "@storybook/react";
import React from "react";

import { Placeholder } from "@heroesjs/homm1-components";

import { Menu, MenuItem } from "./index";

interface StoryArgs {
  readonly items: readonly string[];
}

export default {
  args: {
    items: []
  },
  argTypes: {
    items: {
      control: true,
      table: {
        disable: true,
      },
    },
  },
  component: Menu,
  subcomponents: {
    MenuItem,
  },
  title: "Menu/Menu",
} as Meta<StoryArgs>;

const Template: Story<StoryArgs> = (args) => (
  <Menu>
    {args.items.map((i) => (
      <MenuItem key={i}>
        <Placeholder name={i} />
      </MenuItem>
    ))}
  </Menu>
);

export const Default: typeof Template = Template.bind({});

Default.args = {
  items: [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ],
};

export const EmptyItems: typeof Template = Template.bind({});

EmptyItems.args = {
  items: [
    "Item 1",
    "Item 2",
    "Item 3",
    "",
    "Item 4",
  ],
};
