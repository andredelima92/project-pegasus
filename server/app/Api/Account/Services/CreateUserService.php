<?php

namespace App\Api\Account\Services;

use App\Api\Account\Models\User;

class CreateUserService
{
    public function __construct()
    {
    }

    public function execute($data)
    {
        try {
            $data = (object) $data;
            $user = new User;
            $user->password = $data->password;
            $user->email = $data->email;
            $user->save();

            return $user;
        } catch (\Exception $e) {
            abort(400, 'Falha ao criar usuário');
        }
    }
}
