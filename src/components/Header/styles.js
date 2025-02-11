import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 200px;
  background-color: #e7e4e4;
`;

export const LogoContainer = styled(Link)``;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 32px;
`;

export const NavItem = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  cursor: pointer;
  transition: color 0.3s;
  font-family: "Roboto", sans-serif;
  &:hover {
    color: #ef404a;
  }
`;
