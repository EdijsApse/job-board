<?php

namespace App\Http\Controllers\Resume;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use App\Http\Resources\BasicResumeDetailsResource;
use App\Models\BasicResumeDetails;

class BasicDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        if (Gate::denies('update-resume')) {
            return response()->json(['message' => 'You must be authenticated as Candidate for this action!'], 403);
        };

        $user = $request->user();
        $details = $user->basicResumeDetails;

        if ($details) {
            $details = new BasicResumeDetailsResource($details);
        }

        return response()->json([
            'details' => $details
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        if (Gate::denies('update-resume')) {
            return response()->json(['message' => 'You must be authenticated as Candidate for this action!'], 403);
        };

        $user = $request->user();

        $validated = $request->validate([
            'jobtitle' => 'required',
            'category_id' => 'required|exists:categories,id',
            'experience' => 'nullable|integer',
            'about' => 'nullable',
            'skills' => 'nullable|array'
        ]);

        $details = [
            'jobtitle' => $validated['jobtitle'],
            'category_id' => $validated['category_id'],
            'experience' => $validated['experience'],
            'about' => $validated['about'],
            'skills' => $validated['skills'],
        ];

        $basicDetails = BasicResumeDetails::updateOrCreate([
            'user_id' => $user->id,
        ], $details);

        return response()->json([
            'success' => true,
            'message' => 'Resume basic details updated!',
            'details' => new BasicResumeDetailsResource($basicDetails)
        ]);
    }
}
