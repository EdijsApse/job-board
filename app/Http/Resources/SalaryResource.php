<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SalaryResource extends JsonResource
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
            'type_id' => $this->type_id,
            'type' => new SalaryResource($this->type),
            'min_salary' => $this->min_salary,
            'max_salary' => $this->max_salary,
            'notes' => $this->notes
        ];
    }
}
