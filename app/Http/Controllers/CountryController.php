<?php

namespace App\Http\Controllers;

use App\Http\Resources\CountryResource;
use App\Models\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(CountryResource::collection(Country::all()));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $country = new Country([
            'name_en' => $request->get('name_en'),
            'name_fr' => $request->get('name_fr'),
            'name_ar' => $request->get('name_ar'),
        ]);
        return response()->json(new CountryResource($country));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $country = Country::findOrFail($id);
        return response()->json(new CountryResource($country));
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
        $country = Country::findOrFail($id);
        $country->name_en = $request->get('name_en');
        $country->name_fr = $request->get('name_fr');
        $country->name_ar = $request->get('name_ar');
        return response()->json(new CountryResource($country));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Country::findOrFail($id)
            ->delete();
        $data = [
            'code' => 204,
            'message' => 'record deleted successfully',
        ];
        return response()->json($data, 204);
    }
}
