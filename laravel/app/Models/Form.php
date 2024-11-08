<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    use HasFactory;

    protected $table = 'forms'; // Define o nome da tabela
    protected $fillable = [
        'nome',
        'endereco',
        'cidade',
        'email',
        'telefone',
        'voluntariado',
    ];
}
