import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json(); // Obtém os dados do corpo da requisição
    
    // Aqui você pode processar os dados ou salvar em um banco de dados
    console.log(formData);  // Exemplo de log para verificar os dados

    // Supondo que a operação tenha sido bem-sucedida
    return NextResponse.json({ message: 'Dados salvos com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao salvar os dados:', error);
    return NextResponse.json({ message: 'Erro ao salvar os dados.' }, { status: 500 });
  }
}
