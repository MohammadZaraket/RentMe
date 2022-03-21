<?php

namespace App\Http\Controllers;

use App\Models\Tour;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\DB;

class TourController extends Controller
{
    
    public function store(Request $request)
    {
        {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|between:2,100',
                'phone' => 'required|string|between:2,100',
                'date' => 'required|string|between:2,100',
                'time' => 'required|string|between:2,100',
                'apartment_id' => 'required',
                
            ]);
            if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
            }
            $tours = tours::create(array_merge(
                $validator->validated(),
            ));
            
         
            return response()->json(['status' => 'Your Request Have Been Sent!'], 201);
            

            
           
        }
    }


    public function show(tours $tours, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['status'=>false,'message'=>$validator->errors()]);
        }
        $user_id = $request->get('user_id');

        $result = DB::table('apartments')
        ->join('tours', 'tours.apartment_id', '=', 'apartments.id')
        ->where('user_id','=',$user_id)
        ->select('tours.name as requested_by','tours.phone','tours.date','tours.time','apartments.name as for_apartment')
        ->get();

        if(count($result)>0){
            return response()->json($result);
        }
        else{
            return response()->json(['status'=>true,'message'=>"No Requested Tours found!"]);
        }

    }


    // When apartment Owenr Approves the tour request

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['status'=>false,'message'=>$validator->errors()]);
        }
        $id = $request->get('id');
        $tour = Tour::find(id);
        $tour->approved = '1';
        $tour->save();

        if($result){
            return response()->json(['status'=>true,'message'=>"Tour Accepted!"]);
        }
        return response()->json(['status'=>true,'message'=>"No data found!"]);
    }

 
}
