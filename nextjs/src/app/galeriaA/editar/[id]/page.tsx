'use client';
import { useEffect, useState } from "react";
import { useRouter, useParams  } from 'next/navigation';
import axios from "axios";
import { NavBarAdmin } from "../../../components/NavBarAdmin";
import { Title, FormContainer, FormGroup, Input, Textarea, SubmitButton } from './style';

export default function EditarGaleria() {
  const router = useRouter();
  const { id } = useParams();
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [avatar, setAvatar] = useState<File | null>(null);

  useEffect(() => {
    if (!id) return; // Verifique se o id está disponível

    const fetchGaleria = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/galerias/${id}`);
        const { titulo, descricao, avatar } = response.data;
        setTitulo(titulo);
        setDescricao(descricao);
        // Defina o avatar se necessário, pode ser uma URL da imagem
      } catch (error) {
        console.error("Erro ao carregar dados da galeria", error);
      }
    };

    fetchGaleria();
  }, [id]); // Certifique-se de executar isso sempre que o id mudar

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(e.target.files[0]); // Salva o arquivo de imagem no estado
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descricao', descricao);
    if (avatar) {
      formData.append('avatar', avatar);
    }

    try {
      const response = await axios.put(`http://localhost:8000/api/galerias/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('Galeria atualizada com sucesso!');
        router.push('/galeriaA');
      }
    } catch (error) {
      console.error('Erro ao atualizar galeria:', error);
      alert('Erro ao atualizar galeria.');
    }
  };

  return (
    <>
      <NavBarAdmin />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ padding: '20px', width: '100%', maxWidth: '800px' }}>
          <FormContainer>
            <Title>Editar Galeria Casa da Paz</Title>

            <form onSubmit={handleSubmit}>
              <FormGroup>
                <label htmlFor="titulo" className="form-label">Título</label>
                <Input
                  type="text"
                  id="titulo"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="descricao" className="form-label">Descrição</label>
                <Textarea
                  id="descricao"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  rows={3}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="avatar" className="form-label">Avatar</label>
                <Input
                  type="file"
                  id="avatar"
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </FormGroup>

              <SubmitButton type="submit">Salvar Alterações</SubmitButton>
            </form>
          </FormContainer>
        </div>
      </div>
    </>
  );
}
