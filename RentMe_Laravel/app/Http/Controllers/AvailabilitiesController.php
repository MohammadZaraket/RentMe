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
