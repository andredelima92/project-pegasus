<?php

namespace Database\Factories\Api\Account\Models;

use App\Api\Account\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'email' => $this->faker->email,
            'name' =>  $this->faker->name,
            'password' =>  $this->faker->password,
        ];
    }
}
