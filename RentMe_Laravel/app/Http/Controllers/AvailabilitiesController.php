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
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'date' => 'required',
            'from' => 'required',
            'to' => 'required',
            'apartment_id' => 'required',
            
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $apartment_id = $request->get('apartment_id');
        $date = $request->get('date');
             
        $StartTime = $request->get('from') ;
        $EndTime = $request->get('to') ;
        $Duration="30";
        $ReturnArray = array ();
        $StartTime    = strtotime ($StartTime);
        $EndTime      = strtotime ($EndTime); 
        $AddMins  = $Duration * 60;
    
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
    }


    


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\availabilities  $availabilities
     * @return \Illuminate\Http\Response
     */
    public function show(availabilities $availabilities)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\availabilities  $availabilities
     * @return \Illuminate\Http\Response
     */
    public function destroy(availabilities $availabilities)
    {
        //
    }
}
