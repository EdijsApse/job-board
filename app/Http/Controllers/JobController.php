<?php

namespace App\Http\Controllers;

use App\Http\Resources\JobResource;
use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'jobs' => JobResource::collection(Job::get())
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
        if (Gate::denies('post-jobs')) {
            return response()->json(['message' => 'You have to add company details to perform this action!'], 403);
        };

        $company = $request->user()->company;

        $validated = $request->validate([
            'jobtitle' => 'required',
            'city_id' => 'required|exists:cities,id',
            'category_id' => 'required|exists:categories,id',
            'employment_type_id' => 'required|exists:employment_types,id',
            'salary_type_id' => 'required|exists:salary_types,id',
            'street' => 'required',
            'min_salary' => 'required|decimal:0,2',
            'max_salary' => 'required|decimal:0,2',
            'description' => 'nullable',
            'requirements' => 'nullable|array',
            'expiration_date' => 'required|date',
            'years_of_experience_required' => 'nullable|integer',
            'is_urgent' => 'boolean',
            'is_featured' => 'boolean',
            'image' => 'nullable|image'
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store($company->getJobRelatedFilesPath(), 'public');
        }

        $job = $company->jobs()->create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Job posted!',
            'job' => new JobResource($job)
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Job $job)
    {
        return response()->json([
            'job' => $job
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Job  $job
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Job $job)
    {
        if (Gate::denies('edit-job', $job)) {
            return response()->json(['message' => 'you don\'t have permission to perform this action!'], 403);
        };

        $validated = $request->validate([
            'jobtitle' => 'required',
            'city_id' => 'required|exists:cities,id',
            'category_id' => 'required|exists:categories,id',
            'employment_type_id' => 'required|exists:employment_types,id',
            'salary_type_id' => 'required|exists:salary_types,id',
            'street' => 'required',
            'min_salary' => 'required|decimal:0,2',
            'max_salary' => 'required|decimal:0,2',
            'description' => 'nullable',
            'requirements' => 'nullable|array',
            'expiration_date' => 'required|date',
            'years_of_experience_required' => 'required|integer',
            'is_urgent' => 'boolean',
            'is_featured' => 'boolean',
        ]);

        $wasUpdated = $job->update($validated);

        return response()->json([
            'success' => $wasUpdated,
            'message' => $wasUpdated ? 'Job was updated!' : 'Couldn\'t update Job record!',
            'job' => new JobResource($job)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return response()->json([
            'success' => true
        ]);
    }
}
