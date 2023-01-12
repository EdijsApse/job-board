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
            ['name' => 'Less than 10 Employees'],
            ['name' => '10-49 Employees'],
            ['name' => '50-249 Employees'],
            ['name' => 'More than 250 Employees']
        ]);
    }
}
