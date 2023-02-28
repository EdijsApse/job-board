<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'email' => $this->email,
            'user_type' => $this->user_type,
            'user_type_name' => $this->getUserTypeName(),
            'is_employer' => $this->isEmployer(),
            'is_candidate' => $this->isCandidate(),
            'company' => new CompanyWithOfferableJobsResource($this->company),
            'profile' => new ProfileResource($this->profile),
            'basic_resume_details' => new BasicResumeDetailsResource($this->basicResumeDetails),
            'is_candidate_visible' => $this->isCandidateVisible()
        ];
    }
}
