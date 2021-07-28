<?php

use Dingo\Api\Routing\Router;
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

    $api->get('me', function () {
        echo "Logou";
    });
});
