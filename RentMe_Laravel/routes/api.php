<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ApartmentsController;
use App\Http\Controllers\ReviewsController;
use App\Http\Controllers\ImagesController;
use App\Http\Controllers\ToursController;
use App\Http\Controllers\AvailabilitiesController;


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


    Route::post('/addApartment', [ApartmentsController::class, 'store']);
    Route::post('/showApartment', [ApartmentsController::class, 'show']);
    Route::post('/updateApartment', [ApartmentsController::class, 'update']);
    Route::post('/deleteApartment', [ApartmentsController::class, 'destroy']);
    Route::post('/searchApartment', [ApartmentsController::class, 'search']);



    Route::post('/showImages', [ImagesController::class, 'show']);

    Route::post('/availableDate', [AvailabilitiesController::class, 'showDate']);
    Route::post('/availableTime', [AvailabilitiesController::class, 'showTime']);
    Route::post('/deleteAvailable', [AvailabilitiesController::class, 'destroy']);

    
    Route::post('/showTour', [ToursController::class, 'show']);
    Route::post('/addTour', [ToursController::class, 'store']);
    Route::post('/acceptTour', [ToursController::class, 'update']);
    

    Route::post('/addReview', [ReviewsController::class, 'create']);
    Route::post('/showReview', [ReviewsController::class, 'show']);
    Route::post('/deleteReview', [ReviewsController::class, 'destroy']);
    

 

});