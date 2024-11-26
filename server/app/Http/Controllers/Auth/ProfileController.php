<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;

use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function showProfileInformation($id)
    {

            $userData = User::findOrFail($id);
            $studentData =Student::findOrFail($id);
            $student = ["name"=>$studentData->name, "family_name"=>$studentData->family_name,  "email"=>$userData->email,  "phone_number"=>$userData->phone_number, "user_role"=>$userData->user_role,  "university_major"=>$studentData->university_major,  "master1_average"=>$studentData->master1_average,  "profile_picture"=>$userData->profile_picture ];
            return response()->json($student);

    }


    /**
     * Update the specified resource in storage.
     */
    public function updatePhoneNumber(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $validated = $request->validate([
            'phone_number' => 'required|string|max:15', // Ensure the phone number is valid
        ]);

        $user->update($validated);

    }

    public function uploadProfilePicture(Request $request)
    {
        // Step 1: Validate the request to ensure a valid image is uploaded.
        $request->validate([
            'profile_picture' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Step 2: Retrieve the authenticated user.
        $user = $request->user(); // Assuming user authentication is in place.

        // Step 3: Check if the user already has a profile picture and delete it.
        if ($user->profile_picture && Storage::disk('public')->exists($user->profile_picture)) {
            Storage::disk('public')->delete($user->profile_picture);
        }

        // Step 4: Retrieve the uploaded file.
        $imageFile = $request->file('profile_picture');

        // Step 5: Generate a unique name for the image to avoid conflicts.
        $fileName = uniqid() . '_' . time() . '.' . $imageFile->getClientOriginalExtension();

        // Step 6: Store the image in the 'public/profile_pictures' directory.
        $filePath = $imageFile->storeAs('profile_pictures', $fileName, 'public');

        // Step 7: Save the new file path in the database for the authenticated user.
        $user->update(['profile_picture' => $filePath]);

        // Step 8: Return a success response with the file URL.
        return response()->json([
            'message' => 'Profile picture uploaded successfully.',
            'file_url' => asset('storage/' . $filePath), // Generate public URL
        ], 200);
    }





    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
