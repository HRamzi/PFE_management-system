<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

        /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'student_id';
    protected $fillable = [
        'student_id',
        'name',
        'family_name',
        'university_major',
        'master1_average',
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'student_id', 'id');
    }
}
