<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([

    'middleware' => 'api'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');

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

    Route::get('ver-visits', 'VisitController@verVisits');
    Route::delete('eliminar-visit', 'VisitController@eliminarVisit');
    Route::get('seleccionar-visit', 'VisitController@seleccionarVisit');
    Route::get('ver-estatus', 'VisitController@verEstatus');
    Route::put('actualizar-visit', 'VisitController@actualizarVisit');
    Route::post('crear-visit', 'VisitController@crearVisit');

    Route::put('actualiza-user', 'UserController@actualizarUser');
    Route::post('crear-user', 'UserController@crearUser');
    Route::get('ver-user', 'UserController@verUsers');
    Route::get('seleccionar-user', 'UserController@seleccionarUser');
    Route::delete('eliminar-user', 'UserController@eliminarUser');

    Route::get('contar-person', 'DashboardController@contarPerson');
    Route::get('contar-department', 'DashboardController@contarDepartment');
    Route::get('contar-visit', 'DashboardController@contarVisit');
    Route::get('contar-user', 'DashboardController@contarUser');
    Route::get('ver-vipendientes', 'DashboardController@visitPendientes');
    Route::get('contar-vide', 'DashboardController@contarVisitDepartment');
});
