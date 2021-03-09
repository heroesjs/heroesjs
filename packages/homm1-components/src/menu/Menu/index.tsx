import styled from "styled-components";

import { background } from "./assets";

export const Menu = styled.div`
  box-sizing: border-box;
  width: 194px;
  height: 410px;
  background-image: url(${background});
  padding: 33px;
`;

export const MenuItem = styled.div`
  width: 127px;
  height: 63px;
  margin-bottom: 7px;
`;
