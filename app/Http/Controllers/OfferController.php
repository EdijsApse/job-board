<?php

namespace App\Http\Controllers;

use App\Enums\ApplicationStatus;
use App\Http\Resources\Application\OfferCollection;
use App\Http\Resources\Application\OfferResource;
use App\Models\Application;
use App\Models\Job;
use App\Models\Offer;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class OfferController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (Gate::denies('offer-job')) {
            return response()->json(['message' => 'You cannot offer jobs!'], 403);
        };

        $user = $request->user();

        $validated = $request->validate([
            'job_id' => 'required|exists:jobs,id',
            'candidate_id' => 'required|exists:users,id'
        ]);

        $candidate = User::candidate()->where('id', $validated['candidate_id'])->first();

        if (!$candidate) {
            return response()->json([
                'success' => false,
                'message' => 'Candidate not found!',
            ]);
        }

        $job = Job::where(['id' => $validated['job_id'], 'company_id' => $user->company->id])->first();

        if (!$job) {
            return response()->json([
                'success' => false,
                'message' => 'Job not found!',
            ]);
        }

        $existsingOffer = Offer::where([
            'job_id' => $validated['job_id'],
            'user_id' => $user->id,
            'candidate_id' => $validated['candidate_id']
        ])->first();

        if ($existsingOffer) {
            return response()->json([
                'success' => false,
                'message' => 'Offer already created for this Candidate!'
            ]);
        }

        $existingApplication = Application::where([
            'job_id' => $validated['job_id'],
            'user_id' => $validated['candidate_id'],
            'status' => ApplicationStatus::Pending
        ])->first();

        if ($existingApplication) {
            return response()->json([
                'success' => false,
                'message' => 'You have pending application from this candidate for this job opening!'
            ]);
        }

        Offer::create(array_merge($validated, [
            'user_id' => $user->id,
            'status' => ApplicationStatus::Pending
        ]));

        return response()->json([
            'success' => true,
            'message' => 'Offer created! Wait for candidates response!',
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getEmployerOffers(Request $request)
    {
        $user = $request->user();

        return new OfferCollection($user->offers()->filter(collect($request->all())));
    }
}
