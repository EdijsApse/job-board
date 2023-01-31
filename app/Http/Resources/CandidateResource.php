<?php

namespace App\Http\Resources;

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
            'experiences' => ExperienceResource::collection($this->experiences),
            'educations' => EducationResource::collection($this->educations),
            'basic_resume_details' => new BasicResumeDetailsResource($this->basicResumeDetails),
            'salary' => new SalaryResource($this->salary),
            'languages' => ResumeLanguageResource::collection($this->resumeLanguages),
        ];
    }
}
