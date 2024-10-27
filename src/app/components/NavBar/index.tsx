"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { FaSignOutAlt, FaSearch } from "react-icons/fa";
import { CustomNavbar, Logo, SearchInput } from "./style";

interface IProps {
  children?: ReactNode;
}

export const NavBar = (props: IProps) => {
  return (
    <>
      <CustomNavbar className="navbar navbar-light sticky-top p-0 flex-md-nowrap">
        <div className="d-flex align-items-center justify-content-between w-100">
          <Link href="/" className="navbar-brand col-md-3 col-lg-2 me-0 px-3">
            <Logo>
              <img src="/logo.png" alt="Logo" />
            </Logo>
          </Link>

          <div className="d-flex justify-content-end align-items-center">
            <div className="d-flex me-3">
              <Link href="/" className="nav-link me-3">Início</Link>
              <Link href="/sobre" className="nav-link me-3">Sobre Nós</Link>
              <Link href="/historicos" className="nav-link me-3">Históricos</Link>
              <Link href="/voluntarios" className="nav-link me-3">Voluntários</Link>
              <Link href="/galeria" className="nav-link me-3">Galeria</Link>
              <Link href="/doacao" className="nav-link me-3">Doe Agora</Link>
            </div>

            <SearchInput className="input-group" style={{ width: "300px" }}>
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar..."
              />
              <button className="btn" type="button">
                <FaSearch style={{ fontSize: "1.25rem" }} />
              </button>
            </SearchInput>
          </div>

          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <Link
                href="/"
                className="nav-link"
                style={{ color: "#8fbd31" }}
                onClick={() => localStorage.removeItem("americanos.token")}
              >
                <FaSignOutAlt /> Sair
              </Link>
            </div>
          </div>
        </div>
      </CustomNavbar>

      <div className="container-fluid">
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {props.children}
        </main>
      </div>
    </>
  );
};
