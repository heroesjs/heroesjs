import React from "react";
import styled from "styled-components";

import { Placeholder } from "@heroesjs/homm1-components";

import { MainWindow } from "./index";

export default {
  component: MainWindow,
  title: `Main/${MainWindow.name}`,
};

const Item = styled.div`
  width: 200px;
  height: 400px;
`;

export const Default = () => (
  <MainWindow>
    <Item>
      <Placeholder name="Item" />
    </Item>
  </MainWindow>
);

export const Empty = () => (
  <MainWindow>
    <Placeholder name="Content" />
  </MainWindow>
);
