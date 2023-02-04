<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    /**
     * Statuses
     */
    CONST TYPE_PENDING = 0;
    CONST TYPE_APPROVED = 1;
    CONST TYPE_REJECTED = 2;
    CONST TYPE_CANCELED = 2;

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
     * Get all statuses of application
     */
    public static function getStatuses()
    {
        return [
            self::TYPE_PENDING => 'Pending',
            self::TYPE_APPROVED => 'Approved',
            self::TYPE_REJECTED => 'Rejected',
            self::TYPE_CANCELED => 'Canceled',
        ];
    }

    /**
     * Get status of application
     */
    public function getStatusName()
    {
        return self::getStatuses()[$this->status];
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
