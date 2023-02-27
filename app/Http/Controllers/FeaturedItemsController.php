<?php

namespace App\Http\Controllers;

use App\Enums\FeaturedTypes;
use App\Http\Resources\JobCollection;
use App\Models\FeaturedItem;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;

class FeaturedItemsController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeFeaturedJob(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'item_id' => [
                'required',
                'exists:jobs,id'
            ],
        ]);

        $featuredItemData = [
            'user_id' => $user->id,
            'item_id' => $validated['item_id'],
            'type_id' => FeaturedTypes::Job
        ];

        if (!FeaturedItem::where($featuredItemData)->count()) {
            FeaturedItem::updateOrCreate($featuredItemData);
        }


        return response()->json([
            'success' => true,
            'message' => 'Job added to featured jobs list!',
        ]);
    }

    /**
     * Gets Jobs which user stored as featured jobs
     */
    public function getFeaturedJobs(Request $request)
    {
        $user = $request->user();
        
        return new JobCollection($user->featuredJobs()->filter(collect($request->all())));

    }
}
