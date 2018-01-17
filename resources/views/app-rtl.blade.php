<!doctype html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- TODO Handle RTL with mix -->
    <title>GOULEL'HOM - ڨوللهم</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
          integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
          crossorigin=""/>
    <link href="https://cdn.jsdelivr.net/npm/leaflet.locatecontrol@0.62.0/dist/L.Control.Locate.min.css" rel="stylesheet" type="text/css">
    <link href="https://unpkg.com/leaflet.markercluster@1.2.0/dist/MarkerCluster.css" rel="stylesheet" type="text/css">
    <link href="https://unpkg.com/leaflet.markercluster@1.2.0/dist/MarkerCluster.Default.css" rel="stylesheet" type="text/css">

    <link href="css/app.rtl.css" rel="stylesheet" type="text/css">

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
<!--
<script src="js/aside.js"></script>

@if(config('app.env') != 'production')
    <script src="http://localhost:35729/livereload.js"></script>
@endif
        -->

</body>
</html>
