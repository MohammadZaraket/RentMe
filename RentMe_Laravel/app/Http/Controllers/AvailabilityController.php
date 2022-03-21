<?php

namespace App\Http\Controllers;

use App\Models\Availability;
use App\Models\Apartment;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\DB;

class AvailabilityController extends Controller
{

    public function showTime(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'apartment_id' => 'required',
            'date' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['status'=>false,'message'=>$validator->errors()]);
        }
        $apartment_id = $request->get('apartment_id');
        $date = $request->get('date');

        $times = Availability::where('apartment_id', $apartment_id)->where('date',$date)->where('taken','0')->get();

        if(count($times)>0){
           $ReturnArray = array ();
           foreach($times as $time){
            $ReturnArray[] = $time->time;
           }
           return($ReturnArray);
        }
        return response()->json(['status'=>true,'message'=>"No Available Times found!"]);

        
    }



    // Show Available Date
    public function showDate(Request $request)
    {
              $validator = Validator::make($request->all(), [
                    'apartment_id' => 'required',
                ]);
                if ($validator->fails()) {
                    return response()->json(['status'=>false,'message'=>$validator->errors()]);
                }
                $apartment_id = $request->get('apartment_id');
                $result = Availability::where('apartment_id', $apartment_id)->distinct()->get(['date']);

                if(count($result)>0){
                    $ReturnArray = array ();
                    foreach($result as $time){
                     $ReturnArray[] = $time->date;
                    }
                    return($ReturnArray);
                 }
                return response()->json(['status'=>true,'message'=>"No Available Date found!"]);
    }



//Insert New Available Times of Specific Apartment
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'apartment_id' => 'required',
            'date' => 'required',
            'from' => 'required',
            'to' => 'required',
        ]);
        if($validator->fails()){
            return response()->json(['status' =>$validator->errors()], 400);
        }
                $apartment_id = $request->get('apartment_id');
                $date = $request->get('date');  
                $StartTime = $request->get('from') ;
                $EndTime = $request->get('to') ;
                $Duration="30";
                $ReturnArray = array ();
                $StartTime  = strtotime ($StartTime);
                $EndTime = strtotime ($EndTime); 
                $AddMins = $Duration * 60;
            
                while ($StartTime <= $EndTime)
                {
                    $ReturnArray[] = date ("G:i", $StartTime);
                    $StartTime += $AddMins;
                }
        
                foreach($date as $day){
                    foreach($ReturnArray as $timeslot){
                            $availabilities = Availability::create(array_merge(
                                $validator->validated(),
                                ['date'=>$day], ['apartment_id'=>$apartment_id], ['time'=>$timeslot]
                            ));
                     }
                }

                return response()->json(['status' => 'Your Available Time Have Been Added!'], 201);
    }

    
    // Delete Available Times of Specific Apartment
    public function destroy(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'apartment_id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['status'=>false,'message'=>$validator->errors()]);
        }

        $apartment_id = $request->get('apartment_id');
        $deleted = Availability::where('apartment_id', $apartment_id)->delete();

        if($deleted){
            return response()->json(['status'=>true,'message'=>"Available Times Deleted Successfully!"],201);
        }
        return response()->json(['status'=>true,'message'=>"No Available Time found!"]);
    }
}
