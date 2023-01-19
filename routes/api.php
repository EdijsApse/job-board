<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CandidateResumeController;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ProfileController;
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

    Route::post('/candidate-resume/basic', [CandidateResumeController::class, 'updateBasicDetails']);
    Route::get('/candidate-resume/basic', [CandidateResumeController::class, 'getUserBasicResumeDetails']);

    Route::post('/candidate-resume/salary', [CandidateResumeController::class, 'updateSalaryDetails']);
    Route::get('/candidate-resume/salary', [CandidateResumeController::class, 'getUserSalaryDetails']);

    Route::post('/candidate-resume/experience', [CandidateResumeController::class, 'addExperience']);
    Route::get('/candidate-resume/experience', [CandidateResumeController::class, 'getExperiences']);
    Route::put('/candidate-resume/experience/{id}', [CandidateResumeController::class, 'updateExperience']);
    Route::delete('/candidate-resume/experience/{id}', [CandidateResumeController::class, 'deleteExperience']);
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/select-options', [PublicController::class, 'lists']);