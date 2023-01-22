<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ResumeLanguageResource extends JsonResource
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
            'language_id' => $this->language_id,
            'language' => new LanguageResource($this->language),
            'language_level_id' => $this->language_level_id,
            'language_level' => new LanguageLevelResource($this->languageLevel),
            'additional_notes' => $this->additional_notes,
        ];
    }
}
