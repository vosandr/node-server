try {
    fs.unlinkSync('files/data.txt');
    console.log('Deleted');
} catch (e) {
console.log(e);
}