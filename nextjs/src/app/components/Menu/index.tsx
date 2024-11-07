'use client'
import { useEffect, useState } from "react";
import { LeftContainer, NavBarContainer, NavbarInnerContainer, NavBarLink, NavbarLinkContainer, NavbarLinkExtended, RightContainer, } from "./style"
import { FaShoppingCart } from 'react-icons/fa';
import axios, { AxiosError } from "axios";

interface ICategorias {
    id: number,
    nome: string

}
export const Menu = () => {

    const [categorias, setCategorias] = useState<Array<ICategorias>>([]); 


    useEffect(() => {

        axios.get('http://localhost:3001/categorias') //url que consome os dados backend
            .then((resposta) => {
                console.log(resposta.data);

                setCategorias(resposta.data);
            })
            .catch((err: AxiosError) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <NavBarContainer>
                <NavbarInnerContainer>
                    <LeftContainer>
                        <NavbarLinkContainer>
                            <NavbarLinkExtended href={'/'}
                                style={{
                                    color: 'var(--white)'
                                }}>
                                Americanos
                            </NavbarLinkExtended>

                            <NavBarLink href={"/"}>Home</NavBarLink>

                            {
                                categorias.map((categoria) => (
                                   <NavBarLink key={categoria.id}
                                   href={`/categoria/${categoria.id}`}
                                   >
                                    {categoria.nome}
                                   </NavBarLink>
                                ))
                            }
                        </NavbarLinkContainer>
                    </LeftContainer>

                    <RightContainer>
                        <NavbarLinkExtended href={'/carrinho'}>
                            <FaShoppingCart style={{
                                color: 'var(--white)'
                            }} />
                        </NavbarLinkExtended>
                    </RightContainer>
                </NavbarInnerContainer>
            </NavBarContainer>
        </>
    )
}