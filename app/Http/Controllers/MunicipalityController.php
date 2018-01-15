<?php

namespace App\Http\Controllers;

use App\Http\Resources\MunicipalityResource;
use App\Models\Municipality;
use Illuminate\Http\Request;

class MunicipalityController extends Controller
{
    public function index()
    {
        return response()->json(MunicipalityResource::collection(Municipality::where('is_active', '=', true)->get()));
    }
}
