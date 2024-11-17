'use client';
import React from 'react';
import { Container, FooterContent, FooterLinks, FooterLink, SocialIcons, FooterText } from './style';

export default function Footer() {
    return (
        <Container>
            <FooterContent>
                <FooterLinks>
                    <FooterLink href="#inicio" target="_blank">Início</FooterLink>
                    <FooterLink href="#historicos" target="_blank">Históricos</FooterLink>
                    <FooterLink href="#voluntarios" target="_blank">Voluntários</FooterLink>
                    <FooterLink href="#sobre" target="_blank">Sobre</FooterLink>
                    <FooterLink href="#contato" target="_blank">Contato</FooterLink>
                    <FooterLink href="#doacao" target="_blank">Doação</FooterLink>
                    <FooterLink href="#galeria" target="_blank">Galeria</FooterLink>
                </FooterLinks>
                <SocialIcons>
                    <a href="https://instagram.com/casadapaz_umuarama" target="_blank">
                        <img src="https://img.icons8.com/?size=100&id=118467&format=png&color=000000" alt="Instagram" />
                    </a>
                    <a href="http://facebook.com/CasaDaPazUmuarama" target="_blank">
                        <img src="https://img.icons8.com/?size=100&id=32309&format=png&color=000000" alt="Facebook" />
                    </a>
                </SocialIcons>
                <FooterText>&copy; {new Date().getFullYear()} Casa da Paz - Todos os direitos reservados.</FooterText>
            </FooterContent>
        </Container>
    );
}
