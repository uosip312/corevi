<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    protected $table="person";//esto es para hacerlo explicito si no lo dejo asi y el entiende que la tabal se llama asi
    //protected $primaryKey="id_almacen_h";  //por defecto laravel toma el nombre de la columna id como primary
    public $timestamps = false;

}
