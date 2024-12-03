<?php

// app/Http/Controllers/UserController.php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // Fetch all users
    public function index()
    {
        $users = User::all(); // Retrieve all users from the database
        return response()->json($users); // Return users as a JSON response
    }
}
