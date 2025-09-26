<?php

namespace App\Models;

use App\DAO\DAOMaster;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

//NOTE all logical conditions should be here at the model
class MasterModel extends Model
{
    public $dao_Master;

    public function __construct(){
        $this->dao_Master = new DAOMaster();
    }

    //ANCHOR MasterList
    public function MasterList(){
        return $this->dao_Master::MasterList();
    }

    public function AddUser($req){
        //NOTE put condition here if needed
        $dao_Master = $this->dao_Master;

        //NOTE going to validation function
        $invalid = self::Validation($req);
        if($invalid)
            return $invalid;

        //NOTE only use this for insert/update
        return DB::transaction(function() use($req,$dao_Master) { 
           return $dao_Master::AddUser($req);    
        });
    }

    public function UpdateUser($req){
        $dao_Master = $this->dao_Master;

        $invalid = self::Validation($req);
        if($invalid)
            return $invalid;
        
        return DB::transaction(function() use($req,$dao_Master) { 
           return $dao_Master::UpdateUser($req);    
        });
    }

    public function Validation($req){
        //NOTE example validation
        $validator = Validator::make($req->all(),[
            'UserID' => 'required|min:5|max:7',
            'UserLevel' => 'required|max:1',
            'Password' => 'required|min:5|max:7',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        } 
    }

    public function DeleteUser($req){
        $dao_Master = $this->dao_Master;

        return DB::transaction(function() use($req,$dao_Master) { 
           return $dao_Master::DeleteUser($req);    
        });
    }

    //ANCHOR setcookies
    public function SetCookies($req){
        setcookie("UserCode",$req->code);
        setcookie("UserName",$req->name);
    }
}
