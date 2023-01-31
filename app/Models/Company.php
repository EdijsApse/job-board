<?php

namespace App\Models;

use Illuminate\Contracts\Database\Eloquent\Builder;
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
     * Gets full path where job related files will be stored for specific company
     */
    public function getJobRelatedFilesPath()
    {
        return $this->user->getCompanyFilesPath()."/jobs";
    }

    public function scopeFilter(Builder $query, $collectionOfInputs)
    {
        if ($collectionOfInputs->get('keyword')) {
            $query->where('name', 'like', "%".$collectionOfInputs->get('keyword')."%");
        }

        if ($collectionOfInputs->get('city_id')) {
            $query->where('city_id', $collectionOfInputs->get('city_id'));
        }

        if ($collectionOfInputs->get('category_id')) {
            $query->where('category_id', $collectionOfInputs->get('category_id'));
        }

        if ($collectionOfInputs->get('company_size_id')) {
            $query->where('company_size_id', $collectionOfInputs->get('company_size_id'));
        }

        return $query->paginate(20);
    }

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

    /**
     * Gets all jobs posted by company
     */
    public function jobs()
    {
        return $this->hasMany(Job::class);
    }
}
