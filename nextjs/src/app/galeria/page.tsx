'use client';
import React from 'react';
import { NavBar } from '../components/NavBar';
import { Title, GaleriaItem, Image, Text, Espacamento } from './style';

export default function Galeria() {
    return (
        <>
            <NavBar />
            <Title>
               Galeria Casa da Paz 
            </Title>
            <div className="container-fluid">
                {/* Item 1 */}
                <Espacamento className="row">
                    <div className="col-md-12 text-center">
                        <GaleriaItem>
                            <Image src="/foto1.jpg" alt="Imagem 1" />
                            <h2>What is Lorem Ipsum</h2>
                            <Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </Text>
                        </GaleriaItem>
                    </div>
                </Espacamento>

                {/* Item 2 */}
                <Espacamento className="row">
                    <div className="col-md-12 text-center">
                        <GaleriaItem>
                            <Image src="/foto2.jpg" alt="Imagem 2" />
                            <h2>What is Lorem Ipsum</h2>
                            <Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </Text>
                        </GaleriaItem>
                    </div>
                </Espacamento>

                {/* Item 3 */}
                <Espacamento className="row">
                    <div className="col-md-12 text-center">
                        <GaleriaItem>
                            <Image src="/foto3.jpg" alt="Imagem 3" />
                            <h2>What is Lorem Ipsum</h2>
                            <Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </Text>
                        </GaleriaItem>
                    </div>
                </Espacamento>

                {/* Item 4 */}
                <Espacamento className="row">
                    <div className="col-md-12 text-center">
                        <GaleriaItem>
                            <Image src="/foto4.jpg" alt="Imagem 4" />
                            <h2>What is Lorem Ipsum</h2>
                            <Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </Text>
                        </GaleriaItem>
                    </div>
                </Espacamento>
            </div>
        </>
    );
}
