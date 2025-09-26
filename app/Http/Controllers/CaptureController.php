<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CaptureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return count(Storage::disk('public')->allFiles('Capture/Sample'));
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
        $params = json_decode($req->params);
            for($x=1 ; $x < 9 ; $x++){
                $success = 0;
                // NOTE: Saving to Storage path
                if(!Storage::disk('public')->exists($params->folder.'/'. $params->title.'_'.$x.'.jpg')){
                    $success = Storage::disk('public')->put($params->folder.'/'. $params->title.'_'.$x.'.jpg', file_get_contents($req->file->getRealPath()));
                  
                    if($success){
                        // NOTE: Saving to Desktop
                        self::CopyToDesktop($req, $params, $x);
   
                    }

                    break;
                }

            }


           
        
 
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


    //NOTE Additional functions

    public function CopyToDesktop($req, $params, $x){
        $host = "";
                    
        $host = gethostbyaddr($req->ip());
        $User = "";
        $i = "";
        exec('cmdkey /add:' . $host . ' /user:' . $host . '\administrator /pass:hrdsmd2013!', $i);

        exec("query user /server:" . $host, $output);
        if ($output == []) {
            exec("wmic /node:$_SERVER[REMOTE_ADDR] /user:administrator /password:hrdsmd2013! COMPUTERSYSTEM Get UserName", $output);
            $User = substr($output[1], strpos($output[1], "\\"), 10);
        } else {
            $User =  substr(trim($output[1]), 0, strpos(trim($output[1]), " "));
        }

        $finalpath = storage_path('app\\public\\');


        exec("mkdir \\" . "\\" . $host . "\\c$\\Users\\" . $User . "\\Desktop\\".$params->folder);
        $mypath = 'copy "' . $finalpath . $params->folder . '\\' . $params->title.'_'.$x.'.jpg'. '"';
        $otherPath = "\\" . "\\" . $host . "\\c$\\Users\\" . $User . "\\Desktop\\".$params->folder;

        exec($mypath . ' ' . $otherPath);
    }
}
