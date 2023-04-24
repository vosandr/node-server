fs.appendFile(
    'files/data.txt',
    '\nFile Content 2',
    'utf8',
    (err) => {
    if (err) throw err;
    
    console.log('Done');
    }
);