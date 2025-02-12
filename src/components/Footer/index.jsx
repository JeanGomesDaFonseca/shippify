import React from "react";
import * as S from "./styles";
import { Facebook, LinkedIn, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.TopSection>
        <S.Column>
          <S.NavList>
            <li>
              <S.NavLink to="https://www.shippify.co/">Shippers</S.NavLink>
            </li>
            <li>
              <S.NavLink to="https://www.shippify.co/terms/pt" target="_blank">
                Termos de Uso
              </S.NavLink>
            </li>
          </S.NavList>
        </S.Column>

        <S.SocialMedia>
          <S.SocialIcon href="https://www.facebook.com/shippify" target="_blank">
            <Facebook fontSize="small" />
          </S.SocialIcon>
          <S.SocialIcon href="https://br.linkedin.com/company/shippify" target="_blank">
            <LinkedIn fontSize="small" />
          </S.SocialIcon>
          <S.SocialIcon href="https://x.com/Shippify" target="_blank">
            <Twitter fontSize="small" />
          </S.SocialIcon>
          <S.SocialIcon href="https://www.instagram.com/aloshipper/" target="_blank">
            <Instagram fontSize="small" />
          </S.SocialIcon>
        </S.SocialMedia>
      </S.TopSection>

      <S.BottomSection>
        <p>Entregas com ❤️ pela Shippify</p>
        <p>© 2025 Shippify, Inc. All Rights Reserved.</p>
      </S.BottomSection>
    </S.FooterContainer>
  );
};

export default Footer;
