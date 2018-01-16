<?php

use Illuminate\Http\Request;
use \Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'prefix' => 'v1',
], function ($router) {
    Route::apiResources([
        'tasks' => TaskController::class,
        'countries' => 'CountryController',
        'cities' => 'CityController',
        'municipalities' => 'MunicipalityController',
    ], [
        'except' => ['create', 'edit',]
    ]);

    Route::get('/list', 'ClaimFileController@list');

    Route::post('/upload', 'ClaimFileController@upload');
});

/*
Route::group([
    'middleware' => 'api',
    'prefix' => 'api',

], function ($router) {

    Route::group([
        'prefix' => 'v1',
    ], function ($router) {
        Route::apiResources([
            'tasks' => 'TaskController',
            'countries' => 'CountryController',
        ], [
            'except' => ['create', 'edit',]
        ]);
    });
});
*/