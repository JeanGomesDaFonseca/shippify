import React from "react";
import * as S from "./styles";
import LogoShippify from "../../assets/img/logo-shippify.svg";
import { useOutletContext } from "react-router-dom";

const Header = () => {
  const outletContext = useOutletContext() || {}; // Evita erro se for null
  const { setSearchTerm } = outletContext;

  return (
    <S.HeaderContainer>
      <S.LogoContainer to="/">
        <img src={LogoShippify} alt="logo da shippify" />
      </S.LogoContainer>

      <input
        type="text"
        placeholder="Pesquisar..."
        onChange={(e) => setSearchTerm && setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid gray",
          marginLeft: "20px",
        }}
      />

      <S.NavList>
        <S.NavItem to="/cadastro-motorista">Cadastrar Motorista</S.NavItem>
        <S.NavItem to="/cadastro-veiculo">Cadastrar Veículo</S.NavItem>
      </S.NavList>
    </S.HeaderContainer>
  );
};

export default Header;
