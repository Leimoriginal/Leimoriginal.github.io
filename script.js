<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Procrastinate.</title>
  <link rel="stylesheet" href="style.css">
  <!-- ниже подключили стили для мобильных устройств: в конце урока сможете поделиться проектом в социальных сетях без страха, что на телефоне друга или подруги будет выглядеть некрасиво -->
  <link rel="stylesheet" href="https://code.s3.yandex.net/web-code/adaptive.css">
  <link rel="icon" type="image" href="https://code.s3.yandex.net/web-code/js-favicon.ico">
</head>
<body>
  <div class="header">
    <p class="logo">Procrastinate.</p>
    <div class="button">Ещё идея</div>
  </div>

  <img class="image" src="https://code.s3.yandex.net/web-code/procrastinate/9.png">

  <div class="advice">
    <span>Не писать код, а</span>
    <span class="phrase">что бы поделать?</span>
    <img class="cursor" src="https://code.s3.yandex.net/web-code/cursor.gif">
  </div>

  <p class="footer">© 2020 Сделал Тим Бернерс-Ли</p>

  <script src="https://code.s3.yandex.net/web-code/smoothly.js"></script>
  <script src="script.js"></script>
</body>
</html>

for (let i = 0; i <= 2; i = i + 1) {smoothly(phrase, 'textContent', phrases[i].text);
}
