'use client'
import Image from "next/image"
import { Button, CardBody, TextButton, TextPromo, Title, TitlePreco } from "./style"

export const Card = () => {
    return (
        <CardBody>
            <Image src={''} alt="" />
            <Title>Pendrive</Title>
            <TitlePreco>R$800,00</TitlePreco>
            <TextPromo>R$200,00</TextPromo>
            <Button>
                <TextButton>Detalhes</TextButton>
            </Button>
        </CardBody>
    )
}