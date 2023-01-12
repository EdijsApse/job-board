<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CityCollection;
use App\Http\Resources\CompanySizeCollection;
use App\Http\Resources\CountryCollection;
use App\Models\Category;
use App\Models\City;
use App\Models\CompanySize;
use App\Models\Country;

class PublicController extends Controller
{
    
    /**
     * Display multiple resources which are needed to render different select options.
     *
     * @return \Illuminate\Http\Response
     */
    public function lists()
    {
        return response()->json([
            'countries' => new CountryCollection(Country::get()),
            'cities' => new CityCollection(City::get()),
            'categories' => new CategoryCollection(Category::get()),
            'company_sizes' => new CompanySizeCollection(CompanySize::get()),
        ]);
    }
}
