<?php

namespace App\Http\Controllers;
use App\Models\Department;
use Illuminate\Http\Request;
use DB;
class DepartmentController extends Controller
{
    public function actualizarDepartment(Request $r){
        $query = "UPDATE department SET descrip = '$r->descrip' WHERE id = $r->id"; 
        $department = DB::update($query);
        if(!empty($department))
        {
            return ['resultado'=>true,'mensaje'=>'EL DEPARTAMENTO SE ACTUALIZO EXITOSAMENTE'];
        }else
        {
            return ['resultado'=>false,'mensaje'=>'Al parecer hubo un error con el registro'];
        }
    } 

    public function crearDepartment(Request $r){
        $query = "INSERT INTO department (descrip) VALUES ('$r->descrip')";
        $department = DB::insert($query);
        if(!empty($department))
        {
            return ['resultado'=>true,'mensaje'=>'EL DEPARTAMENTO SE HA CREADO EXITOSAMENTE'];
        }else
        {
            return ['resultado'=>false,'mensaje'=>'Al parecer hubo un error con el registro'];
        }
    }

    public function verDepartment(){
        $query = "SELECT id, descrip FROM department";
        $department = DB::select($query);
        return $department;
    }

    public function seleccionarDepartment(Request $r){
        $query = "SELECT id, descrip FROM department WHERE id=$r->id";
        $department = DB::select($query);
        return $department;
    }

    public function eliminarDepartment(Request $r){
        $query = "DELETE FROM department WHERE id=$r->id";
        $department = DB::delete($query);
        if(!empty($department))
        {
            return ['resultado'=>true,'mensaje'=>'EL DEPARTAMENTO SE HA ELIMINADO EXITOSAMENTE'];
        }else
        {
            return ['resultado'=>false,'mensaje'=>'Al parecer hubo un error con el registro'];
        }
    }
}
