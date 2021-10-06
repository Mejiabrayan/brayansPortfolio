import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
     <LinkColumn>
     <LinkTitle>Cell</LinkTitle>
     <LinkItem href="tel:510-941-2942">510-941-2942</LinkItem>
     </LinkColumn>
     <LinkColumn>
     <LinkTitle>Email</LinkTitle>
     <LinkItem href="mailto:learnwithbrayan@gmail.com">Learnwithbrayan@gmail.com</LinkItem>
     </LinkColumn>
     </LinkList>
     <SocialIconsContainer>
       <CompanyContainer>
         <Slogan> Learning and developing one project at a time </Slogan>
       </CompanyContainer>
       <SocialContainer>
       <SocialIcons href="https://github.com/Mejiabrayan/">
<AiFillGithub></AiFillGithub>
       </SocialIcons>
       <SocialIcons href="https://www.linkedin.com/in/brayancuenca/">
<AiFillLinkedin></AiFillLinkedin>
       </SocialIcons>
       </SocialContainer>
     </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
