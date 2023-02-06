<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $categories = Category::where('name', 'Architecture and Construction')
        ->orWhere('name', 'Business and Finance')
        ->orWhere('name', 'Education and Training')
        ->orWhere('name', 'Health Science')
        ->orWhere('name', 'Information Technology')
        ->orWhere('name', 'Marketing')
        ->orWhere('name', 'Law, Public Safety, Corrections, and Security')
        ->orWhere('name', 'Government and Public Administration')
        ->pluck('id')
        ->toArray();

        Setting::updateOrCreate(['key' => Setting::LANDING_TOP_CATEGORIES], ['value' => implode(",", $categories)]);
    }
}