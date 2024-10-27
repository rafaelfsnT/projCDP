'use client';
import React from 'react';
import { NavBar } from '../components/NavBar';
import { Title, Biografia, Biografia1, Text, Espacamento } from './style';

export default function Historicos() {
    return (
        <>
            <NavBar />
            <Title>
                Pessoas que fizeram parte da nossa história
            </Title>
            <div className="container-fluid">
                {/* Bio 1 */}
                <div className="row">
                    <Biografia className="col-md-4">
                    <img src="/perfil1.jpeg" alt="Perfil 1" />
                    </Biografia>
                    <div className="col-md-8 text-center">
                        <h2>Nome da Pessoa</h2>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                        </Text>
                    </div>
                </div>
                {/* Bio 2 */}
                <Espacamento className="row">
                    <div className="col-md-8 text-center">
                        <h2>Nome da Pessoa</h2>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                        </Text>
                    </div>
                    <Biografia1 className="col-md-4">
                    <img src="/perfil1.jpeg" alt="Perfil 1" />
                    </Biografia1>
                </Espacamento>
                <Espacamento className="row">
                    <Biografia className="col-md-4">
                    <img src="/perfil1.jpeg" alt="Perfil 1" />
                    </Biografia>
                    <div className="col-md-8 text-center">
                        <h2>Nome da Pessoa</h2>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                        </Text>
                    </div>
                </Espacamento>
            </div>
        </>
    );
}