import React from "react";
import LogoShippify from "../../assets/img/logo-shippify.svg";
import * as S from "./styles";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LogoContainer to="/">
        <img src={LogoShippify} alt="logo da shippify" />
      </S.LogoContainer>
      <S.NavList>
        <S.NavItem to="/cadastro-motorista">Cadastrar Motorista</S.NavItem>
        <S.NavItem to="/cadastro-veiculo">Cadastrar Veículo</S.NavItem>
      </S.NavList>
    </S.HeaderContainer>
  );
};

export default Header;