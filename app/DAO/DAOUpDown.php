<?php

namespace App\DAO;

use Illuminate\Support\Facades\DB;
use App\DTO\DTOUpDown;
use App\Models\Updown;

class DAOUpDown{

    public static function UpDownList(){
        $data = Updown::get();

        $UpDownListArr = [];
        foreach($data as $i => $rec){
            $dto_UpDown = new DTOUpDown();
            $dto_UpDown->setItemID($rec->ItemID);
            $dto_UpDown->setfilename($rec->filename);
            $dto_UpDown->setfile_path($rec->file_path);
            $dto_UpDown->setoriginal_name($rec->original_name);
     
            $UpDownListArr[$i]['ItemID'] = $dto_UpDown->getItemID();
            $UpDownListArr[$i]['original_name'] = $dto_UpDown->getoriginal_name();
            $UpDownListArr[$i]['file_path'] = $dto_UpDown->getfile_path();
            $UpDownListArr[$i]['filename'] = $dto_UpDown->getfilename();
         
        }
        return $UpDownListArr;
    }

    public static function InsertUpDown($file,$fileName,$filePath){
        UpDown::insert(['filename' =>  $fileName,
                        'original_name' => $file->getClientOriginalName(),
                        'file_path' => $filePath]);
}

}