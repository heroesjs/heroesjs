import React from "react";
import styled from "styled-components";

import { background } from "./assets";

export function Menu(props: React.PropsWithChildren<{}>) {
  return (
    <MenuRoot {...props} />
  );
}

const MenuRoot = styled.div`
  box-sizing: border-box;
  width: 194px;
  height: 410px;
  background-image: url(${background});
  padding: 33px;
`;

export function MenuItem(props: React.PropsWithChildren<{}>) {
  return (
    <MenuItemRoot {...props} />
  );
}

const MenuItemRoot = styled.div`
  width: 127px;
  height: 63px;
  margin-bottom: 7px;
`;
