import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 200px;
  background-color: #fff; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 

  @media (max-width: 1200px) {
    padding: 20px 100px;
  }

  @media (max-width: 768px) {
    padding: 20px 50px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    align-items: flex-start;
  }
`;

export const LogoContainer = styled(Link)`
  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const NavList = styled.nav`
  display: flex;
  list-style: none;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
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

export const SearchInput = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;