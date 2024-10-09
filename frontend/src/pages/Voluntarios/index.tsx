import { useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { IToken } from "../../interfaces/token";
import { verificaTokenExpirado } from "../../services/token";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
export default function Voluntarios() {
  const navigate = useNavigate();

  useEffect(() => {
    let lsToken = localStorage.getItem("americanos.token");

    let token: IToken | null = null;

    if (typeof lsToken === "string") {
      token = JSON.parse(lsToken);
    }

    if (!token || verificaTokenExpirado(token.accessToken)) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <NavBar>
        <div className={`container-fluid ${styles.tittle}`}>
          <div className="row">
            <div className="col-4">
              <img src="../../public/image.jpg" alt="Imagem ilustrativa" 
              style={{
                width: "100%",
                height: "auto"
              }}/>
            </div>

            <div className="col-8" style={{textAlign: "center"}}>
              <h1>Seja um Voluntariado (a)</h1>
              <p>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                e os embaralhou para fazer um livro de modelos de tipos.
              </p>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  navigate("/usuarios/criar");
                }}
              >
                Quero Ser Voluntário(a)
              </button>
            </div>
          </div>
        </div>
        <h1 style={{ textAlign: "center", paddingTop: "20px" }}>
          Porque ser um Voluntariado(a) ?
        </h1>
      </NavBar>
    </>
  );
}
