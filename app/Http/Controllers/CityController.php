<?php

namespace App\Http\Controllers;

use App\Http\Resources\CityResource;
use App\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(CityResource::collection(City::all()));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $city = new City([
            'name_en' => $request->get('name_en'),
            'name_fr' => $request->get('name_fr'),
            'name_ar' => $request->get('name_ar'),
            'country_id' => $request->get('country_id'),
        ]);
        return response()->json(new CityResource($city));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $city = City::findOrFail($id);
        $city->name_en = $request->get('name_en');
        $city->name_fr = $request->get('name_fr');
        $city->name_ar = $request->get('name_ar');
        $city->country_id = $request->get('country_id');
        return response()->json(new CityResource($city));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        City::findOrFail($id)
            ->delete();
        $data = [
            'code' => 204,
            'message' => 'record deleted successfully',
        ];
        return response()->json($data, 204);
    }
}
