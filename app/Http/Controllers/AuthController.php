<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class AuthController extends Controller
{
    /**
     * Action for user login
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $validatedDate = $request->validate(
            [
            'email' => 'required|email',
            'password' => 'required',
            ]
        );

        $user = User::firstWhere('email', $validatedDate['email']);

        if (!$user) {
            return response()->json([
                'success' => false,
                'error' => 'Invalid credentials!'
            ]);
        }

        if (!Hash::check($validatedDate['password'], $user->password)) {
            return response()->json([
                'success' => false,
                'error' => 'Invalid credentials!'
            ]);
        }

        $token = $user->createToken('personal-access-token');

        return response()->json([
            'success' => true,
            'user' => new UserResource($user),
            'token' => $token->plainTextToken
        ]);
    }

    /**
     * Action for user registration
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validatedDate = $request->validate(
            [
            'email' => 'required|unique:users|email',
            'password' => 'required|confirmed|min:5',
            'user_type' => ['required', Rule::in(User::TYPE_CANDIDATE, User::TYPE_EMPLOYER)]
            ]
        );
    
        $user = User::create([
            'email' => $validatedDate['email'],
            'password' => Hash::make($validatedDate['password']),
            'user_type' => $validatedDate['user_type']
        ]);
        
        $token = $user->createToken('personal-access-token');
    
        return response()->json([
            'user' => new UserResource($user),
            'token' => $token->plainTextToken
        ]);   
    }

    /**
     * Action for refreshing user
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function refresh(Request $request)
    {
        $user = $request->user();

        return response()->json([
            'user' => new UserResource($user)
        ]);
    }
}
