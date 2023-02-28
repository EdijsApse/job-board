<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'name',
        'surname',
        'phone',
        'gender',
        'date_of_birth',
        'image'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'gender' => 'integer'
    ];

    /**
     * Gets all possible genders
     */
    public static function getGenders()
    {
        return [
            0 => 'Male',
            1 => 'Female'
        ];
    }

    public function getAge()
    {
        return Carbon::createFromFormat('Y-m-d', $this->date_of_birth)->age;
    }

    /**
     * Gets name of selected gender
     */
    public function getGenderName()
    {
        return $this->gender !== null ? self::getGenders()[$this->gender] : '';
    }
}
