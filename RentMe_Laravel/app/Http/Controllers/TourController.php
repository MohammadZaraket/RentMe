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
        try {
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
       
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        } 
   
    }


    // When apartment Owenr Approves the tour request

    public function update(Request $request)
    {
        try {
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
       
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        } 
    }

}