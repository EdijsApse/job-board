<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ExperienceResource extends JsonResource
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
            'employer' => $this->employer,
            'jobtitle' => $this->jobtitle,
            'date_from' => $this->date_from,
            'date_to' => $this->date_to,
            'duties' => $this->duties
        ];
    }
}
