<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'contact_email',
        'contact_phone',
        'year_founded',
        'about',
        'country_id',
        'city_id',
        'category_id',
        'company_size_id',
        'user_id',
        'logo'
    ];

    /**
     * Get the country.
     */
    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    /**
     * Get the city.
     */
    public function city()
    {
        return $this->belongsTo(City::class);
    }

    /**
     * Get the category.
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Get the size of the company.
     */
    public function companySize()
    {
        return $this->belongsTo(CompanySize::class);
    }

    /**
     * Get the user to which company belongs.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
