<?php

use App\Http\Controllers\RegisteredUserController;
use App\Models\User;
use Illuminate\Support\Facades\Request;
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
    return Inertia::render('Users/Index', [
        "users" => User::query()
            ->when(Request::input("search"), function ($query, $search) {
                $query->where('name', 'like', "%{$search}%");
            })
            ->paginate(10)
            ->withQueryString()
            ->through(fn($user) => [
                "id" => $user->id,
                "name" => $user->name
            ]),
        "filters" => \Illuminate\Support\Facades\Request::only(["search"]),
        "time" => now()->toTimeString()
    ]);
});

//Route::get('/users/create', function () {
//    return Inertia::render('Users/Create',[
//    ]);
//});

Route::get('users/create', [RegisteredUserController::class, 'create'])
    ->name('register');

Route::post('users', [RegisteredUserController::class, 'store']);

//Route::post('/users', function () {
//    $attributes = Request::validate([
//        'name' => 'required',
//        'email' => ['required', 'email', 'unique:users'],
//        'password' => 'required'
//    ]);
//    dd($attributes);
//    User::create($attributes);
//    return Inertia::location(route('users'));
//})->name('users');


Route::get('/settings', function () {
    return Inertia::render('Settings');
});

Route::post('/logout', function () {
    return Inertia::render('Logout', [
        "data" => request("foo"),
    ]);
});
