const spinner = time => {
  const spin = ['/', '-', '\\', '|'];

  for (let i = 0; i <= time; i++) {
    if (i === 0) {
      setTimeout(() => {
        process.stdout.write('\r| ');
      }, 100);
    } else {
      spin.splice(spin.length - 1, 0, spin[i - 1]);
      setTimeout(() => {
        process.stdout.write(`\r${spin[i - 1]} `);
      }, ((i * 200) + 100));
    }

  }
};

spinner(15);