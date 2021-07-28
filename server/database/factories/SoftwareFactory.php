<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Api\Software\Models\Software;
use Faker\Generator as Faker;

$factory->define(Software::class, function (Faker $faker) {
    return [
        'software_id' => $faker->numberBetween(3, 30),
        'name' => $faker->unique()->word,
        'description' => $faker->sentence(),
        'type' => $faker->randomElement([1, 2, 3, 4]),
        'initial_value' => $faker->numberBetween(30, 150),
        'weight' => $faker->randomFloat(1, 1, 3),
        'rarity' => $faker->numberBetween(1, 4),
        'initial_version' => $faker->randomFloat(1, 1, 2),
        'type_action' => $faker->randomElement(['defense', 'attack']),
    ];
});
