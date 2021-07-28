<?php

namespace App\Api\Account\Services;

use Tymon\JWTAuth\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Api\Account\Interfaces\UserRepositoryInterface;

class DoLoginService
{
    protected $userRepository;
    protected $JWTAuth;

    public function __construct(
        UserRepositoryInterface $userRepository,
        JWTAuth $JWTAuth
    ) {
        $this->userRepository = $userRepository;
        $this->JWTAuth = $JWTAuth;
    }

    public function execute($credentials)
    {
        try {
            $auth = (object) auth('api');
            if (!$token = $auth->attempt($credentials)) {
                abort(400, 'Login ou senha inválidos');
            }

            $user = $this->userRepository->findBy('email', $credentials['email'])->first();
        } catch (JWTException $e) {
            abort(500);
        }

        return [
            'token' => $token,
            'user' => $user,
        ];
    }
}
