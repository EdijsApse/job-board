<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProfileResource extends JsonResource
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
            'name' => $this->name,
            'surname' => $this->surname,
            'date_of_birth' => $this->date_of_birth,
            'age' => $this->getAge(),
            'gender' => $this->gender,
            'phone' => $this->phone,
            'gender_name' => $this->getGenderName(),
            'image' => $this->image ? Storage::disk('public')->url($this->image) : null,
        ];
    }
}
