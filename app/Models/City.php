<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $table = 'cities';
    protected $fillable = ['name_en', 'name_fr', 'name_ar', 'country_id'];

    public function belongsTo($related, $foreignKey = null, $ownerKey = null, $relation = null)
    {
    }

    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id');
    }
}
