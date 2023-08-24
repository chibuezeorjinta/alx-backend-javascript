// read user input
console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const outname = process.stdin.read();
  if (outname !== null) {
    process.stdout.write(`Your name is: ${outname}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
