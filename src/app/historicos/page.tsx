'use client';
import React from 'react';
import { NavBar } from '../components/NavBar';
import { Title, Biografia, Biografia1, Text, Espacamento, Container, HistoricosBackground } from './style';

export default function Historicos() {
    const pessoas = [
        {
            nome: 'Nome da Pessoa 1',
            bio: 'Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica.',
            img: '/pessoa1.jpg'
        },
        {
            nome: 'Nome da Pessoa 2',
            bio: 'Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica.',
            img: '/pessoa2.jpg'
        },
        {
            nome: 'Nome da Pessoa 3',
            bio: 'Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica.',
            img: '/pessoa3.jpg'
        }
    ];

    return (
        <>
            <NavBar />
            <HistoricosBackground />
            <Container>
                <Title>
                    Pessoas que fizeram parte da nossa história
                </Title>
                {pessoas.map((pessoa, index) => (
                    <Espacamento key={index}>
                        <div className={`row ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                            <Biografia className="col-md-4">
                                <img src={pessoa.img} alt={`Perfil de ${pessoa.nome}`} />
                            </Biografia>
                            <div className="col-md-8 text-center">
                                <h2>{pessoa.nome}</h2>
                                <Text>{pessoa.bio}</Text>
                            </div>
                        </div>
                    </Espacamento>
                ))}
            </Container>
        </>
    );
}
