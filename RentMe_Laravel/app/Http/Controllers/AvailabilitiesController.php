<?php

namespace App\Http\Controllers;

use App\Models\availabilities;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\DB;

class AvailabilitiesController extends Controller
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
    public function create()
    {
        //
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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

        $result = DB::table('availabilities')
        ->where('apartment_id','=',$apartment_id)
        ->where('date','=',$date)
        ->select('availabilities.time')
        ->distinct()
        ->get();

        if(count($result)>0){
           $ReturnArray = array ();
           foreach($result as $time){
            $ReturnArray[] = $time->time;
           }
           return($ReturnArray);
        }
        return response()->json(['status'=>true,'message'=>"No Available Times found!"]);

        
    }

    


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\availabilities  $availabilities
     * @return \Illuminate\Http\Response
     */
    public function showDate(Request $request)
    {
              $validator = Validator::make($request->all(), [
                    'apartment_id' => 'required',
                ]);
                if ($validator->fails()) {
                    return response()->json(['status'=>false,'message'=>$validator->errors()]);
                }
                $apartment_id = $request->get('apartment_id');

                $result = DB::table('availabilities')
                ->where('apartment_id','=',$apartment_id)
                ->select('availabilities.date')
                ->distinct()
                ->get();

                if(count($result)>0){
                    $ReturnArray = array ();
                    foreach($result as $time){
                     $ReturnArray[] = $time->date;
                    }
                    return($ReturnArray);
                 }
                return response()->json(['status'=>true,'message'=>"No Available Date found!"]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\availabilities  $availabilities
     * @return \Illuminate\Http\Response
     */
    public function edit(availabilities $availabilities)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\availabilities  $availabilities
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, availabilities $availabilities)
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
                        DB::table('availabilities')->insert([
                            'apartment_id'=>$apartment_id,
                            'date'=>$day,
                            'time'=>$timeslot,
                        ]);
                     }
                }

                return response()->json(['status' => 'Your Available Time Have Been Added!'], 201);
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\availabilities  $availabilities
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        //
        $validator = Validator::make($request->all(), [
            'apartment_id' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['status'=>false,'message'=>$validator->errors()]);
        }

        $apartment_id = $request->get('apartment_id');
        $deleted = DB::table('availabilities')->where('apartment_id', '=', $apartment_id)->delete();

        if($deleted){
            return response()->json(['status'=>true,'message'=>"Available Times Deleted Successfully!"]);
        }
        return response()->json(['status'=>true,'message'=>"No Available Time found!"]);

    }
}
