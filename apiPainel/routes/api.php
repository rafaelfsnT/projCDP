<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\GaleriaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', [AuthController::class, 'login']);

Route::post('/form', [FormController::class, 'store']);

Route::get('/galerias', [GaleriaController::class, 'index']);

Route::get('/galerias/{id}', [GaleriaController::class, 'edit']);

Route::post('/galerias', [GaleriaController::class, 'store']);

Route::put('/galerias/{id}', [GaleriaController::class, 'update']);

Route::delete('/galerias/{id}', [GaleriaController::class, 'destroy']);
