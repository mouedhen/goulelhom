<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $table = 'countries';
    protected $fillable = ['name_en', 'name_fr', 'name_ar'];

    public function cities()
    {
        return $this->hasMany(City::class, 'country_id', 'id');
    }
}
