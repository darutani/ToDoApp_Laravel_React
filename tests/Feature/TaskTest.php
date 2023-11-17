<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Task;

class TaskTest extends TestCase
{
    use RefreshDatabase;

    /**
     * indexアクションに接続した際にTaskデータの一覧が取得できること
     *
     * @return void
     */
    public function test_Taskの一覧を取得できる(): void
    {
        $tasks = Task::factory()->count(10)->create();

        $response = $this->getJson('api/tasks');

        $response
            ->assertOk()
            ->assertJsonCount($tasks->count());
    }

    /**
     * storeアクションに接続した際にTaskデータが新規登録されること
     *
     * @return void
     */
    public function test_Taskを新規登録できる(): void
    {
        $data = [
            'title' => '登録テスト'
        ];
        $response = $this->postJson('api/tasks', $data);

        $response
            ->assertCreated()
            ->assertJsonFragment($data);
    }

    public function test_タイトルが空の場合は実行できない(): void
    {
        $data = [
            'title' => ''
        ];
        $response = $this->postJson('api/tasks', $data);
        // dd($response->json());

        $response
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'title' => 'タイトルは必ず指定してください。'
            ]);
    }

    public function test_タイトルが256文字以上の場合には登録できない(): void
    {
        $data = [
            'title' => str_repeat('あ', 256)
        ];
        $response = $this->postJson('api/tasks', $data);
        // dd($response->json());

        $response
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'title' => 'タイトルは、255文字以下で指定してください。'
            ]);
    }

    /**
     * updateアクションに接続した際にTaskデータが更新されること
     *
     * @return void
     */
    public function test_Taskを更新できる(): void
    {
        $task = Task::factory()->create();

        $task->title = '更新テスト';


        $response = $this->patchJson("api/tasks/{$task->id}", $task->toArray());

        // dd($response->json());

        $response
            ->assertOk()
            ->assertJsonFragment($task->toArray());
    }

    /**
     * deleteアクションに接続した際にTaskデータが削除されること
     *
     * @return void
     */
    public function test_Taskを削除できる(): void
    {
        $tasks = Task::factory()->count(10)->create();
        $taskToDelete = $tasks->first();

        $response = $this->deleteJson("api/tasks/{$taskToDelete->id}");
        $response->assertOk();

        $response = $this->getJson("api/tasks");
        $response->assertJsonCount($tasks->count() -1);
    }
}
