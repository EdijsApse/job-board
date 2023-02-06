<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    CONST LANDING_TOP_CATEGORIES = 'LANDING_TOP_CATEGORIES';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'key',
        'value',
    ];

    /**
     * Gets value as array for given setting key
     */
    public static function getValueAsArray($key)
    {
        $record = self::where(['key' => $key])->first();
        if (!$record) {
            return [];
        }

        return explode(',', $record->value);
    }
}
