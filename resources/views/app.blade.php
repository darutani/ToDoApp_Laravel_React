<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite(['resources/sass/app.scss','resources/ts/app.ts'])

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'ToDoApp_Laravel×Vue') }}</title>

    <!-- Styles -->
</head>
<body>
<div id="app">
</div>
<!-- Scripts -->
</body>
</html>
