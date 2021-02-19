<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->post('api/register', ['uses' => 'LoginController@register']);
$router->post('api/login', ['uses' => 'LoginController@login']);

$router->group(['prefix' => 'api', 'middleware' => 'auth'], function () use ($router) {
    $router->get('Kategori', ['uses' => 'KategoriController@index']);
    $router->get('Kategori/{id}', ['uses' => 'KategoriController@show']);
    $router->delete('Kategori/{id}', ['uses' => 'KategoriController@destroy']);
    $router->put('Kategori/{id}', ['uses' => 'KategoriController@update']);
    $router->post('Kategori', ['uses' => 'KategoriController@create']);


    $router->get('Pelanggan', ['uses' => 'PelangganController@index']);
    $router->get('Pelanggan/{id}', ['uses' => 'PelangganController@show']);
    $router->post('Pelanggan', ['uses' => 'PelangganController@create']);
    $router->delete('Pelanggan/{id}', ['uses' => 'PelangganController@destroy']);
    $router->put('Pelanggan/{id}', ['uses' => 'PelangganController@update']);

    $router->post('Menu', ['uses' => 'MenuController@create']);
    $router->get('Menu', ['uses' => 'MenuController@index']);
});
