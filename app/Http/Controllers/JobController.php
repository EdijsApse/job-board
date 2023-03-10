<?php

namespace App\Http\Controllers;

use App\Http\Resources\JobCollection;
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
    public function index(Request $request)
    {
        return new JobCollection(Job::filter(collect($request->all())));
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
            'description' => 'required',
            'requirements' => 'nullable|array',
            'responsibilities' => 'nullable|array',
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
            'related_jobs' => JobResource::collection($job->relatedJobs()),
            'job' => new JobResource($job),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Job  $job
     * @return \Illuminate\Http\Response
     */
    public function updateEmployerJob(Request $request, Job $job)
    {
        if (Gate::denies('edit-job', $job)) {
            return response()->json(['message' => 'You don\'t have permission to perform this action!'], 403);
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
            'description' => 'required',
            'requirements' => 'nullable|array',
            'responsibilities' => 'nullable|array',
            'expiration_date' => 'required|date',
            'years_of_experience_required' => 'nullable|integer',
            'is_urgent' => 'boolean',
            'is_featured' => 'boolean',
            'image' => 'nullable|image'
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store($company->getJobRelatedFilesPath(), 'public');
        }

        $wasUpdated = $job->update($validated);

        return response()->json([
            'success' => $wasUpdated,
            'message' => $wasUpdated ? 'Job was updated!' : 'Couldn\'t update Job record!',
            'job' => new JobResource($job)
        ]);
    }

    /**
     * Display a listing of the company jobs.
     *
     * @return \Illuminate\Http\Response
     */
    public function getEmployerJobs(Request $request)
    {
        $user = $request->user();
        $company = $user->company;

        if (!$company) {
            return response()->json([
                'data' => []
            ]);
        }
        return new JobCollection($company->jobs()->filter(collect($request->all())));
    }

    /**
     * Display the specified resource.
     * 
     * Employer Job
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getEmployerJob(Request $request, Job $job)
    {
        $user = $request->user();
        $company = $user->company;

        if (!$company || $company->id !== $job->company_id) {
            return response()->json([
                'message' => 'No Job found!'
            ], 404);
        }

        return response()->json([
            'job' => new JobResource($job)
        ]);
    }
}
