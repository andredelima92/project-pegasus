<?php

namespace App\Api\Account\Providers;

use Illuminate\Support\ServiceProvider;
use App\Api\Account\Repositories\UserRepository;
use App\Api\Account\Interfaces\UserRepositoryInterface;

class UserServiceProvider extends ServiceProvider
{
    public function boot() {}

    public function register()
    {
        $this->app->bind(
            UserRepositoryInterface::class,
            UserRepository::class
        );
    }
}