<?php

namespace App\Models;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'candidate_id',
        'user_id',
        'job_id',
        'status',
    ];

    public function scopeFilter(Builder $query, $collectionOfInputs)
    {
        if ($collectionOfInputs->get('keyword')) {
            
            $query->whereHas('job', function(Builder $query) use($collectionOfInputs){
                $query->where('jobtitle', 'like', "%".$collectionOfInputs->get('keyword')."%");
            });

        }

        return $query->orderBy('created_at', 'desc')->paginate(10);
    }

    /**
     * Gets user to whom offer was created
     */
    public function candidate()
    {
        return $this->belongsTo(User::class, 'candidate_id');
    }

    /**
     * Gets user who created offer
     */
    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Gets Job which is offered to candidate
     */
    public function job(){
        return $this->belongsTo(Job::class, 'job_id');
    }
}
