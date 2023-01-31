<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ProfileController extends Controller
{
    /**
     * Creates or Updates profile record for authenticated user
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $user = $request->user();

        $validatedData = $request->validate([
            'name' => 'required|min:3',
            'surname' => 'required',
            'gender' => [
                'required',
                Rule::in(array_keys(Profile::getGenders()))
            ],
            'image' => 'nullable|image',
            'date_of_birth' => 'required|date',
            'phone' => 'required',
            'is_public' => 'nullable|boolean'
        ]);

        $profileImagePath = null;
        if ($request->hasFile('image')) {
            $profileImagePath = $request->file('image')->store($user->getProfileFilesPath(), 'public');
        }

        Profile::updateOrCreate(
        ['user_id' => $user->id],
        [
            'name' => $validatedData['name'],
            'surname' => $validatedData['surname'],
            'gender' => $validatedData['gender'],
            'date_of_birth' => $validatedData['date_of_birth'],
            'phone' => $validatedData['phone'],
            'image' => $profileImagePath,
            'is_public' => $validatedData['is_public']
        ]
        );

        return response()->json([
            'success' => true,
            'message' => 'User profile details updated',
            'user' => new UserResource($user)
        ]);
    }
}
