<?php

namespace App\Http\Controllers\Resume;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\EducationResource;
use App\Models\Education;
use Illuminate\Support\Facades\Gate;

class EducationController extends Controller
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

        return response()->json([
            'educations' => EducationResource::collection($user->educations)
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
            'school' => 'required',
            'field' => 'required',
            'year' => 'required|integer',
            'summary' => 'nullable'
        ]);

        $edu = $user->educations()->create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Education created!',
            'education' => new EducationResource($edu)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Education $education)
    {

        if (Gate::denies('edit-education', $education)) {
            return response()->json(['message' => 'You cannot edit this resource!'], 403);
        };

        $validated = $request->validate([
            'school' => 'required',
            'field' => 'required',
            'year' => 'required|integer',
            'summary' => 'nullable'
        ]);

        $wasUpdated = $education->update($validated);

        return response()->json([
            'success' => $wasUpdated,
            'message' => $wasUpdated === true ? 'Education updated!' : 'Couldnt update education!',
            'education' => new EducationResource($education)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Education $education)
    {
        if (Gate::denies('edit-education', $education)) {
            return response()->json(['message' => 'You cannot edit this resource!'], 403);
        };

        $wasDeleted = $education->delete();

        return response()->json([
            'success' => $wasDeleted,
            'message' => $wasDeleted === true ? 'Education deleted!' : 'Couldnt delete education!',
        ]);
    }
}
