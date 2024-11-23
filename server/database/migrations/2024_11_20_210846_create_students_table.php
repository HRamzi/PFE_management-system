<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id('student_id'); // Custom primary key
            $table->string('name');
            $table->string('family_name');
            $table->string('university_major');
            $table->float('master1_average'); // Example: up to 999.99
            $table->timestamps(); // Includes `created_at` and `updated_at` columns

        // Foreign key constraint
        $table->foreign('student_id')->references('user_id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
