<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Route::get('/profile/{id}',[ProfileController::class,'showProfileInformation']);
Route::put('/profile/phone/{id}',[ProfileController::class,'updatePhoneNumber']);
Route::post('/profile/picture',[ProfileController::class,'uploadProfilePicture']);




Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [RegisteredUserController::class, 'store'])
    ->middleware('guest')
    ->name('register');

Route::post('/login', [AuthenticatedSessionController::class, 'store'])
    ->middleware('guest')
    ->name('login');

Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
    ->middleware('guest')
    ->name('password.email');

Route::post('/reset-password', [NewPasswordController::class, 'store'])
    ->middleware('guest')
    ->name('password.store');

Route::get('/verify-email/{id}/{hash}', VerifyEmailController::class)
    ->middleware(['auth', 'signed', 'throttle:6,1'])
    ->name('verification.verify');

Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
    ->middleware(['auth', 'throttle:6,1'])
    ->name('verification.send');

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth:sanctum')
    ->name('logout');

Route::middleware(['auth:sanctum'])->group(function () {
        // Admin Dashboard
        Route::middleware('role:admin')->get('/admin/dashboard', function () {
            return response()->json(['message' => 'Welcome to the Admin Dashboard']);
        });

        // Teacher Dashboard
        Route::middleware('role:teacher')->get('/teacher/dashboard', function () {
            return response()->json(['message' => 'Welcome to the Teacher Dashboard']);
        });

        // Student Dashboard
        Route::middleware('role:student')->get('/student/dashboard', function () {
            return response()->json(['message' => 'Welcome to the Student Dashboard']);
        });

        // Company Dashboard
        Route::middleware('role:company')->get('/company/dashboard', function () {
            return response()->json(['message' => 'Welcome to the Company Dashboard']);
        });
    });


