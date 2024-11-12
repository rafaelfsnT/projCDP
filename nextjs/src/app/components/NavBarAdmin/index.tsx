import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaImages, FaSignOutAlt, FaAngleDown, FaAngleUp, FaPlus } from "react-icons/fa";
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
  const router = useRouter();
  const [showAddButton, setShowAddButton] = useState(false);

    const handleGalleryClick = () => {
      setShowAddButton(prevState => !prevState);
    };

    const handleAddClick = () => {
        console.log("Adicionar nova galeria");
        router.push("/galeriaA/gerenciarA");
    };


  const handleLogout = () => {
    localStorage.removeItem("americanos.token");
    router.push("/"); // Redireciona para a página inicial após o logout
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Sidebar className="sidebar d-flex flex-column p-3">
        <Link href="/homeA" className="navbar-brand mb-3">
          <SidebarLogo>
            <img src="/logo.png" alt="Logo" />
          </SidebarLogo>
        </Link>

        <SidebarMenu>
        <SidebarHighlightButton>
                <Link href="/galeriaA" className="nav-link" onClick={handleGalleryClick}>
                    <FaImages className="me-2" />
                    Galeria
                    {showAddButton ? <FaAngleUp className="ms-2" /> : <FaAngleDown className="ms-2" />} {/* Alterna a setinha */}
                </Link>
            </SidebarHighlightButton>

            {/* Exibir o botão "Adicionar" condicionalmente */}
            {showAddButton && (
                <SidebarHighlightButton>
                    <button className="nav-link" onClick={handleAddClick} style={{ border: 'none', background: 'none', padding: 0 }}>
                    <FaPlus className="me-2" />  Adicionar
                    </button>
                </SidebarHighlightButton>
                  )}
       
           

          <div className="w-100"></div>
          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <a className="nav-link px-3" href="#"></a>

              <button
                className="nav-link"
                onClick={handleLogout}
                style={{ border: "none", background: "none", padding: 0,  color: '#8fbd31'}}
              >
                <FaSignOutAlt style={{ marginRight: "5px", color: '#8fbd31' }} /> Sair
              </button>
            </div>
          </div>
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
