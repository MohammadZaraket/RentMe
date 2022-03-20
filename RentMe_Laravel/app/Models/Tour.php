<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Tour extends Model
{
    use HasFactory, Notifiable;
   
    protected $fillable = [
        'name',
        'phone',
        'date',
        'time',
        'apartment_id',
        'approved',
 
    ];
}
