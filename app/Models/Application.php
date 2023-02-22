<?php

namespace App\Models;

use Illuminate\Contracts\Database\Eloquent\Builder;
use App\Enums\ApplicationStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'job_id',
        'status',
        'cover_letter',
    ];

    /**
     * Returns query for pending applications for given user
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public static function getPendingApplications(User $user)
    {
        return $user->applications()->where('status', ApplicationStatus::Pending->value);
    }

    /**
     * Gets applications related to company by jobs id
     */
    public function scopeEmployer(Builder $query, User $user) {
        $jobs = [];
        $company = $user->company;

        if ($company) {
            $jobs = $company->jobs()->pluck('id');
        }

        return $query->whereIn('job_id', $jobs);
    }

    /**
     * Filter applications by keyword agains jobtitle
     * 
     * @todo Filter by candidate
     */
    public function scopeFilter(Builder $query, $collectionOfInputs) {
        if ($collectionOfInputs->get('keyword')) {
            $query->whereHas('job', function(Builder $query) use($collectionOfInputs){
                $query->where('jobtitle', 'like', "%".$collectionOfInputs->get('keyword')."%");
            });
        }

        return $query->orderBy('created_at', 'desc')->paginate(10);
    }

    /**
     * Get user who created application
     * 
    */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get Job to which applied
     * 
    */
    public function job()
    {
        return $this->belongsTo(Job::class);
    }
}
