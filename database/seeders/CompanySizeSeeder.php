<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CompanySizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('company_sizes')->insert([
            ['size' => 'Less than 10 Employees'],
            ['size' => '10-49 Employees'],
            ['size' => '50-249 Employees'],
            ['size' => 'More than 250 Employees']
        ]);
    }
}
