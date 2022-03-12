<?php

namespace App\Http\Controllers;

use App\Models\apartments;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\DB;

class ApartmentsController extends Controller
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
    public function search(Request $request)
    {
        {
                        $validator = Validator::make($request->all(), [
                            'longitude' => 'required',
                            'latitude' => 'required',
                            'bedrooms' => 'integer',
                            'price' => 'integer',
                            
                        ]);
                        if ($validator->fails()) {
                            return response()->json(['status'=>false,'message'=>'Please Enter A Specific Location To Start With']);
                        }
                        $longitude = $request->get('longitude');
                        $latitude = $request->get('latitude');
        
                        if ($request->has('bedrooms') && $request->has('price') ) {
                      
                            $bedrooms = $request->get('bedrooms');
                            $price = $request->get('price');

                            $query  = DB::table('apartments')
                            ->select(['id', 'name','bedrooms','bathrooms','price','space','description'])
                            ->selectRaw("( 6371 * acos ( cos ( radians(?) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(?) ) + sin ( radians(?) ) * sin( radians( latitude ) ) ) ) as distance", [$latitude, $longitude, $latitude])
                            ->having("distance", "<", "25")
                            ->where("bedrooms", ">=", $bedrooms)
                            ->where("price", "<=", $price)
                            ->orderBy('distance', 'asc')
                            ->offset(0)
                            ->limit(20);
                
                            $result = $query->get();

                        }

                        elseif($request->has('bedrooms')){

                            $bedrooms = $request->get('bedrooms');

                            $query  = DB::table('apartments')
                            ->select(['id', 'name','bedrooms','bathrooms','price','space','description'])
                            ->selectRaw("( 6371 * acos ( cos ( radians(?) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(?) ) + sin ( radians(?) ) * sin( radians( latitude ) ) ) ) as distance", [$latitude, $longitude, $latitude])
                            ->having("distance", "<", "25")
                            ->where("bedrooms", ">=", $bedrooms)
                            ->orderBy('distance', 'asc')
                            ->offset(0)
                            ->limit(20);
                
                            $result = $query->get();  
                        }

                        elseif($request->has('price')){

                            $price = $request->get('price');

                            $query  = DB::table('apartments')
                            ->select(['id', 'name','bedrooms','bathrooms','price','space','description'])
                            ->selectRaw("( 6371 * acos ( cos ( radians(?) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(?) ) + sin ( radians(?) ) * sin( radians( latitude ) ) ) ) as distance", [$latitude, $longitude, $latitude])
                            ->having("distance", "<", "25")
                            ->where("price", "<=", $price)
                            ->orderBy('distance', 'asc')
                            ->offset(0)
                            ->limit(20);
                
                            $result = $query->get();
                        }
                        else{

                            $query  = DB::table('apartments')
                            ->select(['id', 'name','bedrooms','bathrooms','price','space','description'])
                            ->selectRaw("( 6371 * acos ( cos ( radians(?) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(?) ) + sin ( radians(?) ) * sin( radians( latitude ) ) ) ) as distance", [$latitude, $longitude, $latitude])
                            ->having("distance", "<", "25")
                            ->orderBy('distance', 'asc')
                            ->offset(0)
                            ->limit(20);
                
                            $result = $query->get();
                        }
                     
                     
                        if(count($result)>0){
                            return response()->json($result);
                        }
                        return response()->json(['status'=>true,'message'=>"No Apartments found With Such Conditions!"]);
        
        }
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|between:2,100',
                'bathrooms' => 'required|integer|',
                'bedrooms' => 'required|integer|',
                'price' => 'required|integer|',
                'space' => 'required|integer|',
                'description' => 'required',
                'longitude' => 'required|string|between:2,100',
                'latitude' => 'required|string|between:2,100',
                'user_id' => 'required',
                
            ]);
            if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
            }
            $apartments = apartments::create(array_merge(
                        $validator->validated(),
                    ));
                    return response()->json([
                        'status' => 'Your Apartment Have Been Added!'
                
                    ], 201);
        }
    
}

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\apartments  $apartments
     * @return \Illuminate\Http\Response
     */
    public function show(apartments $apartments,Request $request)
    {
        /*$apartments = DB::table('apartments')->where('user_id', '1');
        return response()->json($apartments);*/
{
                $validator = Validator::make($request->all(), [
                    'user_id' => 'required',
                ]);
                if ($validator->fails()) {
                    return response()->json(['status'=>false,'message'=>$validator->errors()]);
                }
                $user_id = $request->get('user_id');

                $result = DB::table('apartments')
                ->where('user_id','=',$user_id)
                ->select('apartments.*')
                ->get();

                if(count($result)>0){
                    return response()->json($result);
                }
                return response()->json(['status'=>true,'message'=>"No data found!"]);

            }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\apartments  $apartments
     * @return \Illuminate\Http\Response
     */
    public function edit(apartments $apartments,Request $request)
    {


    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\apartments  $apartments
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, apartments $apartments)
    {
        {
            $validator = Validator::make($request->all(), [
                'id' => 'required',
                'name' => 'required|string|between:2,100',
                'bathrooms' => 'required|integer|',
                'bedrooms' => 'required|integer|',
                'price' => 'required|integer|',
                'space' => 'required|integer|',
                'description' => 'required',
                'longitude' => 'required|string|between:2,100',
                'latitude' => 'required|string|between:2,100',
            ]);
            if ($validator->fails()) {
                return response()->json(['status'=>false,'message'=>$validator->errors()]);
            }
            $id = $request->get('id');
            $name = $request->get('name');
            $bathrooms = $request->get('bathrooms');
            $bedrooms = $request->get('bedrooms');
            $price = $request->get('price');
            $space = $request->get('space');
            $description = $request->get('description');
            $longitude = $request->get('longitude');
            $latitude = $request->get('latitude');

            $result = DB::table('apartments')
            ->where('id','=',$id)
            ->update(['name' => $name, 'bathrooms' => $bathrooms,'bedrooms' => $bedrooms,'price' => $price,'space' => $space,'description' => $description,'longitude' => $longitude,'latitude' => $latitude]);

            if($result){
                return response()->json(['status'=>true,'message'=>"Info Edited Successfully!"]);
            }
            return response()->json(['status'=>true,'message'=>"No data found!"]);

        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\apartments  $apartments
     * @return \Illuminate\Http\Response
     */
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
            $deleted = DB::table('apartments')->where('id', '=', $id)->delete();

            if($deleted){
                return response()->json(['status'=>true,'message'=>"Apartment Deleted Successfully!"]);
            }
            return response()->json(['status'=>true,'message'=>"No data found!"]);

        }
    }
}
