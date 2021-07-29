<?php

namespace App\Api\Posts\Validators;


use Illuminate\Foundation\Http\FormRequest;

class PostRequest extends FormRequest
{
    public function rules()
    {
        return [
            'description' => ['required', 'max:280'],
        ];
    }

    public function authorize()
    {
        return true;
    }

    public function messages()
    {
        return [
            'description.required' => 'Descrição precisa ser informada',
            'description.max' => 'Descrição maior que 280 caracteres',
        ];
    }
}
