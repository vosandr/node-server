fs.readFile('files/data.txt', 'utf8', (err, data) => {
    if (err) throw err;
  
    console.log(data);
  });
  