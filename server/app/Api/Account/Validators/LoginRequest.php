<?php

namespace App\Api\Account\Validators;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    public function rules()
    {
        return [
            'email' => ['required', 'email'],
            'password' => 'required',
        ];
    }

    public function authorize()
    {
        return true;
    }

    public function messages()
    {
        return [
            'email.required' => 'E-mail não informado',
            'email.email' => 'E-mail inválido',

            'password.required' => 'Senha não informada',
        ];
    }
}
