<?php

namespace App\Http\Resources\Application;

use App\Enums\ApplicationStatus;
use App\Http\Resources\JobResource;
use Illuminate\Http\Resources\Json\JsonResource;

class OfferResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'status' => $this->status,
            'status_name' => ApplicationStatus::getStatusName($this->status),
            'job_id' => $this->job_id,
            'job' => new JobResource($this->job),
            'candidate_id' => $this->candidate_id,
            'candidate' => new CandidateResource($this->candidate_id),
        ];
    }
}
