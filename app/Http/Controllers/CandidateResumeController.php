<?php

namespace App\Http\Controllers;

use App\Http\Resources\BasicResumeDetailsResource;
use App\Http\Resources\SalaryResource;
use App\Models\BasicResumeDetails;
use App\Models\Salary;
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

    /**
     * Returns resource of users resume basic details, if exists
     */
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
    
    /**
     * Returns resource of users salary if exists
     */
    public function getUserSalaryDetails(Request $request)
    {
        $user = $request->user();
        $salary = $user->salary;

        if ($salary) {
            $salary = new SalaryResource($salary);
        }

        return response()->json([
            'details' => $salary
        ]);
    }

    /**
     * Updates or Creates salary details for authenticated user
     */
    public function updateSalaryDetails(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'type_id' => 'required|exists:salary_types,id',
            'min_salary' => 'required|decimal:0,2',
            'max_salary' => 'required|decimal:0,2',
            'notes' => 'nullable'
        ]);

        $salary = Salary::updateOrCreate(
            [
            'user_id' => $user->id
            ],
            [
                'type_id' => $validated['type_id'],
                'min_salary' => $validated['min_salary'],
                'max_salary' => $validated['max_salary'],
                'notes' => $validated['notes'],
            ]
        );

        return response()->json([
            'success' => true,
            'message' => 'Salary details updated',
            'details' => new SalaryResource($salary)
        ]);
    }
}
