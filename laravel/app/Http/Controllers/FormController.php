<?php

namespace App\Http\Controllers;

use App\Models\Form;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function saveFormData(Request $request)
    {
        // Validação dos dados recebidos
        $request->validate([
            'nome' => 'required|string|max:100',
            'endereco' => 'required|string|max:100',
            'cidade' => 'required|string|max:100',
            'email' => 'required|email|max:100',
            'telefone' => 'required|integer',
            'opcao' => 'nullable|string|max:100',
        ]);

        // Criar e salvar o registro no banco de dados
        $form = new Form();
        $form->nome = $request->nome;
        $form->endereco = $request->endereco;
        $form->cidade = $request->cidade;
        $form->email = $request->email;
        $form->telefone = $request->telefone;
        $form->opcao = $request->opcao; 

        $form->save();

        return response()->json(['message' => 'Dados salvos com sucesso!']);
    }

    public function index(){
        
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
