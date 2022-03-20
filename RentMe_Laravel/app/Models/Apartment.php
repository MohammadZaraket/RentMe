<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Apartment extends Model
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




       
    public function UserApartment() {

        return $this->belongsTo(User::class, 'user_id');
    }


    public function ApartmentImages() {

        return $this->hasMany(Image::class, 'apartment_id');
    }

    public function ApartmentReviews() {

        return $this->hasMany(Review::class, 'apartment_id');
    }

    public function ApartmentTours() {

        return $this->hasMany(Tour::class, 'apartment_id');
    }

    public function ApartmentAvailabilities() {

        return $this->hasMany(Availability::class, 'apartment_id');
    }


}
