<?php
namespace App\Providers;

use App\Repositories\BaseRepository;
use App\Interfaces\BaseRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class BaseServiceProvider extends ServiceProvider
{
    public function boot() {}

    public function register()
    {
        $this->app->bind(
            BaseRepositoryInterface::class,
            BaseRepository::class
        );
    }
}