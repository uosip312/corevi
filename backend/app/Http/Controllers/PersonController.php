<?php

namespace App\Http\Controllers;
use App\Models\Person;
use Illuminate\Http\Request;
use DB;
class PersonController extends Controller
{
    public function actualizarPerson(Request $r){
        if (empty($r->nombre) || empty($r->cedula)){
            return ['resultado'=>false,'mensaje'=>'EL NOMBRE Y LA CEDULA SON OBLIGATORIOS'];
        } else {
            $query = "UPDATE person SET nombre = '$r->nombre',cedula='$r->cedula',telefono='$r->telefono' WHERE id = $r->id"; 
            $person = DB::update($query);
            if(!empty($person))
            {
                return ['resultado'=>true,'mensaje'=>'LA PERSONA SE ACTUALIZO EXITOSAMENTE'];
            }else
            {
                return ['resultado'=>false,'mensaje'=>'Al parecer hubo un error con el registro'];
            }
        }
    } 

    public function crearPerson(Request $r){
        if (empty($r->nombre) || empty($r->cedula)){
            return ['resultado'=>false,'mensaje'=>'EL NOMBRE Y LA CEDULA SON OBLIGATORIOS'];
        } else {
            $query = "INSERT INTO person (nombre, cedula, telefono) VALUES ('$r->nombre','$r->cedula','$r->telefono')";
            $person = DB::insert($query);
            if(!empty($person))
            {
                return ['resultado'=>true,'mensaje'=>'LA PERSONA SE HA CREADO EXITOSAMENTE'];
            }else
            {
                return ['resultado'=>false,'mensaje'=>'Al parecer hubo un error con el registro'];
            }
        }
    }

    public function verPerson(){
        $query = "SELECT id, nombre, cedula, telefono FROM person";
        $person = DB::select($query);
        return $person;
    }

    public function seleccionarPerson(Request $r){
        $query = "SELECT id, nombre, cedula, telefono FROM person WHERE id=$r->id";
        $person = DB::select($query);
        return $person;
    }

    public function eliminarPerson(Request $r){
        $query = "DELETE FROM person WHERE id=$r->id";
        $person = DB::delete($query);
        if(!empty($person))
        {
            return ['resultado'=>true,'mensaje'=>'LA PERSONA SE HA ELIMINADO EXITOSAMENTE'];
        }else
        {
            return ['resultado'=>false,'mensaje'=>'Al parecer hubo un error con el registro'];
        }
    }

    
}
