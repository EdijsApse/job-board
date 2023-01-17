<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SalaryTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('salary_types')->insert([
            ['name' => 'Hourly'],
            ['name' => 'Daily'],
            ['name' => 'Weekly'],
            ['name' => 'Monthly'],
            ['name' => 'Yearly'],
        ]);
    }
}
