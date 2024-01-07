class List implements  IList {

	constructor() {
		this.memory:[] = [];
		this.length = 0;
	}

	get(address:number) {
		return this.memory[address];
	}
	push(value) {
    this.memory[this.length] = value;
    this.length++;
	}
	
	pop() {
    // Нет элементов — ничего не делаем.
    if (this.length === 0) return;

    // Получаем последнее значение, перестаём его хранить, возвращаем его.
    var lastAddress = this.length - 1;
    var value = this.memory[lastAddress];
    delete this.memory[lastAddress];
    this.length--;

    // Возвращаем значение, чтобы его можно было использовать.
    return value;
}
}

interface IList {
  memory: [];
  length: number;
}