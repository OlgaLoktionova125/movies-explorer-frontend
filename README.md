# movies-explorer-frontend

[Ссылка на проект](https://movies-diploma.nomorepartiesxyz.ru)

[Ссылка на макет figma](https://www.figma.com/file/f36vqLEgAE00oOB9cKuuSq/Diploma-Copy)

## **Описание проекта**

Фронтенд приложения для поиска фильмов, с возможностью сохранения/удаления их из избранного. 

## **Основной функционал**

* авторизация и регистрация пользователя,
* отображение текущих данных пользователя в форме редактирования данных,
* возможность редактирования данных профиля,
* добавление фильма в избранное и удаление,
* возможность поиска фильмов, по ключевым словам,
* возможность фильтрации данных поиска по длительности фильма,
* отображение найденных карточек фильмов и избранных на соответствующих страницах,
* при закрытии страницы и повторном открытии, данные избранных фильмов сохраняются,
* количество отображаемых карточек находится в зависимости от ширины экрана пользовательского устройства.

## **Инструменты и технологии**

* HTML5,
* CCS3,
* JavaScript (ES6),
* React.js,
* создан контекст текущего пользователя,
* выполнено поднятие стейта, где это необходимо,
* использован React Router,
* использован объект history,
* используется HOC-компонент ProtectedRoute для защиты маршрутов,
* данные поиска сохраняются в LocalStorage,
* при работе с формами используются управляемые компоненты,
* все формы валидируются на строне клиента,
* сайт адаптирован под разные расширения экранов,
* используется прелоадер при ожидании ответов с сервера,
* flexbox,
* grid,
* БЭМ (наименование классов),
* Webpack,
* изображения оптимизированы.

## **Установка и запуск**

`npm i` - установка зависимостей  
`npm run start` - запуск проекта  
`npm run build` - запуск сборки проекта  
