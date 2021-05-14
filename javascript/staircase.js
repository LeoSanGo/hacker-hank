function staircase(n) {
  const textoVazio = ' ';
  const textoHashtag = '#';
  for (let i = 1; i <= n; i++) {
    console.log(textoVazio.repeat(n - i) + textoHashtag.repeat(i));
  }
}

const n = 6;
staircase(n);
