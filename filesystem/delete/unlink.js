fs.unlink('files/data.txt', (err) => {
    if (err) throw err;

console.log('Deleted');
});