<?php

use App\Models\User;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);

test('guests are redirected to the login page', function () {
    $this->get('/notes')->assertRedirect('/login');
});

test('authenticated users can visit the notes', function () {
    $this->actingAs($user = User::factory()->create());

    $this->get('/notes')->assertOk();
});