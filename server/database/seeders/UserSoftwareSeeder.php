<?php

namespace Database\Seeders;

use App\Api\Software\Models\UserSoftware;
use Illuminate\Database\Seeder;

class UserSoftwareSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(UserSoftware::class, 10)->create();
    }
}
