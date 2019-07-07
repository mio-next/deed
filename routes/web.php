<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

Route::group(['middleware' => 'auth', 'namespace' => 'Admin'], function () {
    Route::get('/', 'HomeController@index')->name('home');

    Route::group(['module' => 'community'], function () {
        Route::resource('community', 'CommunityController');
    });

    Route::group(['module' => 'deed'], function () {
        Route::resource('deed', 'DeedController');
    });

    Route::group(['module' => 'help'], function () {
        Route::resource('help', 'HelpController');
    });
});

// 产权查询也没
Route::group(['prefix' => 'front', 'namespace' => 'Front'], function () {
    Route::get('h5/query', 'DefaultController@index');
});
