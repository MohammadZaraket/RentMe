<?php

namespace App\Http\Controllers;

use App\Models\images;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\DB;

class ImagesController extends Controller
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

    
    public function addImages(Request $request)
    {
        
        $validator = Validator::make($request->all(), [
            'data' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['status'=>false,'message'=>'Please Enter A Specific Location To Start With']);
        }


        if($request->data){

            $img = $request->data;
            $folderPath = "C:/Users/USER/Desktop/SE FACTORY/FSW/Final Project/RentMe/RentMe_Laravel/app/assets/"; //path location
            
            $image_parts = explode(";base64,", $img);
            $image_type_aux = explode("image/", $image_parts[0]);
            $image_type = $image_type_aux[1];
            $image_base64 = base64_decode($image_parts[1]);
            $uniqid = uniqid();
            $file = $folderPath . $uniqid . '.'.$image_type;
            file_put_contents($file, $image_base64);

        }


           /* $image_64 = $request->get('image');//your base64 encoded data

            $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];   // .jpg .png .pdf

            $replace = substr($image_64, 0, strpos($image_64, ',')+1); 

            // find substring fro replace here eg: data:image/png;base64,

            $image = str_replace($replace, '', $image_64); 

            $image = str_replace(' ', '+', $image); 

            $imageName = Str::random(10).'.'.$extension;

            Storage::disk('public')->put($imageName, base64_decode($image));*/


          /*  $data = input::all();
            $base64_str = substr($data->base64_image, strpos($data->base64_image, ",")+1);
            $data = base64_decode($base64_str);
            $jpg_url = "User-".time().".jpg";
            $path = public_path('img/designs/' . $jpg_url);
            Image::make("D://images.jpg")->save($path);

            $response = array(
                'status' => 'success',
            );
            return Response::json( $response  );*/

           /* $data = Input::all();
            $png_url = "product-".time().".png";
            $path = public_path().'img/designs/' . $png_url;
        
            Image::make(file_get_contents($data->base64_image))->save($path);     
            $response = array(
                'status' => 'success',
            );
            return Response::json( $response  );*/

          /*  $data = input::all();
            $base64_str = substr($data->base64_image, strpos($data->base64_image, ",")+1);
            $data = base64_decode($base64_str);
            $jpg_url = "User-".time().".jpg";
            $path = public_path('img/designs/' . $jpg_url);
            Image::make("D://images.jpg")->save($path);

            $response = array(
                'status' => 'success',
            );
            return Response::json( $response  );*/

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
    public function show(images $images)
    {
        //
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
    public function update(Request $request, images $images)
    {
        //
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
