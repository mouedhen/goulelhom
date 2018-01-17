<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Petitions extends Model
{
    /*
     * $table->string('claimer')->nullable();
            $table->string('claimer_mail')->nullable();
            $table->string('municipality')->nullable();
            $table->string('theme')->nullable();
            $table->string('observation')->nullable();
     */

    protected $table = 'petitions';
    protected $fillable = ['claimer', 'claimer_mail', 'municipality', 'theme', 'observation'];
}
