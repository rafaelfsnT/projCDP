import { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar"
import { IToken } from "../../interfaces/token";
import { verificaTokenExpirado } from "../../services/token";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface IUsuarios {
    id: number
    nome: string
    email: string
    permissoes: string
}

export default function Usuarios() {

    const navigate = useNavigate()

    const [usuarios, setUsuarios] = useState<Array<IUsuarios>>([])

    useEffect(() => {
        let lsToken = localStorage.getItem('americanos.token')

        let token: IToken | null = null

        if (typeof lsToken === 'string') {
            token = JSON.parse(lsToken)
        }

        if (!token || verificaTokenExpirado(token.accessToken)) {
            navigate('/')
        }


        //trazer os usuarios do backend
        axios.get('http://localhost:3001/users')
            .then((resposta) => {
                setUsuarios(resposta.data)
            })
            .catch((err) => {
                console.log(err)
            })


    }, [])

    return (
        <>
            <NavBar>

                <div
                    className="d-flex justify-content-between mt-3"
                >
                    <h1>Usuários</h1>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                            navigate('/usuarios/criar')
                        }}
                    >Adicionar</button>

                </div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Email</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map((usuario, index) => {
                                return (
                                    <tr key={usuario.id}>
                                        <th>
                                            {usuario.id}
                                        </th>
                                        <td>{usuario.nome}</td>
                                        <td>{usuario.email}</td>
                                        <td>
                                            <button
                                                className="btn btn-warning"
                                                type="button"
                                                style={{
                                                    marginRight: 5
                                                }}
                                            >
                                                Editar
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                type="button"

                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>

                </table>

            </NavBar>
        </>
    )
}