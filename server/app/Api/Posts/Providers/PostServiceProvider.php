<?php

namespace App\Api\Posts\Providers;

use Illuminate\Support\ServiceProvider;
use App\Api\Posts\Repositories\PostRepository;
use App\Api\Posts\Interfaces\PostRepositoryInterface;

class PostServiceProvider extends ServiceProvider
{
    public function boot() {}

    public function register()
    {
        $this->app->bind(
            PostRepositoryInterface::class,
            PostRepository::class
        );
    }
}
