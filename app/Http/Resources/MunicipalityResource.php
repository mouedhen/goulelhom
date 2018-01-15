<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class MunicipalityResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name_en' => $this->name_en,
            'name_fr' => $this->name_fr,
            'name_ar' => $this->name_ar,
            'is_active' => $this->is_active,
            'city_id' => $this->city_id,
            'city' => $this->city,
        ];
    }
}
