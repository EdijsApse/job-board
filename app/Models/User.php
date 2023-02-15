<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * User Types
     */
    CONST TYPE_CANDIDATE = 1;
    CONST TYPE_EMPLOYER = 2;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_type',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'user_type' => 'integer'
    ];

    public function scopeFilterPublicCandidates(Builder $builder, $searchParams)
    {
        $builder
        ->where('user_type', self::TYPE_CANDIDATE)
        ->whereHas('profile', function(Builder $builder)  {
            $builder->where('is_public', true);
        });

        if ($searchParams->get('keyword') || $searchParams->get('category_id')) {
            $builder->whereHas('basicResumeDetails', function (Builder $builder) use ($searchParams) {
                if ($searchParams->get('keyword')) {
                    $builder->where('jobtitle', 'like', '%'.$searchParams->get('keyword').'%');
                }

                if ($searchParams->get('category_id')) {
                    $builder->where('category_id', $searchParams->get('category_id'));
                }
            });
        }
        
        return $builder->paginate(20);
    }

    public function scopeCandidate(Builder $builder)
    {
        $builder->where('user_type', self::TYPE_CANDIDATE);

        return $builder;
    }

    /**
     * Determines if user is candidate
     * @return boolean
     */
    public function isCandidate()
    {
        return $this->user_type === self::TYPE_CANDIDATE;
    }

    /**
     * Determines if user is employer
     * 
     * @return boolean
     */
    public function isEmployer()
    {
        return $this->user_type === self::TYPE_EMPLOYER;
    }

    /**
     * Gets full path where user related files will be stored
     */
    public function getFileStorageBasePath()
    {
        return $this->id;
    }

    /**
     * Gets full path where company related files will be stored
     */
    public function getCompanyFilesPath()
    {
        return $this->getFileStorageBasePath()."/company";
    }

    /**
     * Gets full path where profile related files will be stored
     */
    public function getProfileFilesPath()
    {
        return $this->getFileStorageBasePath()."/profile";
    }

    /**
     * Get name of User type
     */
    public function getUserTypeName()
    {
        if ($this->user_type === self::TYPE_CANDIDATE) {
            return 'candidate';
        }

        if ($this->user_type === self::TYPE_EMPLOYER) {
            return 'employer';
        }

        return '';
    }

    /**
     * Get users company
     * 
    */
    public function company()
    {
        return $this->hasOne(Company::class);
    }

    /**
     * Get users profile
     * 
    */
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }

    /**
     * Get resume basic details
     * 
    */
    public function basicResumeDetails()
    {
        return $this->hasOne(BasicResumeDetails::class);
    }

    /**
     * Get resume basic details
     * 
    */
    public function salary()
    {
        return $this->hasOne(Salary::class);
    }

    public function experiences()
    {
        return $this->hasMany(Experience::class);
    }

    /**
     * Get user educations
     * 
    */
    public function educations()
    {
        return $this->hasMany(Education::class);
    }

    /**
     * Get user language records
     * 
    */
    public function resumeLanguages()
    {
        return $this->hasMany(ResumeLanguage::class);
    }

    /**
     * Get user applications
     * 
    */
    public function applications()
    {
        return $this->hasMany(Application::class);
    }
}
