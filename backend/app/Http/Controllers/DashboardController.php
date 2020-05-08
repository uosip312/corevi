<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class DashboardController extends Controller
{
    public function contarPerson()
    {
        $query = "SELECT COUNT(nombre) FROM person";
        $result = DB::select($query);
        return $result;
    }

    public function contarDepartment()
    {
        $query = "SELECT COUNT(department) FROM department";
        $result = DB::select($query);
        return $result;
    }

    public function contarVisit()
    {
        $query = "SELECT COUNT(idPersona) FROM visits";
        $result = DB::select($query);
        return $result;
    }

}
