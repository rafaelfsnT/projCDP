import styled from 'styled-components';

export const Container = styled.div`
    padding: 40px 20px;
    background-color: #fff;
    color: #333;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Arial', sans-serif;

    /* Responsividade */
    @media (max-width: 768px) {
        padding: 20px; // Reduz o padding em telas menores
    }
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #333;
    text-align: center;

    /* Responsividade */
    @media (max-width: 768px) {
        font-size: 2rem; // Diminui o tamanho da fonte em telas pequenas
        margin-bottom: 20px;
    }
`;

export const MapContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin-bottom: 40px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    /* Responsividade */
    @media (max-width: 768px) {
        max-width: 100%; // Ajusta o tamanho do mapa para telas pequenas
        margin-bottom: 20px;
    }
`;

export const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 800px;
    padding: 30px;
    background-color: #f9fafb;
    border-radius: 12px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    margin-top: -40px;
    border: 2px solid #8fbd31;

    /* Responsividade */
    @media (max-width: 768px) {
        padding: 20px; // Diminui o padding em telas menores
        max-width: 100%; // Ajusta o tamanho para telas pequenas
        margin-top: 0; // Remove o espaço superior em telas pequenas
    }
`;

export const ContactInfo = styled.div`
    width: 100%;
    margin-bottom: 30px;
    text-align: left;
`;

export const InfoItem = styled.div`
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    border: 2px solid #8fbd31;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
    }

    /* Responsividade */
    @media (max-width: 768px) {
        margin-bottom: 15px; // Reduz o espaçamento entre os itens
    }
`;

export const InfoLabel = styled.h3`
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    /* Responsividade */
    @media (max-width: 768px) {
        font-size: 1rem; // Reduz o tamanho da fonte em telas pequenas
    }
`;

export const InfoLink = styled.a`
    color: #007b33;
    font-size: 1.1rem;
    text-decoration: none;
    font-weight: 500;
    margin-top: 5px;

    &:hover {
        color: #004d1a;
        text-decoration: underline;
    }

    /* Responsividade */
    @media (max-width: 768px) {
        font-size: 1rem; // Reduz o tamanho da fonte em telas pequenas
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 30px;
    justify-content: center;

    a img {
        width: 50px;
        height: 50px;
        transition: transform 0.3s ease, filter 0.3s ease;
        border-radius: 50%;
        border: 2px solid #8fbd31;
    }

    a:hover img {
        transform: scale(1.1);
        filter: brightness(1.2);
    }

    /* Responsividade */
    @media (max-width: 768px) {
        gap: 20px; // Menos espaçamento entre os ícones em telas pequenas
        margin-top: 20px;
    }
`;

