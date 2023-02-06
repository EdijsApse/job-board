<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            ['name' => 'Agriculture, Food, and Natural Resources'],
            ['name' => 'Architecture and Construction'],
            ['name' => 'Arts, Audio/Video Technology, and Communication'],
            ['name' => 'Business and Finance'],
            ['name' => 'Education and Training'],
            ['name' => 'Government and Public Administration'],
            ['name' => 'Health Science'],
            ['name' => 'Information Technology'],
            ['name' => 'Law, Public Safety, Corrections, and Security'],
            ['name' => 'Marketing'],
            ['name' => 'Science, Technology, Engineering, and Math']
        ]);
    }
}
