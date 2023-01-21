<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Gate;

class CompanyController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        if (Gate::denies('update-company')) {
            return response()->json(['message' => 'You must be authenticated as Employer for this action!'], 403);
        };

        $user = $request->user();
        $validatedDate = $request->validate(
            [
            'name' => 'required',
            'contact_email' => 'required|email',
            'contact_phone' => 'required',
            'year_founded' => 'nullable|integer|min:1900|max:'.(date('Y')),
            'about' => 'required',
            'country_id' => 'required|exists:countries,id',
            'city_id' => 'required|exists:cities,id',
            'category_id' => 'required|exists:categories,id',
            'company_size_id' => 'required|exists:company_sizes,id',
            'file' => 'nullable|image'
            ]
        );

        $companyDetails = [
            'name' => $validatedDate['name'],
            'contact_email' => $validatedDate['contact_email'],
            'contact_phone' => $validatedDate['contact_phone'],
            'year_founded' => $validatedDate['year_founded'],
            'about' => $validatedDate['about'],
            'country_id' => $validatedDate['country_id'],
            'city_id' => $validatedDate['city_id'],
            'category_id' => $validatedDate['category_id'],
            'company_size_id' => $validatedDate['company_size_id'],
        ];

        if ($request->hasFile('file')) {
            $companyDetails['logo'] = $request->file('file')->store($user->getCompanyFilesPath(), 'public');
        }

        Company::updateOrCreate(
            ['user_id' => $user->id],
            $companyDetails
        );

        return response()->json([
            'success' => true,
            'user' => new UserResource($request->user())
        ]);
    }
}
