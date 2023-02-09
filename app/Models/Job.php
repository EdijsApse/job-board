<?php

namespace App\Models;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Job extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'jobtitle',
        'company_id',
        'city_id',
        'category_id',
        'employment_type_id',
        'salary_type_id',
        'street',
        'min_salary',
        'max_salary',
        'description',
        'requirements',
        'responsibilities',
        'expiration_date',
        'years_of_experience_required',
        'is_urgent',
        'is_featured',
        'image'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'requirements' => 'array',
        'responsibilities' => 'array',
        'is_urgent' => 'boolean',
        'is_featured' => 'boolean',
    ];

    /**
     * Gets image link for Job or company logo as alternative
     */
    public function getImageUrl() {
        if ($this->image) {
            return Storage::disk('public')->url($this->image);
        }

        if ($this->company->logo) {
            return Storage::disk('public')->url($this->company->logo);
        }
        return null;
    }


    /**
     * Gets featured jobs for landing page
    */
    public static function featuredJobs()
    {
        return self::where('is_featured', true)->orderBy('created_at', 'desc')->limit(3)->get();
    }


    public function scopeFilter(Builder $query, $collectionOfInputs)
    {

        if ($collectionOfInputs->get('keyword')) {
            $query->where('jobtitle', 'like', "%".$collectionOfInputs->get('keyword')."%");
        }

        if ($collectionOfInputs->get('city_id')) {
            $query->where('city_id', $collectionOfInputs->get('city_id'));
        }

        if ($collectionOfInputs->get('category_id')) {
            $query->where('category_id', $collectionOfInputs->get('category_id'));
        }

        if ($collectionOfInputs->get('employment_type_id')) {
            $query->where('employment_type_id', $collectionOfInputs->get('employment_type_id'));
        }

        return $query->paginate(20);
    }

    /**
     * Gets Company who posted job
     */
    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    /**
     * Gets City where job is located
     */
    public function city()
    {
        return $this->belongsTo(City::class);
    }

    /**
     * Gets category of the job
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Gets employment type of the job
     */
    public function employmentType()
    {
        return $this->belongsTo(EmploymentType::class);
    }

    /**
     * Gets salary type of the job
     */
    public function salaryType()
    {
        return $this->belongsTo(SalaryType::class);
    }
}
