<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([

    'middleware' => 'api'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

    Route::put('actualiza-person', 'PersonController@actualizarPerson');
    Route::post('crear-person', 'PersonController@crearPerson');
    Route::get('ver-person', 'PersonController@verPerson');
    Route::get('seleccionar-person', 'PersonController@seleccionarPerson');
    Route::delete('eliminar-person', 'PersonController@eliminarPerson');

    Route::put('actualiza-department', 'DepartmentController@actualizarDepartment');
    Route::post('crear-department', 'DepartmentController@crearDepartment');
    Route::get('ver-department', 'DepartmentController@verDepartment');
    Route::get('seleccionar-department', 'DepartmentController@seleccionarDepartment');
    Route::delete('eliminar-department', 'DepartmentController@eliminarDepartment');

});
