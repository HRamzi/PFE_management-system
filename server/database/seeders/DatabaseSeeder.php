<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Creating a user with plaintext password (not hashed)
        User::factory()->create([
            'name' => 'amir',
            'email' => 'amir44@example.com',
            'password' => 'amir1313', // Plaintext password (not hashed)
        ]);
    }
}
