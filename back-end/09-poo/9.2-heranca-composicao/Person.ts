export default class Person {
  private _name: string = '';
  private _birthDate: Date = new Date();

  constructor(
    name: string,
    birthDate: Date,
  ) {
    this.name = name;
    this.birthDate = birthDate;
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

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(v: Date) {
    if (v > new Date()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro')
    }
    if (Person.getAge(v) > 120) {
      throw new Error('A pessoa não pode possuir mais de 120 anos')
    }
    this._birthDate = v
  }

  static getAge(v: Date): number {
    const diff = Math.abs(new Date().getTime() - v.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMs);
  }
}

const maria = new Person('Maria da Consolação', new Date('2000/01/25'));
const luiza = new Person('Luiza da Silva', new Date('2005/10/02'));

// console.log(maria);
// console.log(luiza);


// ./Person.ts

// export default class Person {
//   constructor(private _name: string, private _birthDate: Date) {
//     this.name = _name;
//     this.birthDate = _birthDate;
//   }

//   get name(): string {
//     return this._name;
//   }

//   set name(value: string) {
//     this.validateName(value);
//     this._name = value;
//   }

//   get birthDate(): Date {
//     return this._birthDate;
//   }

//   set birthDate(value: Date) {
//     this.validateBirthDate(value);
//     this._birthDate = value;
//   }

//   static getAge(value: Date): number {
//     const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
//     const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
//     return Math.floor(diff / yearMs);
//   }

//   private validateName(value: string): void {
//     if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
//   }

//   private validateBirthDate(value: Date): void {
//     if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
//     if (Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
//   }
// }
