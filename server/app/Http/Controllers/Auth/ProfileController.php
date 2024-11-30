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
            if($userData->user_role == "student"){
                $studentData =Student::findOrFail($id);
                $user = ["name"=>$studentData->name, "family_name"=>$studentData->family_name,  "email"=>$userData->email,  "phone_number"=>$userData->phone_number, "user_role"=>$userData->user_role,  "university_major"=>$studentData->university_major,  "master1_average"=>$studentData->master1_average,  "profile_picture"=>$userData->profile_picture ];

            }
            // elseif($userData->user_role == "company") {
            //     $companyData =Company::findOrFail($id);
            //     $user = ["name"=>$companyData->name,   "email"=>$userData->email,  "phone_number"=>$userData->phone_number, "user_role"=>$userData->user_role,     "profile_picture"=>$userData->profile_picture ];

            // }
            // else{
            //     $teacherData =Teacher::findOrFail($id);
            //     $user = ["name"=>$teacherData->name, "family_name"=>$teacherData->family_name,  "email"=>$userData->email,  "phone_number"=>$userData->phone_number, "user_role"=>$userData->user_role,  "recruitment_date"=>$teacherData->recruitment_date,  "grade"=>$teacherData->grade,  "profile_picture"=>$userData->profile_picture ];

            // }
            return response()->json($user);

    }


    /**
     * Update the specified resource in storage.
     */
    public function updatePhoneNumber(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $validated = $request->validate([
            'phone_number' => 'required|string|max:15',
        ]);

        $user->update($validated);

    }

    public function uploadProfilePicture(Request $request)
    {
        $request->validate([
            'profile_picture' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $user = $request->user();

        if ($user->profile_picture && Storage::disk('public')->exists($user->profile_picture)) {
            Storage::disk('public')->delete($user->profile_picture);
        }

        $imageFile = $request->file('profile_picture');

        $fileName = uniqid() . '_' . time() . '.' . $imageFile->getClientOriginalExtension();

        $filePath = $imageFile->storeAs('profile_pictures', $fileName, 'public');

        $user->update(['profile_picture' => $filePath]);

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
