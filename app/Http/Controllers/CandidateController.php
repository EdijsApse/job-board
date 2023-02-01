<?php

namespace App\Http\Controllers;

use App\Http\Resources\CandidateCollection;
use App\Http\Resources\CandidateResource;
use App\Models\User;
use Illuminate\Http\Request;

class CandidateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return new CandidateCollection(User::filterPublicCandidates(collect($request->all())));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $candidate)
    {
        return response()->json([
            'candidate' => new CandidateResource($candidate)
        ]);
    }   
}
