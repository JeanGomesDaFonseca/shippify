import React from "react";
import * as S from "./styles";
import LogoShippify from "../../assets/img/logo-shippify.svg";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <img src={LogoShippify} alt="logo da shippify" />
      </S.LogoContainer>

      <S.NavList>
        <S.NavItem>Cadastrar Motorista</S.NavItem>
        <S.NavItem>Cadastrar Veiculo</S.NavItem>
      </S.NavList>
    </S.HeaderContainer>
  );
};

export default Header;