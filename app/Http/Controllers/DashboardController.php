<?php

namespace App\Http\Controllers;

use App\Enums\ApplicationStatus;
use App\Http\Resources\Application\ApplicationResource;
use App\Http\Resources\Application\OfferResource;
use App\Models\Application;
use App\Models\Offer;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function candidate(Request $request)
    {
        $user = $request->user();
        $jobApplications = ApplicationResource::collection($user->applications()->limit(5)->orderBy('created_at', 'desc')->get());

        return response()->json([
            'applications' => $jobApplications,
            'pending_applications_count' => Application::getPendingApplications($user)->count()
        ]);
    }

    public function employer(Request $request)
    {
        $user = $request->user();
        $company = $user->company;
        $jobs = [];

        if ($company) {
            $jobs= $company->jobs()->get()->pluck('id');
        }

        $application = Application::whereIn('job_id', $jobs)->where('status', ApplicationStatus::Pending)->limit(5)->orderBy('created_at', 'desc')->get();
        $offer = Offer::where(['user_id' => $user->id, 'status' => ApplicationStatus::Pending])->orderBy('created_at', 'desc')->limit(5)->get();

        return [
            'applications' => ApplicationResource::collection($application),
            'offers' => OfferResource::collection($offer),
            'pending_applications_count' => Application::whereIn('job_id', $jobs)->where('status', ApplicationStatus::Pending)->count(),
            'pending_offers_count' => Offer::where(['user_id' => $user->id, 'status' => ApplicationStatus::Pending])->count()
        ];
    }
}
