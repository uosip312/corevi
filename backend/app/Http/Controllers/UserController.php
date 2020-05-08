<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use DB;

class UserController extends Controller
{
    public function verUsers()
    {
        $query = "SELECT id, user, pass, name, role FROM users ORDER BY name ASC";
        $result = DB::select($query);
        return $result;
    }

    public function seleccionarUser(Request $r)
    {
        $query = "SELECT id, user, pass, name, role FROM users WHERE id=$r->id";
        $result = DB::select($query);
        return $result;
    }

    public function eliminarUser(Request $r)
    {
        $query = "DELETE FROM users WHERE id=$r->id";
        $result = DB::delete($query);
        if (!empty($result)) {
            return ['resultado' => true, 'mensaje' => 'EL USUARIO SE HA ELIMINADO EXITOSAMENTE'];
        } else {
            return ['resultado' => false, 'mensaje' => 'Al parecer hubo un error con el registro'];
        }
    }

    public function actualizarUser(Request $r)
    {
        $pass = "";
        if (empty($r->user) || empty($r->pass) || empty($r->name) || empty($r->role)) {
            return ['resultado' => false, 'mensaje' => 'TODOS LOS CAMPOS SON OBLIGATORIOS'];
        } else {
            if($r->pass == "poner contraseña"){
                $query = "UPDATE users SET user = '$r->user',name='$r->name',role='$r->role' WHERE id = $r->id";
                $result = DB::update($query);
            }else {
                $pass = Hash::make($r->pass);
                $query = "UPDATE users SET user = '$r->user',pass='$pass',name='$r->name',role='$r->role' WHERE id = $r->id";
                $result = DB::update($query);

            }
            if (!empty($result)) {
                return ['resultado' => true, 'mensaje' => 'EL USUARIO SE ACTUALIZO EXITOSAMENTE'];
            } else {
                return ['resultado' => false, 'mensaje' => 'Al parecer hubo un error con el registro'];
            }
        }
    }

    public function crearUser(Request $r)
    {
        $pass = "";
        if (empty($r->user) || empty($r->pass) || empty($r->name) || empty($r->role)) {
            return ['resultado' => false, 'mensaje' => 'TODOS LOS CAMPOS SON OBLIGATORIOS'];
        } else {
            $pass = Hash::make($r->pass);
            $query = "INSERT INTO users (user, pass, name,role) VALUES ('$r->user','$pass','$r->name','$r->role')";
            $result = DB::insert($query);
            if (!empty($result)) {
                return ['resultado' => true, 'mensaje' => 'EL USUARIO SE HA CREADO EXITOSAMENTE'];
            } else {
                return ['resultado' => false, 'mensaje' => 'Al parecer hubo un error con el registro'];
            }
        }
    }

}
