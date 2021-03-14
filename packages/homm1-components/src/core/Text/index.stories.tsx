import { Meta, Story } from "@storybook/react";
import React from "react";

import { Text, TextProps } from "./index";

interface StoryArgs extends TextProps {
  readonly content: string;
}

export default {
  args: {
    content: "Content",
    size: "medium",
  },
  argTypes: {
    content: {
      table: {
        disable: true,
      },
    },
  },
  component: Text,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  title: `Core/${Text.name}`,
} as Meta<StoryArgs>;

const Template: Story<StoryArgs> = (args) => (
  <Text {...args}>
    {args.content}
  </Text>
);

export const Default: typeof Template = Template.bind({});

export const Active: typeof Template = Template.bind({});

Active.args = {
  active: true,
};

export const Multiline: typeof Template = Template.bind({});

Multiline.args = {
  content: "This content\nis\nmulti-line",
};
