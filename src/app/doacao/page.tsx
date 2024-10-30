'use client';
import React, { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Title, Container, FormGroup, Label, Input, Button, QRCode, Espacamento, FormWrapper, ValueOptions, ValueButton } from './style';

export default function Doacao() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [tipoDoacao, setTipoDoacao] = useState('');
    const [valor, setValor] = useState('');
    const [mostrarQRCode, setMostrarQRCode] = useState(false);
    const [numeroCartao, setNumeroCartao] = useState('');
    const [vencimentoCartao, setVencimentoCartao] = useState('');
    const [cvvCartao, setCvvCartao] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ nome, cpf, tipoDoacao, valor, numeroCartao, vencimentoCartao, cvvCartao });
    };

    return (
        <>
            <NavBar />
            <Container>
                <Title>Faça uma Doação</Title>
                <FormWrapper>
                    <form onSubmit={handleSubmit}>
                        <Espacamento>
                            <FormGroup>
                                <Label htmlFor="nome">Nome</Label>
                                <Input 
                                    type="text" 
                                    id="nome" 
                                    value={nome} 
                                    onChange={(e) => setNome(e.target.value)} 
                                    required 
                                    placeholder="Digite seu nome"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="cpf">CPF</Label>
                                <Input 
                                    type="text" 
                                    id="cpf" 
                                    value={cpf} 
                                    onChange={(e) => setCpf(e.target.value)} 
                                    required 
                                    placeholder="Digite seu CPF"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Qual valor desejar doar</Label>
                                <ValueOptions>
                                    {['20', '30', '40', '50', '100'].map((v) => (
                                        <ValueButton 
                                            key={v} 
                                            selected={valor === v} 
                                            onClick={() => setValor(v)}
                                        >
                                            <span style={{ fontSize: '0.9rem' }}>R$</span> <span>{v}</span>
                                        </ValueButton>
                                    ))}
                                </ValueOptions>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="tipoDoacao">Tipo de Doação</Label>
                                <ValueOptions>
                                    <ValueButton 
                                        selected={tipoDoacao === 'pix'} 
                                        onClick={() => {
                                            setTipoDoacao('pix');
                                            setMostrarQRCode(true);
                                        }}
                                        small
                                    >
                                        Pix
                                    </ValueButton>
                                    <ValueButton 
                                        selected={tipoDoacao === 'cartao'} 
                                        onClick={() => {
                                            setTipoDoacao('cartao');
                                            setMostrarQRCode(false);
                                        }}
                                        small
                                    >
                                        Cartão
                                    </ValueButton>
                                </ValueOptions>
                            </FormGroup>

                            {/* Campos do Cartão de Crédito */}
                            {tipoDoacao === 'cartao' && (
                                <>
                                    <FormGroup>
                                        <Label htmlFor="numeroCartao">Número do Cartão</Label>
                                        <Input 
                                            type="text" 
                                            id="numeroCartao" 
                                            value={numeroCartao} 
                                            onChange={(e) => setNumeroCartao(e.target.value)} 
                                            required 
                                            placeholder="Digite o número do cartão"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="vencimentoCartao">Vencimento:</Label>
                                        <Input 
                                            type="text" 
                                            id="vencimentoCartao" 
                                            value={vencimentoCartao} 
                                            onChange={(e) => setVencimentoCartao(e.target.value)} 
                                            required 
                                            placeholder="MM/AA"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="cvvCartao">CVV</Label>
                                        <Input 
                                            type="text" 
                                            id="cvvCartao" 
                                            value={cvvCartao} 
                                            onChange={(e) => setCvvCartao(e.target.value)} 
                                            required 
                                            placeholder="Digite o CVV"
                                        />
                                    </FormGroup>
                                </>
                            )}

                            {mostrarQRCode && (
                                <div style={{ textAlign: 'center' }}>
                                    <h3>QR Code para Doação</h3>
                                    <QRCode>
                                        <img src="/qrcode.png" alt="QR Code" />
                                    </QRCode>
                                    <p style={{ fontSize: '1.25rem', fontWeight: 'bold', marginTop: '10px' }}>
                                        CNPJ: 11.990.071/0001-03
                                    </p>
                                </div>
                            )}
                        </Espacamento>
                        <Button type="submit">Doar</Button>
                    </form>
                </FormWrapper>
            </Container>
        </>
    );
}
