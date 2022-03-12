<?php

namespace App\Http\Controllers;

use App\Models\reviews;
use Illuminate\Http\Request;
use Validator;
class ReviewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
            $validator = Validator::make($request->all(), [
                'review' => 'required|string|between:2,100',
                'rating' => 'required|integer',
                'user_id' => 'required',
                'apartment_id' => 'required',

            ]);
            if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
            }
            $reviews = reviews::create(array_merge(
                        $validator->validated(),
                    ));
                    return response()->json([
                        'status' => 'Your Review Have Been Added!'
                
                    ], 201);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\reviews  $reviews
     * @return \Illuminate\Http\Response
     */
    public function show(reviews $reviews)
    {
        {
            $validator = Validator::make($request->all(), [
                'apartment_id' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['status'=>false,'message'=>$validator->errors()]);
            }
            $apartment_id = $request->get('apartment_id');

            $result = DB::table('reviews')
            ->where('apartment_id','=',$apartment_id)
            ->where('reviews.user_id','users.id')
            ->select('reviews.rating','reviews.review','users.first_name')
            ->get();

            if(count($result)>0){
                return response()->json($result);
            }
            return response()->json(['status'=>true,'message'=>"No Reviews found!"]);

        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\reviews  $reviews
     * @return \Illuminate\Http\Response
     */
    public function edit(reviews $reviews)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\reviews  $reviews
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, reviews $reviews)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\reviews  $reviews
     * @return \Illuminate\Http\Response
     */
    public function destroy(reviews $reviews)
    {
        //
    }
}
