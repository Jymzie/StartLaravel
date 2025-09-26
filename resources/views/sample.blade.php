<!DOCTYPE html>

<html>

<head>

    <title>Hi</title>

</head>

<style scoped>

    @font-face {
    font-family: 'Unicodefix';
    src: url('{{ storage_path('fonts/Unicodefix.ttf') }}') format('truetype');
    }
    
    

    .jap{
        font-family:"myFont";
    }

    
    </style >

<body>

    <h1>{{ $title }}</h1>

    <p>{{ $date }}</p>

    <p class="jap">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod

    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,

    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo

    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse

    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non

    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

</body>

</html>