fs.writeFile(
  'files/data.txt',
  'File Content',
  'utf8',
  (err) => {
    if (err) throw err;

    console.log('Done');
  }
);