<?php

namespace App\Http\Controllers;

use App\Http\Resources\Application\ApplicationResource;
use App\Models\Application;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function candidate(Request $request)
    {
        $user = $request->user();
        $jobApplications = ApplicationResource::collection($user->applications()->limit(5)->orderBy('created_at', 'desc')->get());

        return response()->json([
            'applications' => $jobApplications,
            'pending_applications' => Application::getPendingApplications($user)->count()
        ]);
    }
}
