<?php

use App\Http\Controllers\CaptureController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PDFController;
use App\Http\Controllers\MasterController;
use App\Http\Controllers\PlayController;
use App\Http\Controllers\UpDownController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('master', MasterController::class);
Route::resource('pdf', PDFController::class);
Route::resource('capture', CaptureController::class);
Route::resource('play', PlayController::class);
Route::resource('UpDown',UpDownController::class);
