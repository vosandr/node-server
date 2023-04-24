fs.mkdir('files/dir/subdir', { recursive: true }, (err) => {
    if (err) throw err;

console.log('Created');
});
