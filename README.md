# Knigopis2


[![CircleCI](https://circleci.com/gh/gurov/knigopis2/tree/master.svg?style=shield&circle-token=17f0b5b5162c47741913d49d9fafcaa6232ca61a)](https://circleci.com/gh/gurov/knigopis2/tree/master)

Angular 2 клиент для [api.knigopis.com](https://github.com/knigopis/api.knigopis.com).

Есть такой сайт [www.knigopis.com](http://www.knigopis.com/) — дневник читателя и сервис учёта прочитанных книг. Его создатель - мой друг [Роман](http://github.com/rnixik). Клиентская часть сайта Книгописи написана на первом Ангуляре, а в данном проекте я пытаюсь написать клиентскую часть на Ангуляре 2 и параллельно изучаю его. Для работы с книгами использую прокси и [api.knigopis.com](https://github.com/knigopis/api.knigopis.com).

## Как попробовать?

Посмотреть рабочую версию этого репозитория можно тут: [alpha.knigopis.com](http://alpha.knigopis.com).

Чтобы самому попробовать запустить проект локально, нужно сделать следующее:
1) Установить [Angular cli](https://cli.angular.io/) (будет запускаться локальный сервер с прокси);
2) Клонировать репозиторий: `git clone https://github.com/gurov/knigopis2`;
3) Зайти в полученный резозиторий `cd knigopis2`;
4) Установить зависимости `npm i`
5) Запустить проект `npm run start`

## Разработка шаг за шагом
Ссылки на видео разработки доступны по клику для каждой части.

### Часть 1

1) О сайте книгописи
2) Костяк проекта на Angular 2
3) Настройка прокси

[![Книгопись и Angular 2, часть 1](http://img.youtube.com/vi/yC49u1Y5faE/mqdefault.jpg)](http://www.youtube.com/watch?v=yC49u1Y5faE "Книгопись и Angular 2, часть 1")

### Часть 2

1) Создаем bookService для обращения к api
2) RxJs и Observable объекты
4) Модели Book, User, интерфейс List
3) Вывод списка

[![Книгопись и Angular 2, часть 2](http://img.youtube.com/vi/TSANCWd1kNk/mqdefault.jpg)](http://www.youtube.com/watch?v=TSANCWd1kNk "Книгопись и Angular 2, часть 2")


### Часть 3

1) Обработка ошибок для bookService
2) Расширяем настройки прокси
4) Добавляем UserService
3) Выносим обработку запросов к http сервису в отдельный файл

[![Книгопись и Angular 2, часть 3](http://img.youtube.com/vi/HbL1dmYIhdQ/mqdefault.jpg)](http://www.youtube.com/watch?v=HbL1dmYIhdQ "Книгопись и Angular 2, часть 3")

### Часть 4

1) Подключаем Bootstrap 4
2) Создаем HomeComponent
3) Добавляем главное меню

[![Книгопись и Angular 2, часть 4](http://img.youtube.com/vi/s42urb3xkzY/mqdefault.jpg)](http://www.youtube.com/watch?v=s42urb3xkzY "Книгопись и Angular 2, часть 4")

### Часть 5

1) Создаем UserBookListComponent
2) Добавляем getUserBooks функцию в UserService для получения списка книг
3) Расширяем модель Book
4) Прописываем роутинг на страницу пользователя

[![Книгопись и Angular 2, часть 5](http://img.youtube.com/vi/DGSUFjsutnw/mqdefault.jpg)](http://www.youtube.com/watch?v=DGSUFjsutnw "Книгопись и Angular 2, часть 5")

### Часть 6

1) Добавляем отписку от роута в UserBookListComponent
2) Создаем BookComponent
3) Добавляем getUserInfo в UserService
4) Форматируем UserBookListComponent
4) Форматируем HomeComponent

[![Книгопись и Angular 2, часть 6](http://img.youtube.com/vi/Nt9FXoWvKpI/mqdefault.jpg)](http://www.youtube.com/watch?v=Nt9FXoWvKpI "Книгопись и Angular 2, часть 6")

### Часть 7

1) Добавляем оглавление (Bootstrap 4: list groups)
2) Адаптируем под широкие экраны и мобильные телефоны (Bootstrap 4: `.push-md-*` and `.pull-md-*`)
3) Добавляем сортировку по годам (Angular 2 Pipe: yearSort)

[![Книгопись и Angular 2, часть 7](http://img.youtube.com/vi/iwFsj2p3VOg/mqdefault.jpg)](http://www.youtube.com/watch?v=iwFsj2p3VOg "Книгопись и Angular 2, часть 7")

### Часть 8

1) Добавляем поиск по книгам (BookSearchPipe)
2) Добавляем анимацию загрузки книг (CSS3 лоадер)
3) Выводим ошибку загрузки книг
PS) Извините, немного замешкался во второй половине видео

[![Книгопись и Angular 2, часть 8](http://img.youtube.com/vi/dzLO7Irev6I/mqdefault.jpg)](http://www.youtube.com/watch?v=dzLO7Irev6I "Книгопись и Angular 2, часть 8")

### Часть 9.1

1) Добавляем виджет авторизации (uLogin)
2) Добавляем initAuth функцию в window (RxJs Subject, AuthService)
3) Получаем access-token (UserService, getCredentials, httpPost)

[![Книгопись и Angular 2, часть 9.1](http://img.youtube.com/vi/DMHXDjKqsn0/mqdefault.jpg)](http://www.youtube.com/watch?v=DMHXDjKqsn0 "Книгопись и Angular 2, часть 9.1")

### Часть 9.2

1) Изменяем модели (Credentials, User)
2) Добавляем заголовок авторизации к запросам (ApiSerivice)
3) Записываем токен в localStorage (AuthService)
4) Запоминаем авторизованного пользователя (AuthService)
4) Прячем uLogin меню и показываем юзера (AppComponent)

[![Книгопись и Angular 2, часть 9.2](http://img.youtube.com/vi/kOzXQXm6Aks/mqdefault.jpg)](http://www.youtube.com/watch?v=kOzXQXm6Aks "Книгопись и Angular 2, часть 9.2")

### Часть 10

1) Добавляем в верхнее меню ссылки на свой список книг и на страницу добавления книги (AppComponent)
2) Добавляем компоненту редактирования книги (BookEditComponent)
3) Добавляем ссылку с книги на страницу редактирования (BookComponent)
4) Добавляем метод put в ApiService
5) Добавляем методы get и update в BookService

[![Книгопись и Angular 2, часть 10](http://img.youtube.com/vi/KFVFLhlFko8/mqdefault.jpg)](http://www.youtube.com/watch?v=KFVFLhlFko8 "Книгопись и Angular 2, часть 10")

### Часть 11

1) Добавляем метод delete в ApiService
2) Создаем общую функцию getRequestOptionsArgs для методов ApiService
3) Добавляем метод remove а BookSerice и изменяем update
4) Добавляем методы saveAndClose, saveAndAdd, remove в BookEditComponent

[![Книгопись и Angular 2, часть 11](http://img.youtube.com/vi/EW-Cgu5fA1w/mqdefault.jpg)](http://www.youtube.com/watch?v=EW-Cgu5fA1w "Книгопись и Angular 2, часть 11")


