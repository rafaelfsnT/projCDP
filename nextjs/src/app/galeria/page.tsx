"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavBar } from "../components/NavBar";
import { Title, GaleriaItem, Image, Text, Espacamento } from "./style";

export default function Galeria() {
  const [galerias, setGalerias] = useState<any[]>([]);
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

  return (
    <>
      <NavBar />
      <div className="container">
        {/* Verifica se as galerias estão carregadas antes de mapear */}
        {galerias.length > 0 ? (
          galerias.map((galeria) => (
            <Espacamento key={galeria.id} className="row">
              <div className="col-md-12 text-center">
                <GaleriaItem>
                  {/* Imagem da galeria */}
                  <Image src={`/storage/avatars/${galeria.avatar}`} alt={galeria.titulo} />

                  {/* Título da galeria */}
                  <h2>{galeria.titulo}</h2>

                  {/* Descrição da galeria */}
                  <Text>{galeria.descricao}</Text>
                </GaleriaItem>
              </div>
            </Espacamento>
          ))
        ) : (
          <p>Carregando galerias...</p>
        )}
      </div>
    </>
  );
}
