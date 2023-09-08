const jwt = require('jwt-simple');
const secret = process.env.ENCRYPTION_SECRET;
const enable = process.env.ENABLE_ENCRYPTION;

//encoding
export function encrypt(payload) {
  if (enable === 'YES') {
    const token = jwt.encode(payload, secret);
    return token;
  }
  return payload;
}

//decoding
export function decrypt(payload) {
  if (enable === 'YES') {
    const token = jwt.decode(payload, secret);
    return token;
  }
  return payload;
}
