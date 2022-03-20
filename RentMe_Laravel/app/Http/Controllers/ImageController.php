<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ImageController extends Controller
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
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\images  $images
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
       
        $validator = Validator::make($request->all(), [
            'apartment_id' => 'required',
            
        ]);
        if ($validator->fails()) {
            return response()->json(['status'=>false,'message'=>$validator->errors()]);
        }
        $apartment_id = $request->get('apartment_id');

        $result = DB::table('images')
        ->where('apartment_id','=',$apartment_id)
        ->select('images.image')
        ->get();

        if(count($result)>0){
            return response()->json($result);
        }
        return response()->json(['status'=>true,'message'=>"No Images found!"]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\images  $images
     * @return \Illuminate\Http\Response
     */
    public function edit(images $images)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\images  $images
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'apartment_id' => 'required',
            'imgs' => 'required',

        ]);
        if($validator->fails()){
            return response()->json(['status' =>$validator->errors()], 400);
        }
        
        $apartment_id = $request->get('apartment_id');
        $result = DB::table('images')
        ->where('apartment_id','=',$apartment_id)
        ->select('images.image')
        ->get();
        

        if(count($result) + count($request->get('imgs')) <= 3 ){
        
            foreach($request->get('imgs') as $imgDoc){
                $img = $imgDoc;
                $randomNum=substr(str_shuffle("0123456789abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMNOPQRSTVWXYZ"), 0, 16);
                // $folderPath = "C:/Users/USER/Desktop/SE FACTORY/FSW/Final Project/RentMe/RentMe_Laravel/app/assets/";
                $folderPath = public_path().'/Images/'; //path location
                $image_parts = explode(";base64,", $img);
                $image_type_aux = explode("image/", $image_parts[0]);
                $image_type = $image_type_aux[1];
                $image_base64 = base64_decode($image_parts[1]);
                $uniqid = uniqid();
                $file_name =  $randomNum."__".$uniqid . '.'.$image_type;
                $file = $folderPath . $file_name;
                file_put_contents($file, $image_base64);
                DB::table('images')->insert([
                    'image'=>$file_name,
                    'apartment_id'=>$apartment_id,
                  
                ]);
         }
         }
         else{

            return response()->json(['status'=>true,'message'=>"You Can't Add More Images"]);
         }

         return response()->json(['status'=>true,'message'=>"Image Added Successfully!"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\images  $images
     * @return \Illuminate\Http\Response
     */
    public function destroy(images $images)
    {
        //
    }
}
