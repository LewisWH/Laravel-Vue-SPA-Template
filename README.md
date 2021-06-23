# Laravel-Vue-SPA-Template
Barebones template for a single page Vue application in Laravel w/ SQLite

## Getting Started

* Ensure Laravel & MySQL are installed and up to date

* Clone this repository to the desired directory

* Enter the directory

```
cd directorypath
```

* Install the required node modules

```
npm install
```

* Install vue, vue-router and vue-axios

```
npm install vue vue-router vue-axios --save
```

## Executing the Application
* Compile Vue components

```
npm run dev
```

* Run development server

```
sudo php artisan serve
```

## Switching to a MySQL Database

* Change credentials in .env file from 'sqlite' to 'mysql' and add username, password and database name

```
DB_CONNECTION=mysql 
DB_HOST=127.0.0.1 
DB_PORT=3306 
DB_DATABASE=<DATABASE NAME>
DB_USERNAME=<DATABASE USERNAME>
DB_PASSWORD=<DATABASE PASSWORD>
```

## Creating Models, Migrations and Controllers

* E.g create a model, migration and controller for 'tasks'

```
php artisan make:model Task -mcr
```

* Amend migration/controller then migrate to database

```
php artisan migrate
```

## Adding Vue Components

* E.g amend routes in routes/api.php for a 'tasks' CRUD

```
Route::resource('task',App\Http\Controllers\TaskController::class)->only(['index','store','show','update','destroy'])
```

* Add new templates inside a new folder within the components folder (e.g resources\js\components\task\List.vue)

* Define routes within resources\js\components\routes.js

```
const List = () => import('./components/List.vue' /* webpackChunkName: "resource/js/components/list" */)

export const routes = [
    {
        name: 'list',
        path: '/task',
        component: List
    }
]
```

* Compile Vue components

```
npm run dev
```

* Run development server

```
sudo php artisan serve
```
