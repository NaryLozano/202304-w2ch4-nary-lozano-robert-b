class CodersArray {
  items;

  constructor(...items) {
    this.items = items;
  }

  length() {
    let counter = 0;
    this.items.forEach(() => {
      counter++;
    });
    return counter;
  }
}

export default CodersArray;
