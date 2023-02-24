<?php

namespace App\Http\Controllers;

use App\Enums\ApplicationStatus;
use App\Http\Resources\Application\ApplicationCollection;
use Illuminate\Http\Request;
use App\Models\Application;
use App\Models\Offer;
use Illuminate\Support\Facades\Gate;

class ApplicationController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (Gate::denies('apply-for-job')) {
            return response()->json(['message' => 'You cannot apply for jobs!'], 403);
        };

        $validated = $request->validate([
            'job_id' => 'required|exists:jobs,id',
            'cover_letter' => 'nullable'
        ]);

        $user = $request->user();

        $existsingApplication = Application::where(['job_id' => $validated['job_id'], 'user_id' => $user->id])->first();

        if ($existsingApplication) {
            return response()->json([
                'success' => false,
                'message' => 'Application already created for this Job opening!'
            ]);
        }

        $offerExists = Offer::where([
            'job_id' => $validated['job_id'],
            'candidate_id' => $user->id,
            'status' => ApplicationStatus::Pending
        ])->first();

        if ($offerExists) {
            return response()->json([
                'success' => false,
                'message' => 'You have pending offer for this position!',
            ]);
        }

        Application::create(array_merge($validated, [
            'user_id' => $user->id,
            'status' => ApplicationStatus::Pending
        ]));

        return response()->json([
            'success' => true,
            'message' => 'Application created! Wait for employers response!',
        ]);

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getEmployerApplications(Request $request)
    {
        $user = $request->user();

        return new ApplicationCollection(Application::employer($user)->filter(collect($request->all())));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getCandidateApplications(Request $request)
    {
        $user = $request->user();

        return new ApplicationCollection($user->applications()->filter(collect($request->all())));
    }
}
