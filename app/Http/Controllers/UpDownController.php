<?php

namespace App\Http\Controllers;

use App\Models\UpDownModel;
use Illuminate\Http\Request;
use App\Exceptions\CommonException;
use Illuminate\Support\Facades\Storage;

class UpDownController extends Controller
{
    public $UpDown_model;

    public function __construct(){
        $this->UpDown_model = new UpDownModel();
    }

    public function index(Request $req)
    {
        try {
            $return_val = $this->UpDown_model->UpDownList();
            return response()->json($return_val['result'], $return_val['status_code']);
        } catch (\Exception $e) {
            $err_data = [
                'CPNo' => $req->input('CPNo'),
                'Functions' => __FUNCTION__,
                'Parameters'=> $req->all()
            ];
            throw new CommonException($e, $err_data, 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $req)
    {
        // try {
            $path = storage_path() . '/app/public/uploads/' . $req->filename;
            return response()->download($path);
        // } catch (\Exception $e) {
        //     $err_data = [
        //         'CPNo' => $req->input('CPNo'),
        //         'Functions' => __FUNCTION__,
        //         'Parameters'=> $req->all()
        //     ];
        //     throw new CommonException($e, $err_data, 500);
        // }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $req)
    {
        // try{
            return $return_val = $this->UpDown_model->InsertUpDown($req);
            // return response()->json($return_val['result'], $return_val['status_code']);
        // }catch (\Exception $e) {
        //     $err_data = [
        //         'CPNo' => $req->input('CPNo'),
        //         'Functions' => __FUNCTION__,
        //         'Parameters'=> $req->all()
        //     ];
        //     throw new CommonException($e, $err_data, 500);
        // }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
