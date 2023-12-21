<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('users')->insert([
            [
                'name' => 'admin',
                'email' => 'admin@examplec.com',
                'email_verified_at' => now(),
                'password' => \Hash::make('123456789'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'yamada',
                'email' => 'yamada@examplec.com',
                'email_verified_at' => now(),
                'password' => \Hash::make('123456789'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'tanaka',
                'email' => 'tanaka@examplec.com',
                'email_verified_at' => now(),
                'password' => \Hash::make('123456789'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
