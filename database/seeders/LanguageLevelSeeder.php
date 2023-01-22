<?php

namespace Database\Seeders;

use App\Models\LanguageLevel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LanguageLevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        LanguageLevel::create(['name' => 'A1 (Beginner)']);
        LanguageLevel::create(['name' => 'A2 (Elementary)']);
        LanguageLevel::create(['name' => 'B1 (Intermediate)']);
        LanguageLevel::create(['name' => 'B2 (Upper-Intermediate)']);
        LanguageLevel::create(['name' => 'C1 (Advanced)']);
        LanguageLevel::create(['name' => 'C2 (Proficiency)']);
        LanguageLevel::create(['name' => 'Native']);
    }
}
