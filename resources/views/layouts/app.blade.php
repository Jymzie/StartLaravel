<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="images/favicon.ico">
    <style>
        /* NOTE use custom font from public folder */
        @font-face {
            font-family: 'RubikMaps';
            src: url("{{ asset('fonts/RubikMaps-Regular.ttf') }}") format('truetype');
            font-style: normal;
        }
        @font-face {
            font-family: 'TitanOne';
            src: url("{{ asset('fonts/TitanOne-Regular.ttf') }}") format('truetype');
            font-style: normal;
        }
    </style>
    <title>Title</title>
</head>
<body>
    <div id="app"></div>
    <script src="{{asset('js/app.js')}}"></script>
</body>
</html>