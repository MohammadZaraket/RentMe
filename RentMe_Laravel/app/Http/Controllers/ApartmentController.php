<?php

namespace App\Http\Controllers;

use App\Models\Apartment;
use App\Models\Image;
use App\Models\Availability;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\DB;
use Auth;

class ApartmentController extends Controller
{
   
    public function search(Request $request)
    {
        {
                        $validator = Validator::make($request->all(), [
                            'longitude' => 'required',
                            'latitude' => 'required',
                            'bedrooms' => 'integer',
                            'price' => 'integer',
                            
                        ]);
                        if ($validator->fails()) {
                            return response()->json(['status'=>false,'message'=>'Please Enter A Specific Location To Start With']);
                        }
                        $longitude = $request->get('longitude');
                        $latitude = $request->get('latitude');
        
                        if ($request->has('bedrooms') && $request->has('price') && count($request->all())>0) {
                      
                            $bedrooms = $request->get('bedrooms');
                            $price = $request->get('price');

                            $query  = DB::table('apartments')
                            ->select(['id', 'name','bedrooms','bathrooms','price','space','description'])
                            ->selectRaw("( 6371 * acos ( cos ( radians(?) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(?) ) + sin ( radians(?) ) * sin( radians( latitude ) ) ) ) as distance", [$latitude, $longitude, $latitude])
                            ->having("distance", "<", "25")
                            ->where("bedrooms", ">=", $bedrooms)
                            ->where("price", "<=", $price)
                            ->orderBy('distance', 'asc')
                            ->offset(0)
                            ->limit(20);
                            $result = $query->get();

                        }

                        elseif($request->has('bedrooms')){

                            $bedrooms = $request->get('bedrooms');

                            $query  = DB::table('apartments')
                            ->select(['id', 'name','bedrooms','bathrooms','price','space','description'])
                            ->selectRaw("( 6371 * acos ( cos ( radians(?) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(?) ) + sin ( radians(?) ) * sin( radians( latitude ) ) ) ) as distance", [$latitude, $longitude, $latitude])
                            ->having("distance", "<", "25")
                            ->where("bedrooms", ">=", $bedrooms)
                            ->orderBy('distance', 'asc')
                            ->offset(0)
                            ->limit(20);
                
                            $result = $query->get();  
                        }

                        elseif($request->has('price')){

                            $price = $request->get('price');

                            $query  = DB::table('apartments')
                            ->select(['id', 'name','bedrooms','bathrooms','price','space','description'])
                            ->selectRaw("( 6371 * acos ( cos ( radians(?) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(?) ) + sin ( radians(?) ) * sin( radians( latitude ) ) ) ) as distance", [$latitude, $longitude, $latitude])
                            ->having("distance", "<", "25")
                            ->where("price", "<=", $price)
                            ->orderBy('distance', 'asc')
                            ->offset(0)
                            ->limit(20);
                
                            $result = $query->get();
                        }
                        else{

                            $query  = DB::table('apartments')
                            ->select(['id', 'name','bedrooms','bathrooms','price','space','description'])
                            ->selectRaw("( 6371 * acos ( cos ( radians(?) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(?) ) + sin ( radians(?) ) * sin( radians( latitude ) ) ) ) as distance", [$latitude, $longitude, $latitude])
                            ->having("distance", "<", "25")
                            ->orderBy('distance', 'asc')
                            ->offset(0)
                            ->limit(20);
                
                            $result = $query->get();
                        }
                     
                     
                        if(count($result)>0){
                            return response()->json($result);
                        }
                        return response()->json(['status'=>true,'message'=>"No Apartments found With Such Conditions!"]);
        
        }
        
    }


    public function store(Request $request)
    {
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
                'imgs' => 'required',

                'date' => 'required',
                'from' => 'required',
                'to' => 'required',
            ]);
            if($validator->fails()){
                return response()->json(['status' =>$validator->errors()], 400);
            }
            $apartments = Apartment::create(array_merge(
                $validator->validated(),['user_id' =>Auth::user()->id]
            ));
            
            if( $apartments->id){
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

                    $images = Image::create(array_merge(
                        $validator->validated(),
                        ['image'=>$file_name],['apartment_id'=>$apartments->id]

                    ));
                }

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
                                ['date'=>$day], ['apartment_id'=>$apartments->id], ['time'=>$timeslot]
                            ));
                         }
                    }
                    return response()->json(['status' => 'Your Apartment Have Been Added!'], 201);
            }
    
        }   
}


   // Show the details of specific apartment

   public function showDetails(Request $request)
   {
    $validator = Validator::make($request->all(), [
        'apartment_id' => 'required',
    ]);
    if ($validator->fails()) {
        return response()->json(['status'=>false,'message'=>$validator->errors()]);
    }
    $apartment_id = $request->get('apartment_id');
    $apartment =Apartment::find($apartment_id);
    $detail = $apartment->with("ApartmentImages")->where('id',$apartment_id)->get();
    echo($detail);
   /* $detail = $apartment->with("ApartmentImages")->get();
    return response()->json(["Apartment"=> $detail]);*/
   }

    // Show the apartments of the user
    public function show(Request $request)
    {
            $user = Auth::user();
            $apartments = $user->UserApartments()->get();
            return response()->json(["Apartments"=> $apartments],201);
    }


    public function update(Request $request, apartments $apartments)
    {
        {
            $validator = Validator::make($request->all(), [
                'id' => 'required',
                'name' => 'required|string|between:2,100',
                'bathrooms' => 'required|integer|',
                'bedrooms' => 'required|integer|',
                'price' => 'required|integer|',
                'space' => 'required|integer|',
                'description' => 'required',
                'longitude' => 'required|string|between:2,100',
                'latitude' => 'required|string|between:2,100',
            ]);
            if ($validator->fails()) {
                return response()->json(['status'=>false,'message'=>$validator->errors()]);
            }
            $id = $request->get('id');
            $name = $request->get('name');
            $bathrooms = $request->get('bathrooms');
            $bedrooms = $request->get('bedrooms');
            $price = $request->get('price');
            $space = $request->get('space');
            $description = $request->get('description');
            $longitude = $request->get('longitude');
            $latitude = $request->get('latitude');

            /*$result = DB::table('apartments')
            ->where('id','=',$id)
            ->update(['name' => $name, 'bathrooms' => $bathrooms,'bedrooms' => $bedrooms,'price' => $price,'space' => $space,'description' => $description,'longitude' => $longitude,'latitude' => $latitude]);
            */
            $apartment = Apartment::find(id);
            $apartment->name = $name;
            $apartment->bedrooms = $bedrooms;
            $apartment->bathrooms = $bathrooms;
            $apartment->price = $price;
            $apartment->space = $space;
            $apartment->description = $description;
            $apartment->longitude = $longitude;
            $apartment->latitude = $latitude;
            $tour->save();

            return response()->json(['status'=>true,'message'=>"Info Edited Successfully!"],201);

        }
    }


    public function destroy(Request $request)
    {
        {
            $validator = Validator::make($request->all(), [
                'id' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['status'=>false,'message'=>$validator->errors()]);
            }

            $id = $request->get('id');
            $apartment = Apartment::find($id);
            $apartment->delete();

            return response()->json(['status'=>true,'message'=>"Apartment Deleted Successfully!"],201);

        }
    }
}
