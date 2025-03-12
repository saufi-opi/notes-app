<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('notes', function () {
        return Inertia::render('notes');
    })->name('notes');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
