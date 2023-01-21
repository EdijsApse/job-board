<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Resume\BasicDetailsController;
use App\Http\Controllers\Resume\EducationController;
use App\Http\Controllers\Resume\ExperienceController;
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
    Route::post('/user/company', [CompanyController::class, 'index'])->middleware('employer');
    Route::post('/user/profile', [ProfileController::class, 'index']);

    Route::post('/candidate-resume/basic', [BasicDetailsController::class, 'store']);
    Route::get('/candidate-resume/basic', [BasicDetailsController::class, 'index']);

    Route::post('/candidate-resume/salary', [SalaryController::class, 'store']);
    Route::get('/candidate-resume/salary', [SalaryController::class, 'index']);

    Route::post('/candidate-resume/experience', [ExperienceController::class, 'store']);
    Route::get('/candidate-resume/experience', [ExperienceController::class, 'index']);
    Route::put('/candidate-resume/experience/{id}', [ExperienceController::class, 'update']);
    Route::delete('/candidate-resume/experience/{id}', [ExperienceController::class, 'destroy']);

    Route::get('/candidate-resume/education', [EducationController::class, 'index']);
    Route::post('/candidate-resume/education', [EducationController::class, 'store']);
    Route::put('/candidate-resume/education/{id}', [EducationController::class, 'update']);
    Route::delete('/candidate-resume/education/{id}', [EducationController::class, 'destroy']);
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/select-options', [PublicController::class, 'lists']);