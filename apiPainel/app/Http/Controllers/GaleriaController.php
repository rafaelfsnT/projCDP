<?php

namespace App\Http\Controllers;

use App\Models\Galeria;
use Illuminate\Http\Request;

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
        $galeria = Galeria::find($id);
    if ($galeria) {
        $galeria->delete();
        return response()->json(['message' => 'Galeria deletada com sucesso.']);
    }
    return response()->json(['message' => 'Galeria não encontrada.'], 404);
    }
}
