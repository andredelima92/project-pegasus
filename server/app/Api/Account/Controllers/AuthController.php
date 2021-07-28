<?php

namespace App\Api\Account\Controllers;

use App\Http\Controllers\Controller;
use App\Api\Account\Services\DoLoginService;
use App\Api\Account\Validators\LoginRequest;
use App\Api\Account\Validators\SignUpRequest;
use App\Api\Account\Services\CreateUserService;

class AuthController extends Controller
{
    protected $userRepository;
    protected $userService;

    public function __construct()
    {
    }

    public function signUp(SignUpRequest $request, CreateUserService $createUserService)
    {
        $user = $createUserService->execute($request->only(['email', 'password']));

        return response()->json($user, 201);
    }

    public function login(LoginRequest $request, DoLoginService $doLoginService)
    {
        $auth = $doLoginService->execute($request->only(['email', 'password']));

        return response()->json($auth);
    }

    public function logout()
    {
        $auth = (object) auth();
        $auth->logout();

        return response()->json(['message' => 'Successfully logged out'], 200);
    }

    public function refresh()
    {
        $auth = (object) auth();
        $token = $auth->refresh();
        $user = $auth->user();


        return response()->json([
            'token' => $token,
            'user' => $user,
        ]);
    }
}
