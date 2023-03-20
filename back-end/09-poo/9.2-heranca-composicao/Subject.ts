export default class Subject {
  constructor (
    private _name: string,
  ) {
    this.name = _name;
  }

  get name(): string {
    return this._name;
  }

  set name(v: string) {
    if (v.length < 3) {
      throw new Error('O nome deve ter no mínimo 3 caracteres')
    }
    this._name = v;
  }
}

const math = new Subject('Matemática');
const story = new Subject('História');
const philosophy = new Subject('Filosofia');

// console.log(math);
// console.log(story);
// console.log(philosophy);