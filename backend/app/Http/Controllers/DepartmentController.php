<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class DepartmentController extends Controller
{
    public function actualizarDepartment(Request $r)
    {
        $query = "UPDATE department SET department = '$r->department' WHERE id = $r->id";
        $department = DB::update($query);
        if (!empty($department)) {
            return ['resultado' => true, 'mensaje' => 'EL DEPARTAMENTO SE ACTUALIZO EXITOSAMENTE'];
        } else {
            return ['resultado' => false, 'mensaje' => 'Al parecer hubo un error con el registro'];
        }
    }

    public function crearDepartment(Request $r)
    {
        $query = "INSERT INTO department (department) VALUES ('$r->department')";
        $department = DB::insert($query);
        if (!empty($department)) {
            return ['resultado' => true, 'mensaje' => 'EL DEPARTAMENTO SE HA CREADO EXITOSAMENTE'];
        } else {
            return ['resultado' => false, 'mensaje' => 'Al parecer hubo un error con el registro'];
        }
    }

    public function verDepartment()
    {
        $query = "SELECT id, department FROM department ORDER BY department ASC";
        $department = DB::select($query);
        return $department;
    }

    public function seleccionarDepartment(Request $r)
    {
        $query = "SELECT id, department FROM department WHERE id=$r->id";
        $department = DB::select($query);
        return $department;
    }

    public function eliminarDepartment(Request $r)
    {
        $query = "DELETE FROM department WHERE id=$r->id";
        $department = DB::delete($query);
        if (!empty($department)) {
            return ['resultado' => true, 'mensaje' => 'EL DEPARTAMENTO SE HA ELIMINADO EXITOSAMENTE'];
        } else {
            return ['resultado' => false, 'mensaje' => 'Al parecer hubo un error con el registro'];
        }
    }
}
