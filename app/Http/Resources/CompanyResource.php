<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class CompanyResource extends JsonResource
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
            'contact_email' => $this->contact_email,
            'contact_phone' => $this->contact_phone,
            'year_founded' => $this->year_founded,
            'about' => $this->about,
            'country_id' => $this->country_id,
            'country' => new CountryResource($this->country),
            'city_id' => $this->city_id,
            'city' => new CityResource($this->city),
            'category_id' => $this->category_id,
            'category' => new CategoryResource($this->category),
            'company_size_id' => $this->company_size_id,
            'companySize' => new CompanySizeResource($this->companySize),
            'logo' => $this->logo ? Storage::disk('public')->url($this->logo) : null,
            'jobs_count' => $this->jobs()->count()
        ];
    }
}
