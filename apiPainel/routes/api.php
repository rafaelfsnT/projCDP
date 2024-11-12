<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GaleriaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login', [AuthController::class, 'login']);

Route::post('/galeria', [GaleriaController::class, 'store']);
Route::get('/galerias', [GaleriaController::class, 'index']);
