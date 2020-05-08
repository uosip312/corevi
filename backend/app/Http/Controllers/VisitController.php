<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class VisitController extends Controller
{
    public function verVisits()
    {
        $query = "SELECT visits.id, person.nombre, department.department,
                status.status, visits.idUser, visits.Fecha, visits.HoraEntrada,
                visits.HoraSalida, visits.Observacion
                FROM visits
                INNER JOIN person ON visits.idPersona=person.id
                INNER JOIN department ON visits.idDepartamento=department.id
                INNER JOIN status ON visits.idEstatus=status.id
                GROUP BY visits.id, person.nombre, department.department, status.status, visits.idUser,
                visits.Fecha, visits.HoraEntrada,
                visits.HoraSalida, visits.Observacion";
        $visit = DB::select(DB::raw($query));
        return $visit;
    }

    public function eliminarVisit(Request $r)
    {
        $query = "DELETE FROM visits WHERE id=$r->id";
        $visit = DB::delete($query);
        if (!empty($visit)) {
            return ['resultado' => true, 'mensaje' => 'EL REGISTRO SE HA ELIMINADO EXITOSAMENTE'];
        } else {
            return ['resultado' => false, 'mensaje' => 'Al parecer hubo un error con el registro'];
        }
    }

    public function seleccionarVisit(Request $r)
    {
        $query = "SELECT * FROM visits WHERE id=$r->id";
        $visit = DB::select($query);
        return $visit;
    }

    public function verEstatus()
    {
        $result = DB::select('select * from status');
        return $result;
    }

    public function actualizarVisit(Request $r)
    {
        if (empty($r->idPersona) || empty($r->idDepartamento)) {
            return ['resultado' => false, 'mensaje' => 'LA PERSONA Y DEPARTAMENTO SON OBLIGATORIOS'];
        } else {
            $query = "UPDATE visits SET idPersona = '$r->idPersona',idDepartamento='$r->idDepartamento',idEstatus='$r->idEstatus',
                      Fecha='$r->Fecha',HoraEntrada='$r->HoraEntrada',HoraSalida='$r->HoraSalida',Observacion='$r->Observacion',
                      idUser='$r->idUser'
                      WHERE id = $r->id";
            $visit = DB::update($query);
            if (!empty($visit)) {
                return ['resultado' => true, 'mensaje' => 'EL REGISTRO SE ACTUALIZO EXITOSAMENTE'];
            } else {
                return ['resultado' => false, 'mensaje' => 'Al parecer hubo un error con el registro'];
            }
        }
    }

    public function crearVisit(Request $r)
    {
        if (empty($r->idPersona) || empty($r->idDepartamento)) {
            return ['resultado' => false, 'mensaje' => 'LA PERSONA Y DEPARTAMENTO SON OBLIGATORIOS'];
        } else {
            $query = "INSERT INTO visits (idPersona,idDepartamento,idEstatus,idUser,Fecha,HoraEntrada,HoraSalida,Observacion) VALUES ('$r->idPersona','$r->idDepartamento','$r->idEstatus',$r->idUser,'$r->Fecha','$r->HoraEntrada','$r->HoraSalida:00','$r->Observacion')";
            $visit = DB::insert($query);
            if (!empty($visit)) {
                return ['resultado' => true, 'mensaje' => 'EL REGISTRO SE HA CREADO EXITOSAMENTE'];
            } else {
                return ['resultado' => false, 'mensaje' => 'Al parecer hubo un error con el registro'];
            }
        }
    }

}
