<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Form;

class FormController extends Controller
{
    public function saveFormData(Request $request)
    {
        // Validação dos dados recebidos
        $validated = $request->validate([
            'nome' => 'required|string',
            'endereco' => 'required|string',
            'cidade' => 'required|string',
            'email' => 'required|email',
            'telefone' => 'required|string',
            'voluntariado' => 'required|string',
        ]);

        // Criação de um novo registro na tabela 'forms'
        try {
            $form = Form::create($validated);
            return response()->json(['message' => 'Dados salvos com sucesso!', 'data' => $form], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao salvar os dados.', 'error' => $e->getMessage()], 500);
        }
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
