<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class reviews extends Model
{
    use HasFactory, Notifiable;
   
    protected $fillable = [
        'rating',
        'review',
        'user_id',
        'apartment_id',
    ];
}
