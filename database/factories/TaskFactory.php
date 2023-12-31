<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user_id = fake()->numberBetween(1,3);

        return [
            'title' => $user_id . '：' . fake()->realText(rand(15,40)),
            'is_done' => fake()->boolean(10),
            'user_id' => $user_id,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
