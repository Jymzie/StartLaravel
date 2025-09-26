<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Support\Facades\Log;

//ANCHOR for catching of errors logs
//NOTE logs located at storage/logs
class CommonException extends Exception
{
    protected $e, $err_data, $status_code;
    public function __construct($e, $err_data, $status_code){
        $this->e = $e;
        $this->err_data = $err_data;
        $this->status_code = $status_code;
    }
    public function report(){
        Log::error(json_encode(array(
            'UserID' => $_COOKIE['UserCode'],
            'UserName' => $_COOKIE['UserName'],
            'Called Method' => $this->err_data['Functions'],
            'Message' => mb_convert_encoding($this->e->getMessage(),'UTF-8'),
            'Passed Parameter' => $this->err_data['Parameters'],
            'Filename' => $this->e->getFile(),
            'Line Number' => $this->e->getLine(),
            'Trace' => $this->e->getTraceAsString()
        ),JSON_UNESCAPED_UNICODE));
    }
    public function render(){
        return response()->json(
            [
                'message' => $this->e->getMessage(), //messege
                'status_code' => $this->status_code
            ],
        $this->status_code);
    }
}
