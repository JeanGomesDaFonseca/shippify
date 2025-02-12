import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background: #f8f8f8;
  padding: 20px 0;
  font-size: 14px;
  color: #555;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
  padding: 20px 200px;

  @media (max-width: 768px) {
    padding: 20px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 5px;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #555;
  font-size: 14px;

  &:hover {
    color: #333;
    text-decoration: underline;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 15px;
`;

export const SocialIcon = styled.a`
  color: #555;
  font-size: 20px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  font-size: 12px;
  color: #777;
  text-align: center;
`;
