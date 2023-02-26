<?php

namespace App\Enums;

enum FeaturedTypes: int
{

    /**
     * Featured Item Types
     */
    case Job = 0;
    case Candidate = 1;
    case Company = 2;
}
