<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Route::get('/profile/{id}',[ProfileController::class,'showProfileInformation']);
Route::put('/profile/phone/{id}',[ProfileController::class,'updatePhoneNumber']);
Route::post('/profile/picture',[ProfileController::class,'uploadProfilePicture']);

Route::get('/', function () {
    return 'API';
});
