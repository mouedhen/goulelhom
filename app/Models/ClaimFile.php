<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClaimFile extends Model
{
    protected $table = 'claims_files';
    protected $fillable = ['file_path', 'claim_id'];

    public function claim()
    {
        return $this->belongsTo(Claim::class, 'claim_id');
    }
}
