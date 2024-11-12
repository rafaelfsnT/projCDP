"use client";
import { useEffect, useState } from "react";
import { NavBarAdmin } from "../components/NavBarAdmin";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Title, GaleriaItem, Image, Text, Espacamento } from "./style";
import { verificaTokenExpirado } from "../../services/token";

export default function GaleriaA() {
  const router = useRouter();
  const [galerias, setGalerias] = useState<any[]>([]);
  useEffect(() => {
    let lsToken = localStorage.getItem("americanos.token");

    let token: IToken | null = null;

    if (typeof lsToken === "string") {
      token = JSON.parse(lsToken);
    }
    if (!token || verificaTokenExpirado(token.accessToken)) {
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    const fetchGalerias = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/galerias");
        setGalerias(response.data);
      } catch (error) {
        console.error("Erro ao carregar galerias:", error);
      }
    };

    fetchGalerias();
  }, []);

   const handleDelete = async (id: number) => {
    try {
      const confirmation = window.confirm("Tem certeza que deseja deletar esta galeria?");
      if (confirmation) {
        const response = await axios.delete(`http://localhost:8000/api/galeria/${id}`);
        if (response.status === 200) {
          alert('Galeria deletada com sucesso!');
          setGalerias(galerias.filter(galeria => galeria.id !== id));
        }
      }
    } catch (error) {
      console.error('Erro ao deletar galeria:', error);
      alert('Erro ao deletar galeria.');
    }
  };

  const handleEdit = (id: number) => {
    router.push(`/galeriaA/editar/${id}`);
  };

  return (
    <>
      <NavBarAdmin />
      <div className="container">
        <Title>Galeria</Title>
        {/* Verifica se as galerias estão carregadas antes de mapear */}
        {galerias.length > 0 ? (
          galerias.map((galeria) => (
            <Espacamento key={galeria.id} className="row">
              <div className="col-md-12 text-center">
                <GaleriaItem>
                  {/* Imagem da galeria */}
                  <Image
                    src={`/storage/avatars/${galeria.avatar}`}
                    alt={galeria.titulo}
                    className="card-img-top"
                  />

                  {/* Título da galeria */}
                  <h2>{galeria.titulo}</h2>

                  {/* Descrição da galeria */}
                  <Text>{galeria.descricao}</Text>

                  {/* Botões de Editar e Deletar */}
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEdit(galeria.id)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(galeria.id)}
                    >
                      Deletar
                    </button>
                  </div>
                </GaleriaItem>
              </div>
            </Espacamento>
          ))
        ) : (
          <p>Nenhuma galeria encontrada.</p>
        )}
      </div>
    </>
  );
}
