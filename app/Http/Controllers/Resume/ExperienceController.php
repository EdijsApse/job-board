<?php

namespace App\Http\Controllers\Resume;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ExperienceResource;
use App\Models\Experience;

class ExperienceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
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
    public function update(Request $request, $id)
    {
        $user = $request->user();

        $exp = Experience::where(['id' => $id, 'user_id' => $user->id])->first();

        if (!$exp) {
            return response()->json([
                'message' => 'Experience not found!'
            ], 404);
        }

        $validated = $request->validate([
            'jobtitle' => 'required',
            'employer' => 'required',
            'date_from' => 'required|date',
            'date_to' => 'required|date',
            'duties' => 'nullable'
        ]);

        $wasUpdated = $exp->update($validated);

        return response()->json([
            'success' => $wasUpdated,
            'message' => $wasUpdated === true ? 'Experience updated!' : 'Couldnt update experience!',
            'experience' => new ExperienceResource($exp)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $user = $request->user();

        $exp = Experience::where(['id' => $id, 'user_id' => $user->id])->first();

        if (!$exp) {
            return response()->json([
                'message' => 'Experience not found!'
            ], 404);
        }

        $wasDeleted = $exp->delete();

        return response()->json([
            'success' => $wasDeleted,
            'message' => $wasDeleted === true ? 'Experience deleted!' : 'Couldnt delete experience!',
        ]);
    }
}
