'use client';
import React from 'react';
import { NavBar } from '../components/NavBar';
import { Container, Title, MapContainer, ContactSection, ContactInfo, InfoItem, InfoLabel, InfoLink, SocialIcons } from './style';
import Footer from '../components/Footer';

export default function Contato() {
    return (
        <>
            <NavBar />
            <Container>
                <Title>Contato</Title>
                <MapContainer>
                    <iframe
                        title="Mapa Casa da Paz"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.4292085278667!2d-53.3277864!3d-23.7650719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x948dbecbdfd9dfd1%3A0x50d2613b6b7d1a7f!2sR.%20Mimosa%2C%203172%20-%20Jardim%20Panorama%2C%20Umuarama%20-%20PR%2C%2087501-500!5e0!3m2!1sen!2sbr!4v1697667373150!5m2!1sen!2sbr"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </MapContainer>
                <ContactSection>
    <ContactInfo>
        <InfoItem>
            <InfoLabel>Instagram Bazar Beneficente</InfoLabel>
            <InfoLink href="https://instagram.com/bazaresebo_casadapaz" target="_blank">
                @bazaresebo_casadapaz
            </InfoLink>
        </InfoItem>
        <InfoItem>
            <InfoLabel>Fanpage</InfoLabel>
            <InfoLink href="http://facebook.com/CasaDaPazUmuarama" target="_blank">
                Casa Da Paz Umuarama
            </InfoLink>
        </InfoItem>
        <InfoItem>
            <InfoLabel>Telefone/WhatsApp</InfoLabel>
            <InfoLink href="tel:+5544999760543">
                (44) 99976-0543
            </InfoLink>
        </InfoItem>
    </ContactInfo>
</ContactSection>
            </Container>
            <Footer/>
        </>

    );
}
