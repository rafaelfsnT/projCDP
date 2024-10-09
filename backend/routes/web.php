<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HistoricoController;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/historicos', [HistoricoController::class, 'index'])->name('historicos.index');
Route::post('/historicos', [HistoricoController::class, 'store'])->name('historicos.store');
