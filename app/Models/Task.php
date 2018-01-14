<?php
/**
 * Created by PhpStorm.
 * User: mouedhen
 * Date: 14/01/18
 * Time: 21:11
 */

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['name', 'done'];
}