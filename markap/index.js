const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, charSet) {
  let key = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    key += charSet[randomIndex];
  }

  return key;
}

const key = generateKey(16, characters);
console.log(key);

