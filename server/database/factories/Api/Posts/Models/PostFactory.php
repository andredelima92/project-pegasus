<?php

namespace Database\Factories\Api\Posts\Models;

use App\Model;
use App\Api\Posts\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'description' => $this->faker->text(rand(40,250)),
            'user_id' => rand(1, 10)
        ];
    }
}
