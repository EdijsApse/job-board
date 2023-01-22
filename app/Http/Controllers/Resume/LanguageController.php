<?php

namespace App\Http\Controllers\Resume;

use App\Http\Controllers\Controller;
use App\Http\Resources\ResumeLanguageResource;
use App\Models\ResumeLanguage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class LanguageController extends Controller
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
            'resume_languages' => ResumeLanguageResource::collection($user->resumeLanguages)
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
            'language_id' => 'required|exists:languages,id',
            'language_level_id' => 'required|exists:language_levels,id',
            'additional_notes' => 'nullable',
        ]);

        $record = $user->resumeLanguages()->create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Resume language created!',
            'resume_language' => new ResumeLanguageResource($record)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ResumeLanguage $language)
    {
        
        if (Gate::denies('edit-resume-language', $language)) {
            return response()->json(['message' => 'You cannot edit this resource!'], 403);
        };

        $validated = $request->validate([
            'language_id' => 'required|exists:languages,id',
            'language_level_id' => 'required|exists:language_levels,id',
            'additional_notes' => 'nullable',
        ]);

        $wasUpdated = $language->update($validated);

        return response()->json([
            'success' => $wasUpdated,
            'message' => $wasUpdated === true ? 'Language record updated!' : 'Couldnt update language!',
            'resume_language' => new ResumeLanguageResource($language)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(ResumeLanguage $language)
    {
        if (Gate::denies('edit-resume-language', $language)) {
            return response()->json(['message' => 'You cannot edit this resource!'], 403);
        };

        $wasDeleted = $language->delete();

        return response()->json([
            'success' => $wasDeleted,
            'message' => $wasDeleted === true ? 'Language record deleted!' : 'Couldnt delete language!',
        ]);
    }
}
