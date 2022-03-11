<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class apartments extends Model
{
    use HasFactory, Notifiable;
   
    protected $fillable = [
        'name',
        'bathrooms',
        'bedrooms',
        'price',
        'space',
        'description',
        'longitude',
        'latitude',
        'user_id',
    ];
}
