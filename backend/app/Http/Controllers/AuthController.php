<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\User;//esta es la ruta actual de tu

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $r)
    {
        $pass = "";
        if ( empty( $r->user ) || empty( $r->pass) )
        {
            return response()->json(['error' => 'Falta Usuario o Contraseña'], 401);
        }
        //vamos a buscar el usuario introducido para validar contra el pass que enviaron.
        $user = User::where('user',$r->user)->first(); //hice una consulta con el where, con el first obtuve el primer registro
        //validamos si trajo dato, si no trajo erro generico.
        if (empty($user->user) ) { //si viene en blanco entonces no debe existir ese objeto user
            return response()->json(['error' => 'Usuario o Contraseña incorrecto'], 401);
        }
        $pass = Hash::make($r->pass);
        if(Hash::check($r->pass, $user->pass)){
                $_token = JWTAuth::fromUser($user); //aqui simplemente creo el token con la informacion de la tabla de usuario
                return response()->json(['token' => $_token, 'userId' => $user->id, 'name' => $user->name, 'role' => $user->role], 200);
        } //si le doy a actualizar ahi va a hacerle un hash al que ya existe o que?
        else{
            return response()->json(['error' => 'Usuario o Contraseña incorrecto'], 401);
        }


    }



    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

}
