<?php

namespace Database\Seeders;

use App\Models\Country;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        DB::table('countries')->insert([
            ['name' => 'Latvia', 'code' => 'lv'],
            ['name' => 'United Kingdom', 'code' => 'uk']
        ]);

        $lv = Country::where('code', 'lv')->first();
        $uk = Country::where('code', 'uk')->first();

        DB::table('cities')->insert([
            ['name' => 'Riga', 'country_id' => $lv->id],
            ['name' => 'Jurmala', 'country_id' => $lv->id],
            ['name' => 'Liepaja', 'country_id' => $lv->id],
            ['name' => 'Ventspils', 'country_id' => $lv->id],
            ['name' => 'London', 'country_id' => $uk->id],
            ['name' => 'Birmingham', 'country_id' => $uk->id],
            ['name' => 'Cambridge', 'country_id' => $uk->id],
            ['name' => 'Chester', 'country_id' => $uk->id],
        ]);
    }
}
