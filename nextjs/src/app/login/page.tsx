"use client";
import {
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Loading } from "../components/Loading";
import { Toast } from "../components/Toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Border, Button, Input, Main } from "./styles";

export default function Login() {
  const router = useRouter(); // Usando useRouter para navegação no Next.js
  const refForm = useRef<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [isToast, setIsToast] = useState(false);

  const submitForm = useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();
  
      if (refForm.current.checkValidity()) {
        setIsLoading(true);
        const target = event.target as typeof event.target & {
          email: { value: string };
          senha: { value: string };
        };
  
        axios.post('http://localhost:8000/api/login',
          {
              email: target.email.value,
              password: target.senha.value,
          }
      ).then((resposta) => { //salva os dados da requisição na localStorage
          console.log(resposta.data)

          localStorage.setItem(
              'americanos.token',
              JSON.stringify(resposta.data)
          )

          router.push("/admin");
      })
          .catch((erro) => {
              console.log(erro)
              setIsLoading(false)
              setIsToast(true)
          })

  } else {
      refForm.current.classList.add('was-validated')
  }
}, [router])
  return (
    <>
      <Loading visible={isLoading} />
      <Toast
        message="Credenciais Inválidas"
        onClose={() => {
          setIsToast(false);
        }}
        show={isToast}
        color="danger"
      />

      <Main>
        <Border>
          <div className="d-flex flex-column align-items-center">
            <h1 style={{ color: "#8fbd31" }}>Admin</h1>
            <p className="text-secondary" style={{ fontSize: "1.3rem" }}>
              Preencha os campos para logar
            </p>
          </div>
          <hr />

          <form
            className="needs-validation align-items-center"
            noValidate
            onSubmit={submitForm}
            ref={refForm}
          >
            <div className="col-md-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Input
                type="email"
                placeholder="Digite seu email"
                id="email"
                required
              />
              <div className="invalid-feedback">
                Por favor, insira seu email
              </div>
            </div>
            <div className="col-md-12 mt-1">
              <label htmlFor="senha" className="form-label">
                Senha
              </label>
              <Input
                type="password"
                placeholder="Digite sua senha"
                id="senha"
                required
              />
              <div className="invalid-feedback">
                Por favor, insira sua senha
              </div>
            </div>
            <div className="col-md-12 mt-3">
              <Button type="submit" id="botao">
                Enviar
              </Button>
            </div>

            
          </form>
        </Border>
      </Main>
    </>
  );
}
