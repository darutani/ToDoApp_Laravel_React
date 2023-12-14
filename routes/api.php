<?php

use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\TodoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::apiResource('tasks', TaskController::class);
Route::patch('task/update-done/{task}', [TaskController::class, 'updateDone']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
