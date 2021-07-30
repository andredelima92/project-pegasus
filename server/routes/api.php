<?php

use Dingo\Api\Routing\Router;
use App\Api\Posts\Controllers\PostController;
use App\Api\Account\Controllers\AuthController;


$api = app(Router::class);

$api->version('v1', function (Router $api) {
    $api->group(['prefix' => 'users'], function (Router $api) {
        $api->post('signup', [AuthController::class, 'signUp']);
        $api->post('login', [AuthController::class, 'login']);
        $api->post('logout', [AuthController::class, 'logout']);

        // $api->group(['middleware' => 'jwt.auth'], function (Router $api) {
        // });
    });

    $api->group(['prefix' => 'posts'], function (Router $api) {
        $api->get('/', [PostController::class, 'index']);
        $api->get('/{postId}', [PostController::class, 'show']);
        $api->post('/', [PostController::class, 'store']);
        $api->put('/{postId}', [PostController::class, 'update']);
        $api->delete('/{postId}', [PostController::class, 'destroy']);
    });

    $api->get('me', function () {
        echo "Logou";
    });
});

//'middleware' => 'jwt.auth'
