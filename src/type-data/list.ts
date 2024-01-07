class List {
  constructor() {
    this.memory = [];
    this.length = 0;
  }

  length: number = 0;
  memory: (number | string)[] = [];

  get(address: number) {
    return this.memory[address];
  }
  push(value: number | string) {
    this.memory[this.length] = value;
    this.length++;
  }

  pop() {
    if (this.length === 0) return;

    // Получаем последнее значение, перестаём его хранить, возвращаем его.
    var lastAddress = this.length - 1;
    var value = this.memory[lastAddress];
    delete this.memory[lastAddress];
    this.length--;

    return value;
  }
}
