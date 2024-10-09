import styles from "./styles.module.css";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

interface IProps {
  children?: ReactNode;
}

export const NavBar = (props: IProps) => {
  return (
    <>
      <header
        className={`navbar navbar-dark sticky-top p-0 flex-md-nowrap ${styles.navbar}`}
      >
        <div className="d-flex align-items-center justify-content-between w-100">
          <a
            className="navbar-brand col-md-3 col-lg-2 me-0 px-3"
            href="/dashboard"
          >
            <div className={styles.logo}>
              <img src="/logo.png" alt="" />
            </div>
          </a>

          <div className="d-flex justify-content-end align-items-center">
            <div className="d-flex me-3">
              <Link className="nav-link me-3" to={"/dashboard"}>
                Início
              </Link>
              <Link className="nav-link me-3" to={"/usuarios"}>
                Sobre Nós
              </Link>
              <Link className="nav-link me-3" to={"/historicos"}>
                Históricos
              </Link>
              <Link className="nav-link me-3" to={"/voluntarios"}>
                Voluntários
              </Link>
              <Link className="nav-link me-3" to={"/galeria"}>
                Galeria
              </Link>

              <Link className="nav-link me-3" to={"/doacao"}>
               Doe Agora
              </Link>
            </div>

            <div className="input-group rounded" style={{ width: "200px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar..."
                style={{ width: "150px" }}
              />
              <button className="btn btn-outline-success" type="button">
                <FaSearch />
              </button>
            </div>
          </div>

          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <Link
                className="nav-link text-success"
                to={"/"}
                onClick={() => localStorage.removeItem("americanos.token")}
              >
                Sair
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {props.children}
        </main>
      </div>
    </>
  );
};
