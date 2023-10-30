<?php

use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        "name" => "Mohammad Salah",
        "frameworks" => [
            "laravel", "react", "inertia"
        ]
    ]);
});

Route::get('/users', function () {

    return Inertia::render('Users', [

        "users" => User::query()
            ->when(\Illuminate\Support\Facades\Request::input("search"), function ($query, $search){
                $query->where('name', 'like', "%{$search}%");
            })
            ->paginate(10)
            ->withQueryString()
            ->through(fn($user) => [
            "id" => $user->id,
            "name" => $user->name
        ]),
        "filters"=>\Illuminate\Support\Facades\Request::only(["search"]),
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
