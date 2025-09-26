<?php

namespace App\Http\Controllers;

use App\Models\MasterModel;
use Illuminate\Http\Request;
use App\Exceptions\CommonException;

//NOTE resources index and catch log errors should be here at controller
class MasterController extends Controller
{
    public  $Master_model;

    public function __construct(){
        $this->Master_model = new MasterModel();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {
        try{
            return $this->Master_model->MasterList();
        }catch (\Exception $e) {
            $err_data = ['Parameters' => $req->all(), 'Functions' => __FUNCTION__];
            throw new CommonException($e, $err_data, 500);
        }
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
    public function store(Request $req)
    {
        try{
            return $this->Master_model->AddUser($req);
        }catch (\Exception $e) {
            $err_data = ['Parameters' => $req->all(), 'Functions' => __FUNCTION__];
            throw new CommonException($e, $err_data, 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $req, $id)
    {
        try{
            if($id == 'setcookies')
                return $this->Master_model->SetCookies($req);
        }catch (\Exception $e) {
            $err_data = ['Parameters' => $req->all(), 'Functions' => __FUNCTION__];
            throw new CommonException($e, $err_data, 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $req, $id)
    {
        try{
            if($id == 'updateuser')
                return $this->Master_model->UpdateUser($req);
        }catch (\Exception $e) {
            $err_data = ['Parameters' => $req->all(), 'Functions' => __FUNCTION__];
            throw new CommonException($e, $err_data, 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $req, $id)
    {
        try{
            if($id == 'deleteuser')
                return $this->Master_model->DeleteUser($req);
        }catch (\Exception $e) {
            $err_data = ['Parameters' => $req->all(), 'Functions' => __FUNCTION__];
            throw new CommonException($e, $err_data, 500);
        }
    }
}
