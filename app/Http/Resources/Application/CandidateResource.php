<?php

namespace App\Http\Resources\Application;

use App\Http\Resources\BasicResumeDetailsResource;
use App\Http\Resources\ProfileResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CandidateResource extends JsonResource
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
            'profile' => new ProfileResource($this->profile),
            'basic_resume_details' => new BasicResumeDetailsResource($this->basicResumeDetails),
        ];
    }
}
