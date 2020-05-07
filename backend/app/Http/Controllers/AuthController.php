<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
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
        if ( empty( $r->user ) || empty( $r->pass) )
        {
            return response()->json(['error' => 'Usuario o Contraseña incorrecto'], 401);
        }
        //vamos a buscar el usuario introducido para validar contra el pass que enviaron.
        $user = User::where('user',$r->user)->first(); //hice una consulta con el where, con el first obtuve el primer registro
        //validamos si trajo dato, si no trajo erro generico.
        if (empty($user->user) ) { //si viene en blanco entonces no debe existir ese objeto user
            return response()->json(['error' => 'Usuario o Contraseña incorrecto'], 401);
        }
        if($user->pass == $r->pass){
            $_token = JWTAuth::fromUser($user); //aqui simplemente creo el token con la informacion de la tabla de usuario
            return response()->json(['token' => $_token,'estado'=>1,'usuario'=>$user->user,'name' => $user->name], 200);
        }else{
            return response()->json(['error' => 'Usuario o Contraseña incorrecto'], 401);
        }
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
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

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'username' => auth()->user()->name,
            'role' => auth()->user()->role
        ]);
    }
}
