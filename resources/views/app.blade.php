<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <script src="https://kit.fontawesome.com/6a0b98d024.js" crossorigin="anonymous" defer></script>
        @viteReactRefresh
        @vite(['resources/js/index.jsx', 'resources/sass/app.scss'])
    </head>
    <body>
        <div id="modal-portal"></div>
        <div id="app"></div>
    </body>
</html>
