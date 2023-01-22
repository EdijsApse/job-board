<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\CityResource;
use App\Http\Resources\CompanySizeResource;
use App\Http\Resources\CountryResource;
use App\Http\Resources\LanguageLevelResource;
use App\Http\Resources\LanguageResource;
use App\Http\Resources\SalaryTypeResource;
use App\Models\Category;
use App\Models\City;
use App\Models\CompanySize;
use App\Models\Country;
use App\Models\Language;
use App\Models\LanguageLevel;
use App\Models\Profile;
use App\Models\SalaryType;
use Illuminate\Support\Arr;

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
            'countries' => CountryResource::collection(Country::get()),
            'cities' => CityResource::collection(City::get()),
            'categories' => CategoryResource::collection(Category::get()),
            'company_sizes' => CompanySizeResource::collection(CompanySize::get()),
            'genders' => Arr::map(Profile::getGenders(), function($label, $value) {
                return [
                    'id' => $value,
                    'name' => $label
                ];
            }),
            'salary_types' => SalaryTypeResource::collection(SalaryType::get()),
            'languages' => LanguageResource::collection(Language::get()),
            'language_levels' => LanguageLevelResource::collection(LanguageLevel::get()),
        ]);
    }
}
