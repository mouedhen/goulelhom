<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>{{ config('app.name') }}</title>

    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.43.0/mapbox-gl.css' rel='stylesheet' />
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css">

    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
            'siteName' => config('app.name'),
            'apiDomain' => config('app.url') . '/api'
        ]) !!}
    </script>

</head>
<body>

<main id="main" class="l-main main">
    <z-sidebar></z-sidebar>
    <app></app>
</main>

<script src="{{ mix('js/manifest.js') }}"></script>
<script src="{{ mix('js/vendor.js') }}"></script>
<script src="{{ mix('js/app.js') }}"></script>

@if(config('app.env') == 'local')
    <script src="http://localhost:35729/livereload.js"></script>
@endif

</body>
</html>
