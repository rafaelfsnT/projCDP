import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

export const NavBar = (props: IProps) => {
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a
          className="navbar-brand col-md-3 col-lg-2 me-0 px-3"
          href="/dashboard"
        >
          Casa Da Paz
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="w-100"></div>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3" href="#"></a>

            <Link
              className={"nav-link"}
              to={"/"}
              onClick={() => localStorage.removeItem("americanos.token")}
            >
              Sair
            </Link>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className={`nav-link`} to={"/dashboard"}>
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link`} to={"/usuarios"}>
                    Usuários
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link`} to={"/historicos"}>
                    Históricos
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {props.children}
          </main>
        </div>
      </div>
    </>
  );
};
