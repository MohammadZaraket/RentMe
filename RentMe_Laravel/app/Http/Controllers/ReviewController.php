<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\Apartment;
use App\Models\User;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\DB;
use Auth;

class ReviewController extends Controller
{
  
    public function create(Request $request)
    {
            $validator = Validator::make($request->all(), [
                'review' => 'required|string|between:2,100',
                'rating' => 'required|integer',
                'apartment_id' => 'required',

            ]);
            if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
            }
            $reviews = Review::create(array_merge(
                        $validator->validated(), ['user_id' =>Auth::user()->id]
                    ));
                    return response()->json([
                        'status' => 'Your Review Have Been Added!'
                
                    ], 201);
    }

 
    public function show(Request $request)
    {
            $validator = Validator::make($request->all(), [
                'apartment_id' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['status'=>false,'message'=>$validator->errors()]);
            }
            $apartment_id = $request->get('apartment_id');
            $apartment =Apartment::find($apartment_id);
            $reviews = $apartment->ApartmentReviews()->with("UserReview")->get();
            return response()->json(["reviews"=> $reviews]);
    }


    public function destroy(Request $request)
    {
        {
            $validator = Validator::make($request->all(), [
                'id' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['status'=>false,'message'=>$validator->errors()]);
            }

            $id = $request->get('id');
            $deleted = Review::where('id', $id)->delete();

            if($deleted){
                return response()->json(['status'=>true,'message'=>"Review Deleted Successfully!"]);
            }
            return response()->json(['status'=>true,'message'=>"No Review found!"]);

        }
    }
}
