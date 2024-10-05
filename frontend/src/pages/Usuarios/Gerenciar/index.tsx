import { useCallback, useEffect, useRef } from "react"
import { IToken } from "../../../interfaces/token"
import { verificaTokenExpirado } from "../../../services/token"
import { useNavigate } from "react-router-dom"
import { NavBar } from "../../../components/NavBar"
import { SubmitHandler, useForm } from "react-hook-form"
import axios from "axios"

interface IForm {
    nome: string
    email: string
    password: string
    permissoes: string
}

export default function GerenciarUsuarios() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IForm>()

    const refForm = useRef<any>()

    const navigate = useNavigate()

    useEffect(() => {
        let lsToken = localStorage.getItem('americanos.token')

        let token: IToken | null = null

        if (typeof lsToken === 'string') {
            token = JSON.parse(lsToken)
        }

        if (!token || verificaTokenExpirado(token.accessToken)) {
            navigate('/')
        }

    }, [])

    const submitForm: SubmitHandler<IForm> = useCallback(
        (data) => {

            axios.post('http://localhost:3001/users',
                data
            )
                .then((res) => {
                    navigate('/usuarios')
                })
                .catch((err) => {
                    console.log(err)
                })

        }, [])

    return (
        <>
            <NavBar>
                <h1>Usuario</h1>

                <form
                    className="row g-3 needs-validation mb-3"
                    noValidate
                    style={{
                        alignItems: 'center'
                    }}
                    onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();

                        refForm.current.classList.add('was-validated')

                        handleSubmit(submitForm)(event)

                    }}
                    ref={refForm}
                >
                    <div
                        className="col-md-12"
                    >
                        <label
                            htmlFor="nome"
                            className="form-label"
                        >
                            Nome
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Dephay"
                            id="nome"
                            required
                            {...register('nome',
                                { required: 'Nome é obrigatorio' }
                            )}
                        />
                        <div className="invalid-feedback">
                            {errors.nome && errors.nome.message}
                        </div>
                    </div>

                    <div
                        className="col-md-12"
                    >
                        <label
                            htmlFor="email"
                            className="form-label"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Dephay"
                            id="email"
                            required
                            {...register('email',
                                { required: 'Email é obrigatorio' }
                            )}
                        />
                        <div className="invalid-feedback">
                            {errors.email && errors.email.message}
                        </div>
                    </div>

                    <div
                        className="col-md-12"
                    >
                        <label
                            htmlFor="permissoes"
                            className="form-label"
                        >
                            Permissoes
                        </label>
                        <select
                            className="form-select"
                            defaultValue={""}
                            id="permissoes"
                            required
                            {...register("permissoes", 
                                {required: "Selecione"}
                            )}
                        >
                            <option value={""}>
                                Selecione o Tipo
                            </option>
                            <option value={"admin"}>
                                Admin
                            </option>
                            <option value={"colaborador"}>
                                Colaborador
                            </option>
                        </select>
                        <div className="invalid-feedback">
                            {errors.permissoes && errors.permissoes.message}
                        </div>
                    </div>

                    <div
                        className="col-md-12"
                    >
                        <label
                            htmlFor="password"
                            className="form-label"
                        >
                            SEnha
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Dephay"
                            id="password"
                            required
                            {...register('password',
                                { required: 'Senha é obrigatorio' }
                            )}
                        />
                        <div className="invalid-feedback">
                            {errors.password && errors.password.message}
                        </div>
                    </div>

                    <div
                        className="col-md-12"
                    >
                        <button
                            type="submit"
                            className="btn btn-success"
                        >
                            Salvar
                        </button>
                    </div>
                </form>
            </NavBar>
        </>
    )
}