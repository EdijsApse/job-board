<?php

namespace App\Http\Controllers\Resume;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\SalaryResource;
use App\Models\Salary;
use Illuminate\Support\Facades\Gate;

class SalaryController extends Controller
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
        $salary = $user->salary;

        if ($salary) {
            $salary = new SalaryResource($salary);
        }

        return response()->json([
            'details' => $salary
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
