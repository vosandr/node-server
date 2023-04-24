try {
  fs.writeFileSync(
    'files/data.txt',
    'File Content',
    'utf8'
  );
  console.log('Done');
} catch (e) {
  console.log(e);
}
