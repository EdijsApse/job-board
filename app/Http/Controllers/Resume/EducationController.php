<?php

namespace App\Http\Controllers\Resume;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\EducationResource;
use App\Models\Education;

class EducationController extends Controller
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
    public function update(Request $request, $id)
    {
        $user = $request->user();

        $edu = Education::where(['user_id' => $user->id, 'id' => $id])->first();

        if (!$edu) {
            return response()->json([
                'message' => 'Education not found!'
            ], 404);
        }

        $validated = $request->validate([
            'school' => 'required',
            'field' => 'required',
            'year' => 'required|integer',
            'summary' => 'nullable'
        ]);

        $wasUpdated = $edu->update($validated);

        return response()->json([
            'success' => $wasUpdated,
            'message' => $wasUpdated === true ? 'Education updated!' : 'Couldnt update education!',
            'education' => new EducationResource($edu)
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

        $edu = Education::where(['id' => $id, 'user_id' => $user->id])->first();

        if (!$edu) {
            return response()->json([
                'message' => 'Education not found!'
            ], 404);
        }

        $wasDeleted = $edu->delete();

        return response()->json([
            'success' => $wasDeleted,
            'message' => $wasDeleted === true ? 'Education deleted!' : 'Couldnt delete education!',
        ]);
    }
}
