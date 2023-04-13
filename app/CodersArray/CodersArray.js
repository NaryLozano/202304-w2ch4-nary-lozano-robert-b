class CodersArray {
  items;

  constructor(...items) {
    this.items = items;
  }

  length() {
    let counter = 0;

    for (const item of this.items) {
      counter++;
    }

    return counter;
  }

  push(...newItems) {
    let count = this.length();
    let position = 0;

    for (const item of newItems) {
      this.items[count] = newItems[position];

      count++;
      position++;
    }

    return this.length();
  }
}

export default CodersArray;
