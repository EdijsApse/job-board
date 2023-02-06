<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ['name'];

    /**
     * Gets data about job openings in sepcific categories which are stored in settings, or data about 6 random categories
     * 
     * @return array
     */
    public static function getLandingData()
    {
        $defaultCategories = Setting::getValueAsArray(Setting::LANDING_TOP_CATEGORIES);
        
        if (count($defaultCategories) === 0) {
            $models = Category::limit(8)->get();
        } else {
            $models = Category::whereIn('id', $defaultCategories)->get();
        }

        return $models->map(function ($category) {
            return [
                'name' => $category->name,
                'id' => $category->id,
                'css_class_name' => str_replace([" ", ","], "_", strtolower($category->name)),
                'job_count' => Job::where('category_id', $category->id)->count()
            ];
        });
    }
}
