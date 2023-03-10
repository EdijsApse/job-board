<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CandidateController;
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
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FeaturedItemsController;
use App\Http\Controllers\OfferController;

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
    ->only(['store']);

    Route::apiResource('/application', ApplicationController::class)->only(['store']);

    Route::apiResource('/offer', OfferController::class)->only(['store']);

    Route::get('/candidate-dashboard', [DashboardController::class, 'candidate']);

    Route::get('/employer-dashboard', [DashboardController::class, 'employer']);
    Route::get('/employer/offers', [OfferController::class, 'getEmployerOffers']);
    Route::get('/employer/applications', [ApplicationController::class, 'getEmployerApplications']);
    Route::get('/employer/jobs', [JobController::class, 'getEmployerJobs']);
    Route::get('/employer/jobs/{job}', [JobController::class, 'getEmployerJob'])->missing(function () {
        return response()->json(['message' => 'Job was not found'], 404);
    });
    Route::put('/employer/jobs/{job}', [JobController::class, 'updateEmployerJob'])->missing(function () {
        return response()->json(['message' => 'Job was not found'], 404);
    });

    Route::get('/candidate/offers', [OfferController::class, 'getCandidateOffers']);
    Route::get('/candidate/applications', [ApplicationController::class, 'getCandidateApplications']);

    Route::post('featured/jobs', [FeaturedItemsController::class, 'storeFeaturedJob']);
    Route::get('featured/jobs', [FeaturedItemsController::class, 'getFeaturedJobs']);
});

Route::apiResource('/job', JobController::class)
->only(['index', 'show'])->missing(function () {
    return response()->json(['message' => 'Resource was not found!'], 404);
});

Route::apiResource('/employer', CompanyController::class)
->only(['index', 'show'])->missing(function () {
    return response()->json(['message' => 'Resource was not found!'], 404);
});

Route::apiResource('/candidate', CandidateController::class)
->only(['index', 'show'])->missing(function () {
    return response()->json(['message' => 'Resource was not found!'], 404);
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/select-options', [PublicController::class, 'lists']);
Route::get('/landing-data', [PublicController::class, 'getLandingData']);