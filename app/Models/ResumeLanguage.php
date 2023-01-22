<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResumeLanguage extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'language_id',
        'user_id',
        'language_level_id',
        'additional_notes',
    ];

    /**
     * Gets language
     */
    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    /**
     * Gets language level
     */
    public function languageLevel()
    {
        return $this->belongsTo(LanguageLevel::class);
    }
}
