"use client";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { FaUser, FaSearch } from "react-icons/fa";
import {
  CustomNavbar,
  Logo,
  SearchInput,
  HighlightButton,
  Login,
} from "./style"; // Importar o novo estilo

interface IProps {
  children?: ReactNode;
}

export const NavBar = (props: IProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Defina o estado para "true" após o primeiro render no cliente
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Retorne null ou um conteúdo estático enquanto a página é renderizada no servidor
    return null;
  }
  return (
    <>
      <CustomNavbar className="navbar navbar-light sticky-top p-0 flex-md-nowrap">
        <div className="d-flex align-items-center justify-content-between w-100">
          <Link href="/" className="navbar-brand col-md-3 col-lg-2 me-0 px-3">
            <Logo>
              <img src="/logo.png" alt="Logo" />
            </Logo>
          </Link>

          <div className="d-flex justify-content-center align-items-center w-100">
            <div className="d-flex justify-content-center align-items-center">
              <Link href="/" className="nav-link me-3">
                Início
              </Link>
              <Link href="/sobre" className="nav-link me-3">
                Sobre Nós
              </Link>
              <Link href="/historicos" className="nav-link me-3">
                Históricos
              </Link>
              <Link href="/voluntarios" className="nav-link me-3">
                Voluntários
              </Link>
              <Link href="/galeria" className="nav-link me-3">
                Galeria
              </Link>
              <Link href="/contato" className="nav-link me-3">
                Contato
              </Link>
              {/* Botão Doe Agora */}
              <HighlightButton as="a" href="/doacao" className="me-3">
                Doe Agora
              </HighlightButton>
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

          <Login>
            <Link href="/login" className="nav-link me-3">
              <FaUser />
            </Link>
          </Login>
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
