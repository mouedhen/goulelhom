<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Claimer extends Model
{
    protected $table = 'claimers';
    protected $fillable = ['name', 'phone_number', 'mail', 'address',
        'is_banned', 'municipality_id'];

    public function municipality()
    {
        return $this->belongsTo(Municipality::class, 'municipality_id');
    }

    public function claims()
    {
        return $this->hasMany(Claim::class, 'claimer_id');
    }
}
