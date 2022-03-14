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
