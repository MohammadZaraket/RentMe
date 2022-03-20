<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Review extends Model
{
    use HasFactory, Notifiable;
   
    protected $fillable = [
        'rating',
        'review',
        'user_id',
        'apartment_id',
    ];



    public function UserReview() {

        return $this->belongsTo(User::class, 'user_id');
    }



    public function ApartmentReview() {

        return $this->belongsTo(Apartment::class, 'apartment_id');
    }

}
