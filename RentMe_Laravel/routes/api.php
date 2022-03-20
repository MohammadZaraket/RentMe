<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ApartmentController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\TourController;
use App\Http\Controllers\AvailabilityController;


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
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);    


    Route::post('/addApartment', [ApartmentController::class, 'store']);
    Route::post('/showApartment', [ApartmentController::class, 'show']);
    Route::post('/updateApartment', [ApartmentController::class, 'update']);
    Route::post('/deleteApartment', [ApartmentController::class, 'destroy']);
    Route::post('/searchApartment', [ApartmentController::class, 'search']);



    Route::post('/showImages', [ImageController::class, 'show']);
    Route::post('/addImages', [ImageController::class, 'update']);

    

    Route::post('/availableDate', [AvailabilityController::class, 'showDate']);
    Route::post('/availableTime', [AvailabilityController::class, 'showTime']);
    Route::post('/deleteAvailable', [AvailabilityController::class, 'destroy']);
    Route::post('/addAvailable', [AvailabilityController::class, 'update']);


    
    
    Route::post('/showTour', [TourController::class, 'show']);
    Route::post('/addTour', [TourController::class, 'store']);
    Route::post('/acceptTour', [TourController::class, 'update']);
    

    Route::post('/addReview', [ReviewController::class, 'create']);
    Route::post('/showReview', [ReviewController::class, 'show']);
    Route::post('/deleteReview', [ReviewController::class, 'destroy']);
    

 

});