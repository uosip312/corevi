<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class DashboardController extends Controller
{
    public function contarPerson()
    {
        $query = "SELECT COUNT(nombre) AS personas FROM person";
        $result = DB::select(DB::raw($query));
        return response()->json($result);
    }

    public function contarDepartment()
    {
        $query = "SELECT COUNT(department) AS departamentos FROM department";
        $result = DB::select($query);
        return $result;
    }

    public function contarVisit()
    {
        $query = "SELECT COUNT(idPersona) AS visitas FROM visits";
        $result = DB::select($query);
        return $result;
    }
    public function contarUser()
    {
        $query = "SELECT COUNT(user) AS usuarios FROM users";
        $result = DB::select($query);
        return $result;
    }

    public function visitPendientes()
    {
        $query = "SELECT visits.id, person.nombre, department.department,
                status.status, visits.idUser, visits.Fecha, visits.HoraEntrada,
                visits.HoraSalida, visits.Observacion
                FROM visits
                INNER JOIN person ON visits.idPersona=person.id
                INNER JOIN department ON visits.idDepartamento=department.id
                INNER JOIN status ON visits.idEstatus=status.id
                WHERE visits.idEstatus = 1 OR visits.idEstatus = 2
                GROUP BY visits.id, person.nombre, department.department, status.status, visits.idUser,
                visits.Fecha, visits.HoraEntrada,
                visits.HoraSalida, visits.Observacion";
        $result = DB::select($query);
        return $result;
    }

    public function contarVisitDepartment()
    {
        $query = "SELECT department.department, COUNT(visits.idDepartamento) AS 'visitas'
                FROM visits
                INNER JOIN department ON visits.idDepartamento=department.id
                GROUP BY department.department";
        $result = DB::select($query);
        return $result;
    }
}
