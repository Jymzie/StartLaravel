<?php

namespace App\Models;

use App\DAO\DAOUpDown;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Storage;

class UpDownModel extends Model
{
    public $dao_UpDown;

    public function __construct(){
        $this->dao_UpDown = new DAOUpDown();
    }

    public function UpDownList(){
        return ['result'=>$this->dao_UpDown::UpDownList(), 'status_code'=>200];
    }

    public function InsertUpDown($req){
        $file = $req->file('image');
        $fileName = $file->getClientOriginalName();
        // $filePath = $file->store('uploads', 'public');
        for($x=1;$x<10;$x++){
            if(!Storage::disk('public')->exists('uploads/'.$x.'.jpg')){
            $filePath = $file->storeAs(
                        'uploads',
                        $x.'.jpg',
                        'public'
                    );
            }
            break;
        }
      
        // return ['result'=>$this->dao_UpDown::InsertUpDown($file,$fileName,$filePath), 'status_code'=>200];
    }
}
