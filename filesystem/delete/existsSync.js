try {
    const exists = fs.existsSync('files');
    console.log('Exists: ', exists);
} catch (e) {
console.log(e);
}

// Проверка наличия файла или директории