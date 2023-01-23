<?php

namespace Database\Seeders;

use App\Models\EmploymentType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EmploymentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        EmploymentType::create(['name' => 'Full-time']);
        EmploymentType::create(['name' => 'Part-time']);
        EmploymentType::create(['name' => 'Contract']);
        EmploymentType::create(['name' => 'Independent contractor']);
        EmploymentType::create(['name' => 'Temporary']);
        EmploymentType::create(['name' => 'On-call']);
        EmploymentType::create(['name' => 'Volunteer']);
    }
}
