<?php

namespace App\Http\Resources;

use App\Models\Job;

class CompanyWithLatestJobsResource extends CompanyResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return array_merge(
            [
                'last_jobs' => JobResource::collection(Job::where('company_id', $this->id)->orderBy('created_at', 'desc')->limit(5)->get())
            ],
            parent::toArray($request)
        );
    }
}
