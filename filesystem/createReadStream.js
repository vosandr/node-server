const stream = fs.createReadStream(
    'files/data.txt',
    'utf8'
);
stream.on('data', (data) => console.log(data));
stream.on('error', (err) => console.log(`Err: ${err}`));