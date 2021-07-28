<?php

namespace App\Api\Account\Validators;


use Illuminate\Foundation\Http\FormRequest;

class SignUpRequest extends FormRequest
{
    public function rules()
    {
        return [
            'email' => ['required', 'unique:users', 'max:255', 'email'],
            'password' => ['required', 'min:6', 'max:20'],
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
            'email.unique' => 'E-mail ja cadastrado',
            'email.max' => 'E-mail contém muitos caracteres',
            'email.email' => 'E-mail inválido',

            'password.required' => 'Senha não informada',
            'password.min' => 'Senha precisa ter 6 digitos',
            'password.max' => 'Senha possui mais que 20 digitos',
        ];
    }
}
