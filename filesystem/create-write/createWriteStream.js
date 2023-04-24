const stream = fs.createWriteStream(
    'files/data.txt',
    'utf8'
);

stream.on('error', (err) => console.log(`Err: ${err}`));
stream.on('finish', () => console.log('Done'));

stream.write('First line\n');
stream.write('Second line\n');
stream.end();


// путь к файлу;
// объект со следующими настройками:
// encoding - кодировка (по умолчанию utf8);
// mode - режим доступа (по умолчанию 0o666);
// autoClose - если true, то при событиях error и finish поток закроется автоматически (по умолчанию true).
