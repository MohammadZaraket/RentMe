<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ApartmentController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\TourController;
use App\Http\Controllers\AvailabilityController;


Route::group(['middleware' => 'api', 'prefix' => 'auth'], function () {

    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);    
    Route::post('/update-token', [AuthController::class, 'updateFirebaseToken']);  
    
});


Route::group(['prefix' => 'apartment'], function () {

    Route::post('/add', [ApartmentController::class, 'store']);
    Route::get('/show', [ApartmentController::class, 'show']);
    Route::post('/update', [ApartmentController::class, 'update']);
    Route::post('/delete', [ApartmentController::class, 'destroy']);
    Route::post('/search', [ApartmentController::class, 'search']);
    Route::post('/details', [ApartmentController::class, 'showDetails']);


});


Route::group(['prefix' => 'image'], function () {

    Route::post('/show', [ImageController::class, 'show']);
    Route::post('/add', [ImageController::class, 'update']);

});


Route::group(['prefix' => 'available'], function () {

    Route::post('/date', [AvailabilityController::class, 'showDate']);
    Route::post('/time', [AvailabilityController::class, 'showTime']);
    Route::post('/delete', [AvailabilityController::class, 'destroy']);
    Route::post('/add', [AvailabilityController::class, 'update']);

});



Route::group(['prefix' => 'tour'], function () {

    Route::post('/add', [TourController::class, 'store']);
    Route::post('/accept', [TourController::class, 'update']);

});


Route::group(['prefix' => 'review'], function () {

    Route::post('/add', [ReviewController::class, 'create']);
    Route::post('/show', [ReviewController::class, 'show']);
    Route::post('/delete', [ReviewController::class, 'destroy']);

});