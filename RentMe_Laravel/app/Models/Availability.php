<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Availability extends Model
{
    use HasFactory, Notifiable;
   
    protected $fillable = [
        'date',
        'time',
        'apartment_id',
    ];



    public function ApartmentAvailability() {

        return $this->belongsTo(Apartment::class, 'apartment_id');
    }
}
