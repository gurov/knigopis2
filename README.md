# Knigopis2

Angular 2 клиент для [api.knigopis.com](https://github.com/knigopis/api.knigopis.com).

Есть такой сайт [www.knigopis.com](http://www.knigopis.com/) — дневник читателя и сервис учёта прочитанных книг. Его создатель - мой друг [Роман](http://github.com/rnixik). Клиентская часть сайта Книгописи написана на первом Ангуляре, а в данном проекте я пытаюсь написать клиентскую часть на Ангуляре 2 и параллельно изучаю его. Для работы с книгами использую прокси и [api.knigopis.com](https://github.com/knigopis/api.knigopis.com).

## Как попробовать?
Чтобы самому попробовать запустить проект локально, нужно сделать следующее:
1) Установить [Angular cli](https://cli.angular.io/) (будет запускаться локальный сервер с прокси);
2) Клонировать репозиторий: `git clone https://github.com/gurov/knigopis2`;
3) Зайти в полученный резозиторий `cd knigopis2`;
4) Установить зависимости `npm i`
5) Запустить проект `npm run start`


## Часть 1

1) О сайте книгописи
2) Костяк проекта на Angular 2
3) Настройка прокси

[![Книгопись и Angular 2, часть 1](http://img.youtube.com/vi/yC49u1Y5faE/mqdefault.jpg)](http://www.youtube.com/watch?v=yC49u1Y5faE "Книгопись и Angular 2, часть 1")

## Часть 2

1) Создаем bookService для обращения к api
2) RxJs и Observable объекты
4) Модели Book, User, интерфейс List
3) Вывод списка

[![Книгопись и Angular 2, часть 2](http://img.youtube.com/vi/TSANCWd1kNk/mqdefault.jpg)](http://www.youtube.com/watch?v=TSANCWd1kNk "Книгопись и Angular 2, часть 2")


## Часть 3

1) Обработка ошибок для bookService
2) Расширяем настройки прокси
4) Добавляем UserService
3) Выносим обработку запросов к http сервису в отдельный файл

[![Книгопись и Angular 2, часть 3](http://img.youtube.com/vi/HbL1dmYIhdQ/mqdefault.jpg)](http://www.youtube.com/watch?v=HbL1dmYIhdQ "Книгопись и Angular 2, часть 3")

## Часть 4

1) Подключаем Bootstrap 4
2) Создаем HomeComponent
3) Добавляем главное меню

[![Книгопись и Angular 2, часть 4](http://img.youtube.com/vi/s42urb3xkzY/mqdefault.jpg)](http://www.youtube.com/watch?v=s42urb3xkzY "Книгопись и Angular 2, часть 4")

## Часть 5

1) Создаем UserBookListComponent
2) Добавляем getUserBooks функцию в UserService для получения списка книг
3) Расширяем модель Book
4) Прописываем роутинг на страницу пользователя

[![Книгопись и Angular 2, часть 5](http://img.youtube.com/vi/DGSUFjsutnw/mqdefault.jpg)](http://www.youtube.com/watch?v=DGSUFjsutnw "Книгопись и Angular 2, часть 5")
