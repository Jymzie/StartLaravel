<?php
namespace App\DAO;

use App\DTO\DTOMaster;
use Illuminate\Support\Facades\DB;

//NOTE all query should be here at DAO
class DAOMaster {
    //ANCHOR MasterList
    public static function MasterList(){
        $data = DB::connection('Sample')->select("SELECT * FROM users");
        return $data;

    //     $data = DB::connection('CompanyInfo')->select("SELECT E.EmployeeName, D.DepartmentName, S.SectionName FROM Employees E
    //     JOIN Departments D	
    //    ON E.DepartmentCode	= D.DepartmentCode AND E.CompanyCode = D.CompanyCode
    //     JOIN Sections	S
    //    ON S.SectionCode	= E.SectionCode	 AND E.CompanyCode = S.CompanyCode
    //    WHERE E.DepartmentCode	= '150'	");

    //      $MasterArr = [];
    //      foreach ($data as $i => $rec){
    //          $dto_Master = new DTOMaster();
    //          $dto_Master->setSectionName($rec->SectionName);
    //          $dto_Master->setDepartmentName($rec->DepartmentName);
    //          $dto_Master->setEmployeeName($rec->EmployeeName);
    //          $MasterArr[$i]['EmployeeName'] = $dto_Master->getEmployeeName();
    //          $MasterArr[$i]['DepartmentName'] = $dto_Master->getDepartmentName();
    //          $MasterArr[$i]['SectionName'] = $dto_Master->getSectionName();
    //      }
    //      return $MasterArr;

    }

    //ANCHOR Add
    public static function AddUser($req){
        $isSuccess = DB::connection('Sample')->insert("INSERT INTO users
            (
                UserID,
                UserLevel,
                Password,
                CreatedDate,
                UpdatedDate,
                UpdatedBy
            )
            VALUES 
            (
                '$req->UserID',
                '$req->UserLevel',
                '$req->Password',
                NOW(),
                NOW(),
                'jim'
            )
        ");

        if(!$isSuccess)
            return response()->json('SQL problem!', 500);
    }

    //ANCHOR Update
    public static function UpdateUser($req){
        $isSuccess = DB::connection('Sample')->update("UPDATE users
        SET UserID = '$req->UserID'
            ,UserLevel = '$req->UserLevel'
            ,Password = '$req->Password'
            ,UpdatedDate = NOW()
            ,UpdatedBy = 'jim'
        WHERE UserID = '$req->oldID'");

        if(!$isSuccess)
            return response()->json('SQL problem!', 500);
    }

    //ANCHOR Delete
    public static function DeleteUser($req){
        if($req->date == 'null')
            $date = date('Y-m-d H:i:s');
        else
            $date = null;

        $isSuccess = DB::connection('Sample')->update("UPDATE users
        SET DeletedDate = ?
            ,UpdatedDate = NOW()
            ,UpdatedBy = 'jim'
        WHERE UserID = '$req->id'", [$date]);

        if(!$isSuccess)
            return response()->json('SQL problem!', 500);
    }
}