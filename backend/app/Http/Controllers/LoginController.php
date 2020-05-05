<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash; //pon esta ruta en el controllador de lCRUD y utiliza el metodo Hash::make()
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Response;
use Tymon\JWTAuth\Exceptions\JWTException;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $_validator = Validator::make($request->all(),[
            'user' => 'required|string|min:2|max:50',
            'pass' => 'required|string'
        ]);

        if($_validator->fails())
        {
            return Response::json(["usuario o contrasena incorrecta"],401);
        }

        try {
            $_user = User::where('user',$request->user)->first();
            if(!empty($_user))
            {
                if(Hash::check($request->pass,$_user->pass))
                {
                    $_token = JWTAuth::fromUser($_user);
                    return Response::json([
                        'token' => $_token,
                        'id' => $_user->id,
                        'username' => $_user->user
                    ],200);
                }
                else
                {
                    return Response::json(["usuario o contrasena incorrecta"],401);
                }
            }
            else
            {
                return Response::json(["usuario o contrasena incorrecta"],401);
            }
        } catch (JWTException $th) {
             return Response::json(["usuario o contrasena incorrecta"],401);
        }

    }
}
