import React from "react";

import { Placeholder } from "../../core";
import { StatusWindow } from "./index";

export default {
  component: StatusWindow,
  title: `Adventure/${StatusWindow.name}`,
};

export const Default = () => (
  <StatusWindow>
    <Placeholder name="Content" />
  </StatusWindow>
);
