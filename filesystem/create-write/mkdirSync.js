try {
    fs.mkdirSync('files/dir/subdir', { recursive: true });
    console.log('Done');
} catch (e) {
console.log(e);
}