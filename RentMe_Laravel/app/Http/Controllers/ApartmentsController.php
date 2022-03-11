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
    public function edit(apartments $apartments)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\apartments  $apartments
     * @return \Illuminate\Http\Response
     */
    public function destroy(apartments $apartments)
    {
        //
    }
}
