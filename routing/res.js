Объект ответа в Node.js Express используется для отправки сообщения о результатах обработки поступившего запроса и сопутствующих результату данных, если таковые имеются.

Свойства объекта запроса Node.js:

headersSent - булевое значение, true, если заголовки ответа уже были отправлены;

app.get('/', (req, res) => {
  console.log(res.headersSent) //false
  res.status(200).send({ message: 'ok' })
  console.log(res.headersSent) //true
  return
})

cookie(key, value) - устанавливает значения куки-файлов;

clearCookie() - очищает куки-файлы;

download(filename) - предлагает в ответ на запрос скачать файл;

app.get('/user-profile', (req, res) => {
  return res.status(200).download('profile.png')
})

redirect(code?, url) - перенаправляет запрос на заданный URL с 302 статусом по умолчанию, в качестве первого параметра можно указать иной код ответа;

app.get('/', (req, res) => {
  return res.redirect(301, '/login')
})

render() - используется для генерации представлений используемого шаблонизатора, подробно здесь;

status() - используется для установки кода ответа, но сам ответ не отправляет;

app.get('/', (req, res) => {
  res.status(200) //устанавливает код ответа 200, ответ не отправлен
  return res.send({ message: 'ok' }) //ответ отправлен
})

set() - используется для указания заголовков ответа;

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain')
})

type() - задает тип отправляемых вместе с ответом данных;

app.get('/', (req, res) => {
  res.type('text/plain')
})

send() - отправляет ответ на запрос, в качестве параметра принимает данные для отправки, при этом рекомендуется явно указывать для данных их тип;

app.get('/', (req, res) => {
  res.type('text/plain')
  return res.send('Any data')
})

sendStatus() - задает статус и сразу отправляет пустой ответ;

json() - принимает данные в формате JSON и отправляет их в качестве ответа с правильно указанным заголовком Content-Type;

app.get('/', (req, res) => {
  return res.json({ message: 'ok' })
})

end() - отправляет ответ со всеми указанными до его вызова параметрами, сам не принимает никаких параметров.

app.get('/', (req, res) => {
  res.type('text/plain')
  res.status(201)
  res.end()
})
