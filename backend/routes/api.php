<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('login', 'LoginController@login');

Route::put('actualiza-person','PersonController@actualizarPerson');
Route::post('crear-person','PersonController@crearPerson');
Route::get('ver-person','PersonController@verPerson');
Route::get('seleccionar-person','PersonController@seleccionarPerson');
Route::delete('eliminar-person','PersonController@eliminarPerson');

Route::put('actualiza-department','DepartmentController@actualizarDepartment');
Route::post('crear-department','DepartmentController@crearDepartment');
Route::get('ver-department','DepartmentController@verDepartment');
Route::get('seleccionar-department','DepartmentController@seleccionarDepartment');
Route::delete('eliminar-department','DepartmentController@eliminarDepartment');
