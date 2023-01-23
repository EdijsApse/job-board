<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Resume\BasicDetailsController;
use App\Http\Controllers\Resume\EducationController;
use App\Http\Controllers\Resume\ExperienceController;
use App\Http\Controllers\Resume\LanguageController;
use App\Http\Controllers\Resume\SalaryController;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'refresh']);
    Route::post('/user/company', [CompanyController::class, 'store']);
    Route::post('/user/profile', [ProfileController::class, 'index']);

    Route::prefix('candidate-resume')->group(function () {
        Route::apiResource('/basic', BasicDetailsController::class)
        ->only(['index', 'store']);

        Route::apiResource('/salary', SalaryController::class)
        ->only(['index', 'store']);

        Route::apiResource('/experience', ExperienceController::class)
        ->only(['index', 'update', 'store', 'destroy'])->missing(function () {
            return response()->json(['message' => 'Resource was not found!'], 404);
        });

        Route::apiResource('/education', EducationController::class)
        ->only(['index', 'update', 'store', 'destroy'])->missing(function () {
            return response()->json(['message' => 'Resource was not found!'], 404);
        });

        Route::apiResource('/language', LanguageController::class)
        ->only(['index', 'update', 'store', 'destroy'])->missing(function () {
            return response()->json(['message' => 'Resource was not found!'], 404);
        });
    });

    Route::apiResource('/job', JobController::class)
        ->only(['index', 'update', 'store'])->missing(function () {
            return response()->json(['message' => 'Resource was not found!'], 404);
        });
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/select-options', [PublicController::class, 'lists']);