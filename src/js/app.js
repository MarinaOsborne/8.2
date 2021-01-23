
// // console.log('worked');

export default class ErrorRepository {
  constructor(errNum, text) {
    this.errNum = errNum;
    this.text = text;
    this.map = new Map();
    this.map.set(errNum, text);
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}
