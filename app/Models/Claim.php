<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Claim extends Model
{
    protected $table = 'claims';
    protected $fillable = ['subject', 'description', 'latitude', 'longitude', 'municipality_id', 'claimer_id'];

    public function claimer()
    {
        return $this->belongsTo(Claimer::class, 'claimer_id');
    }

    public function municipality()
    {
        return $this->belongsTo(Municipality::class, 'municipality_id');
    }

    public function claimsFiles()
    {
        return $this->hasMany(ClaimFile::class, 'claim_id');
    }
}
