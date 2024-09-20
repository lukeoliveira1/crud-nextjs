import { get } from "http";

export default class Client {
  #id: string | null;
  #name: string;
  #age: number;

  constructor(name: string, age: number, id: string | null = null) {
    this.#id = id;
    this.#name = name;
    this.#age = age;
  }

  static empty() {
    return new Client("", 0);
  }

  get getId() {
    return this.#id;
  }

  get getName() {
    return this.#name;
  }

  get getAge() {
    return this.#age;
  }
}
