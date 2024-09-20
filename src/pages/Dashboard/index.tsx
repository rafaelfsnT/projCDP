import { useEffect } from "react";
import { NavBar } from "../../components/NavBar"
import { IToken } from "../../interfaces/token";
import { verificaTokenExpirado } from "../../services/token";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {

    const navigate = useNavigate()

    useEffect(() => {
        let lsToken = localStorage.getItem('americanos.token')

        let token: IToken | null = null

        if (typeof lsToken === 'string') {
            token = JSON.parse(lsToken)
        }

        if (!token || verificaTokenExpirado(token.accessToken)){
            navigate('/')
        }




    }, [])

    return (
        <>
            <NavBar>
        <h1>Casa da Paz </h1>
            </NavBar>
        </>
    )
}