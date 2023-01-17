<?php

namespace App\Http\Controllers;

use App\Http\Resources\BasicResumeDetailsResource;
use App\Models\BasicResumeDetails;
use Illuminate\Http\Request;

class CandidateResumeController extends Controller
{
    /**
     * Updates or Creates resume basic details
     */
    public function updateBasicDetails(Request $request)
    {
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
            'message' => 'Ŗesume basic details updated!',
            'details' => new BasicResumeDetailsResource($basicDetails)
        ]);
    }

    public function getUserBasicResumeDetails(Request $request)
    {
        $user = $request->user();
        $details = $user->basicResumeDetails;

        if ($details) {
            $details = new BasicResumeDetailsResource($details);
        }

        return response()->json([
            'details' => $details
        ]);
    }
}
