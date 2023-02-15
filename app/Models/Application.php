<?php

namespace App\Models;

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
