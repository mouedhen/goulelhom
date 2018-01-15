<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Municipality extends Model
{
    protected $table = 'municipalities';
    protected $fillable = ['name_en', 'name_fr', 'name_ar', 'city_id', 'is_active'];

    public function city()
    {
        return $this->belongsTo(City::class, 'city_id');
    }
}
