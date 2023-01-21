<?php

namespace App\Http\Controllers\Resume;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ExperienceResource;
use App\Models\Experience;
use Illuminate\Support\Facades\Gate;

class ExperienceController extends Controller
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
            'experiences' => ExperienceResource::collection($user->experiences)
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
            'employer' => 'required',
            'date_from' => 'required|date',
            'date_to' => 'required|date',
            'duties' => 'nullable'
        ]);

        $exp = $user->experiences()->create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Experience created!',
            'experience' => new ExperienceResource($exp)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Experience $experience)
    {

        if (Gate::denies('edit-experience', $experience)) {
            return response()->json(['message' => 'You cannot edit this resource!'], 403);
        };

        $validated = $request->validate([
            'jobtitle' => 'required',
            'employer' => 'required',
            'date_from' => 'required|date',
            'date_to' => 'required|date',
            'duties' => 'nullable'
        ]);

        $wasUpdated = $experience->update($validated);

        return response()->json([
            'success' => $wasUpdated,
            'message' => $wasUpdated === true ? 'Experience updated!' : 'Couldnt update experience!',
            'experience' => new ExperienceResource($experience)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Experience $experience)
    {
        if (Gate::denies('edit-experience', $experience)) {
            return response()->json(['message' => 'You cannot edit this resource!'], 403);
        };

        $wasDeleted = $experience->delete();

        return response()->json([
            'success' => $wasDeleted,
            'message' => $wasDeleted === true ? 'Experience deleted!' : 'Couldnt delete experience!',
        ]);
    }
}
