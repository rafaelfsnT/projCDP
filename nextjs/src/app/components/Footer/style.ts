import styled from 'styled-components';

export const Container = styled.footer`
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Arial', sans-serif;
    text-align: center;
    box-shadow: 0px -2px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
`;

export const FooterContent = styled.div`
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

export const FooterLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    width: 100%;
    margin-bottom: 15px;
`;

export const FooterLink = styled.a`
    color: #8fbd31;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
        color: #4b9d1e;  // Verde mais escuro
    }

    @media (max-width: 480px) {
        font-size: 0.8rem;  // Menor fonte para telas pequenas
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 10px;

    a img {
        width: 30px;
        height: 30px;
        transition: transform 0.3s ease;
    }

    a:hover img {
        transform: scale(1.1);
    }

    @media (max-width: 480px) {
        gap: 15px;
    }
`;

export const FooterText = styled.p`
    margin-top: 10px;
    font-size: 0.8rem;
    color: #bbb;
    font-weight: 300;
    opacity: 0.8;

    @media (max-width: 480px) {
        font-size: 0.7rem;  // Menor tamanho de fonte para dispositivos móveis
    }
`;

