app.get('/', (req, res) => {
    res.render('index')
})

// Запрос: /api/books?page=3&limit=15
{
    query: {
        page: 3,
        limit: 15
    },
}

// Маршрут: /api/books/:page/:limit
// Запрос: /api/books/3/15
{
    params: {
        page: 3,
        limit: 15
    },
}

{
    headers: {
        host: '127.0.0.1:7000',
        connection: 'keep-alive',
        'cache-control': 'max-age=0',
    },
}


router.get('/books', (req, res) => {
    /*
    Запрос: /api/books?page=3&limit=15
    Результат: /books?page=3&limit=15
    */
    console.log(req.url);
});

app.use('/api', router)



route - объект маршрута Node js, экземпляр класса Route, который обрабатывает запрос (обычно используется для отладки);

path - URL конечного маршрута, не содержит данные протокола, хоста, порта и GET-параметры;

const express = require("express"),
        router = express.Router(),

router.get('/books', (req, res) => {
    /*
    Запрос: /api/books?page=3&limit=15
    Результат: /books
    */
    console.log(req.path);
});

app.use('/api', router);


ip - IP-адрес инициатора запроса (обычно клиента);

hostname - хост инициатора запроса;

{
    hostname: '127.0.0.1',
}



protocol - протокол, с использованием которого был отправлен запрос (http или https);

{
    protocol: 'http',
}

secure - булевое значение, true, если запрос был отправлен по протоколу https;

{
    secure: false,
}

xhr - булевое значение, true, если запрос был отправлен вызовом AJAX.