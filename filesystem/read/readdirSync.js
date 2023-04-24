try {
    const files = fs.readdirSync('files', 'utf8');
    console.log(files);
} catch (e) {
    console.log(e);
}