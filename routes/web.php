<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        "name"=> "Mohammad Salah",
        "frameworks"=> [
            "laravel", "react", "inertia"
        ]
    ]);
});

Route::get('/user', function () {
    return Inertia::render('User', [
        "time" => now()->toTimeString()
    ]);
});

Route::get('/settings', function () {
    return Inertia::render('Settings');
});

Route::post('/logout', function () {
    return Inertia::render('Logout', [
        "data" => request("foo"),
    ]);
});
