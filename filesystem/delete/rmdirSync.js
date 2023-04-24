try {
    fs.rmdirSync('files/dir');
    console.log('Deleted');
} catch (e) {
console.log(e);
}