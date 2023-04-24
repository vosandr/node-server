fs.readdir('files', 'utf8', (err, files) => {
    if (err) throw err;
    console.log(files);
});