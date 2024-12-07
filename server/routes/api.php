<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\UserController;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;
use App\Http\Controllers\Auth\ProfileController;

// Fetch all users
Route::get('/users', [UserController::class, 'index']);

// Uncomment CSRF route for SPA or API use
Route::middleware('web')->group(function () {
    Route::get('/sanctum/csrf-cookie', [CsrfCookieController::class, 'csrf']);
});

// Profile Routes
Route::get('/admin-dashboard/profile/{id}', [ProfileController::class, 'showProfileInformation']);
Route::put('/profile/phone/{id}', [ProfileController::class, 'updatePhoneNumber']);
Route::post('/profile/picture', [ProfileController::class, 'uploadProfilePicture']);

// Public Routes
Route::post('/register', [RegisteredUserController::class, 'store'])
    ->middleware('guest') // This is for users who are not authenticated
    ->name('register');

Route::post('/login', [AuthenticatedSessionController::class, 'store'])
    ->name('login'); // Users should be able to log in

Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
    ->middleware('guest') // This is for users who are not authenticated
    ->name('password.email');

Route::post('/reset-password', [NewPasswordController::class, 'store'])
    ->middleware('guest') // This is for users who are not authenticated
    ->name('password.store');

Route::get('/verify-email/{id}/{hash}', [VerifyEmailController::class, 'verify'])
    ->middleware(['auth', 'signed', 'throttle:6,1']) // Email verification route with throttle and signed URL
    ->name('verification.verify');

Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
    ->middleware(['auth', 'throttle:6,1']) // Resend email verification notification
    ->name('verification.send');

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth:sanctum') // Require authentication via Sanctum
    ->name('logout');

// Protected routes that require authentication via Sanctum and specific roles
Route::middleware(['auth:sanctum'])->group(function () {

    // Admin Dashboard
    Route::middleware('role:admin')->get('/admin-dashboard', function () {
        return response()->json(['message' => 'Welcome to the Admin Dashboard']);
    });

    // Teacher Dashboard
    Route::middleware('role:teacher')->get('/teacher-dashboard', function () {
        return response()->json(['message' => 'Welcome to the Teacher Dashboard']);
    });

    // Student Dashboard
    Route::middleware('role:student')->get('/student-dashboard', function () {
        return response()->json(['message' => 'Welcome to the Student Dashboard']);
    });

    // Company Dashboard
    Route::middleware('role:company')->get('/company-dashboard', function () {
        return response()->json(['message' => 'Welcome to the Company Dashboard']);
    });
});
