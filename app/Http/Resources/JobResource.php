<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class JobResource extends JsonResource
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
            'jobtitle' => $this->jobtitle,
            'company_id' => $this->company_id,
            'company' => new CompanyResource($this->company),
            'city_id' => $this->city_id,
            'city' => new CityResource($this->city),
            'category_id' => $this->category_id,
            'category' => new CategoryResource($this->category),
            'employment_type_id' => $this->employment_type_id,
            'employment_type' => new EmploymentTypeResource($this->employmentType),
            'salary_type_id' => $this->salary_type_id,
            'salary_type' => new SalaryTypeResource($this->salaryType),
            'street' => $this->street,
            'min_salary' => $this->min_salary,
            'max_salary' => $this->max_salary,
            'description' => $this->description,
            'requirements' => $this->requirements,
            'responsibilities' => $this->responsibilities,
            'expiration_date' => $this->expiration_date,
            'years_of_experience_required' => $this->years_of_experience_required,
            'is_urgent' => $this->is_urgent,
            'is_featured' => $this->is_featured,
            'image' => $this->getImageUrl(),
            'created' => $this->created_at->diffForHumans()
        ];
    }
}
