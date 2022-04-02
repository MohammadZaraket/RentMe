<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ImageController extends Controller
{
    // Show images of specific Apartment

    public function show(Request $request)
    {   
        try {
            $validator = Validator::make($request->all(), [
                'apartment_id' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['status'=>false,'message'=>$validator->errors()]);
            }
    
            $apartment_id = $request->get('apartment_id');
            $result = Image::where('apartment_id', $apartment_id)->get();
    
            if(count($result)>0){
                return response()->json($result);
            }
            return response()->json(['status'=>true,'message'=>"No Images found!"]);
       
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        } 
       
    }




    // Add New images of specific Apartment

    public function update(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'apartment_id' => 'required',
                'imgs' => 'required',
            ]);
            if($validator->fails()){
                return response()->json(['status' =>$validator->errors()], 400);
            }
            
            $apartment_id = $request->get('apartment_id');
            $result = Image::where('apartment_id', $apartment_id)->get(['image']);
    
            if(count($result) + count($request->get('imgs')) <= 3 ){
            
                foreach($request->get('imgs') as $imgDoc){
                    $img = $imgDoc;
                    $randomNum=substr(str_shuffle("0123456789abcdefghijklmnopqrstvwxyzABCDEFGHIJKLMNOPQRSTVWXYZ"), 0, 16);
                    $folderPath = public_path().'/Images/'; //path location
                    $image_parts = explode(";base64,", $img);
                    $image_type_aux = explode("image/", $image_parts[0]);
                    $image_type = $image_type_aux[1];
                    $image_base64 = base64_decode($image_parts[1]);
                    $uniqid = uniqid();
                    $file_name =  $randomNum."__".$uniqid . '.'.$image_type;
                    $file = $folderPath . $file_name;
                    file_put_contents($file, $image_base64);
    
                    $images = Image::create(array_merge(
                        $validator->validated(),
                        ['image'=>$file_name],['apartment_id'=>$apartment_id]
    
                    ));
             }
             }
             else{
    
                return response()->json(['status'=>true,'message'=>"You Can't Add More Images"]);
             }
    
             return response()->json(['status'=>true,'message'=>"Image Added Successfully!"]);
       
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        } 

       
    }


}
