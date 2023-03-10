<?php

namespace App\Http\Resources\Application;

use App\Enums\ApplicationStatus;
use App\Http\Resources\JobResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ApplicationResource extends JsonResource
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
            'job_id' => $this->job_id,
            'job' => new JobResource($this->job),
            'user_id' => $this->user_id,
            'candidate' => new CandidateResource($this->user),
            'cover_letter' => $this->cover_letter,
            'status' => $this->status,
            'status_name' => ApplicationStatus::getStatusName($this->status),
            'created' => $this->created_at->diffForHumans()
        ];
    }
}
