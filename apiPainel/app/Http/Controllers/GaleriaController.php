<?php

namespace App\Http\Controllers;

use App\Models\Galeria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GaleriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $galerias = Galeria::all();
        return response()->json($galerias);
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


        $request->validate([
            'titulo' => 'required|string|max:255',
            'descricao' => 'required|string',
            'avatar' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Armazenar a imagem
        $avatarPath = $request->file('avatar')->store('avatars', 'public');

        // Criar a galeria no banco de dados
        $galeria = Galeria::create([
            'titulo' => $request->titulo,
            'descricao' => $request->descricao,
            'avatar' => $avatarPath,
        ]);
        if ($request->hasFile('avatar')) {
            $avatar = $request->file('avatar');
            $avatarName = $avatar->getClientOriginalName();
            $avatarPath = $avatar->storeAs('public/avatars', $avatarName);

            // Salve apenas o nome do arquivo no banco
            $galeria->avatar = $avatarName;
            $galeria->save();
        }

        return response()->json(['message' => 'Galeria criada com sucesso!', 'data' => $galeria], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $galeria = Galeria::find($id);

        if ($galeria) {
            return response()->json($galeria, 200);  // Retorna os dados da galeria
        }

        return response()->json(['message' => 'Galeria não encontrada.'], 404);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $galeria = Galeria::find($id);

        if ($galeria) {
            return response()->json($galeria, 200);
        }

        return response()->json(['message' => 'Galeria não encontrada.'], 404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'titulo' => 'required|string|max:255',
            'descricao' => 'required|string',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $galeria = Galeria::find($id);

        if (!$galeria) {
            return response()->json(['message' => 'Galeria não encontrada.'], 404);
        }

        // Atualiza os campos título e descrição
        $galeria->titulo = $request->titulo;
        $galeria->descricao = $request->descricao;

        // Verifica se uma nova imagem foi enviada
        if ($request->hasFile('avatar')) {
            // Exclui a imagem antiga, se houver
            Storage::disk('public')->delete($galeria->avatar);

            // Armazena a nova imagem
            $avatarPath = $request->file('avatar')->store('avatars', 'public');
            $galeria->avatar = $avatarPath;
        }

        // Salva as alterações no banco de dados
        $galeria->save();

        return response()->json(['message' => 'Galeria atualizada com sucesso!', 'data' => $galeria], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $galeria = Galeria::find($id);

        if ($galeria) {
            // Excluir o arquivo da imagem do servidor
            Storage::disk('public')->delete($galeria->avatar);

            // Excluir a galeria do banco de dados
            $galeria->delete();

            return response()->json(['message' => 'Galeria deletada com sucesso.'], 200);
        }

        return response()->json(['message' => 'Galeria não encontrada.'], 404);
    }
}
