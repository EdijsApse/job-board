<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Application;
use App\Http\Resources\ApplicationResource;
use Illuminate\Support\Facades\Gate;

class ApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

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

        $application = Application::create(array_merge($validated, [
            'user_id' => $user->id,
            'status' => Application::TYPE_PENDING
        ]));

        return response()->json([
            'success' => true,
            'message' => 'Application created! Wait for employers response!',
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //
    }
}
