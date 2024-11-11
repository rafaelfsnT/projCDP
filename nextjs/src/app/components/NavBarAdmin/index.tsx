import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import {
  FaUser,
  FaHome,
  FaInfoCircle,
  FaHistory,
  FaHandsHelping,
  FaImages,
  FaPhone,
  FaDonate,
} from "react-icons/fa";
import {
  Sidebar,
  SidebarLogo,
  SidebarMenu,
  SidebarItem,
  SidebarHighlightButton,
} from "./style"; // Importar o novo estilo para a sidebar

interface IProps {
  children?: ReactNode;
}

export const NavBarAdmin = (props: IProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Sidebar className="sidebar d-flex flex-column p-3">
        <Link href="/" className="navbar-brand mb-3">
          <SidebarLogo>
            <img src="/logo.png" alt="Logo" />
          </SidebarLogo>
        </Link>

        <SidebarMenu>
          <SidebarItem>
            <Link href="/" className="nav-link">
              <FaHome className="me-2" />
              Início
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link href="/sobre" className="nav-link">
              <FaInfoCircle className="me-2" />
              Sobre Nós
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link href="/historicos" className="nav-link">
              <FaHistory className="me-2" />
              Históricos
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link href="/voluntarios" className="nav-link">
              <FaHandsHelping className="me-2" />
              Voluntários
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link href="/galeria" className="nav-link">
              <FaImages className="me-2" />
              Galeria
            </Link>
          </SidebarItem>
          <SidebarItem>
            <Link href="/contato" className="nav-link">
              <FaPhone className="me-2" />
              Contato
            </Link>
          </SidebarItem>
          <SidebarItem>
            <SidebarHighlightButton href="/doacao" className="mt-3">
              <FaDonate className="me-2" />
              Doe Agora
            </SidebarHighlightButton>
          </SidebarItem>
          <SidebarItem className="mt-auto">
            <Link href="/login" className="nav-link">
              <FaUser className="me-2" />
              Login
            </Link>
          </SidebarItem>
        </SidebarMenu>
      </Sidebar>

      <div className="container-fluid" style={{ marginLeft: "250px" }}>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {props.children}
        </main>
      </div>
    </>
  );
};