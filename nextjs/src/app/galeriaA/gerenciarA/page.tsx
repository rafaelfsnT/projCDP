'use client';
import { useEffect, useState } from "react";
import { NavBarAdmin } from "../../components/NavBarAdmin";
import axios from "axios";
import { useRouter } from 'next/navigation';
import {  Title, FormContainer, FormGroup, Input, Textarea, SubmitButton } from './style';
import { verificaTokenExpirado } from "../../../services/token";

export default function GerenciarGaleriaA () {
  const router = useRouter();
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [avatar, setAvatar] = useState<File | null>(null);

  useEffect(() => {
    let lsToken = localStorage.getItem('americanos.token');

    let token: IToken | null = null;

    if (typeof lsToken === 'string') {
        token = JSON.parse(lsToken);
    }

    if (!token || verificaTokenExpirado(token.accessToken)) {
      router.push("/login");
    }
}, [router]);

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAvatar(e.target.files[0]);
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
      const response = await axios.post('http://localhost:8000/api/galerias', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('Galeria adicionada com sucesso!');
        router.push('/galeriaA');
      }
    } catch (error) {
      console.error('Erro ao salvar galeria:', error);
      alert('Erro ao salvar galeria.');
    }
  };

    return (
        <>
          <NavBarAdmin />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ padding: '20px', width: '100%', maxWidth: '800px' }}>
          <FormContainer>
            <Title>Galeria Casa da Paz</Title>

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
                  required
                />
              </FormGroup>

              <SubmitButton type="submit">Salvar Galeria</SubmitButton>
            </form>
          </FormContainer>
        </div>
      </div>

</>
);
}