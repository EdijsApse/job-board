<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Salary extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'type_id',
        'min_salary',
        'max_salary',
        'notes',
    ];

    /**
     * Gets salary type.
     */
    public function type()
    {
        return $this->belongsTo(SalaryType::class);
    }
}
