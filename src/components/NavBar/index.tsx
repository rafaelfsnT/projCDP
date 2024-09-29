import styles from "./styles.module.css";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

interface IProps {
  children: ReactNode;
}

export const NavBar = (props: IProps) => {
  return (
    <>
      <header
        className={`navbar navbar-dark sticky-top bg-success flex-md-nowrap p-0 ${styles.navbar}`}
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

          <div className="navbar-nav d-flex me-auto">
            <Link className="nav-link me-3" to={"/dashboard"}>
              Dashboard
            </Link>
            <Link className="nav-link me-3" to={"/usuarios"}>
              Usuários
            </Link>
            <Link className="nav-link me-3" to={"/historicos"}>
              Históricos
            </Link>
          </div>
          <div className="input-group me-3">
            <input
              type="text"
              className="form-control"
              placeholder="Pesquisar..."
            />
            <button className="btn btn-outline-light" type="button">
              <FaSearch />
            </button>
          </div>

          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <Link
                className="nav-link"
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
