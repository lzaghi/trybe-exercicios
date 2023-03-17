class Student {
  private _registration: string;
  private _name: string;
  private _testGrades: number[] = [];
  private _assignmentGrades: number[] = Array();

  constructor (
    registration: string,
    name: string,
    testGrades: number[],
    assignmentGrades: number[],
  ) {
    this._registration = registration;
    this._name = name;
    this.testGrades = testGrades; // sem _ para que passe pela validação ja na criação inicial do objeto! Dai acima precisa inicializar o atributo ([] ou Array())
    this.assignmentGrades = assignmentGrades;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(newValue: string) {
    this._registration = newValue;
  }

  get name(): string {
    return this._name;
  }

  set name(newValue: string) {
    if (newValue.length < 3) {
      throw new Error('Name must have at least 3 characters')
    }
    this._name = newValue;
  }

  get testGrades(): number[] {
    return this._testGrades;
  }

  set testGrades(newValue: number[]) {
    if (newValue.length > 4) {
      throw new Error('Maximum of 4 test grades allowed')
    }
    this._testGrades = newValue;
  }

  get assignmentGrades(): number[] {
    return this._assignmentGrades;
  }

  set assignmentGrades(newValue: number[]) {
    if (newValue.length > 2) {
      throw new Error('Maximum of 2 assignment grades allowed')
    }
    this._assignmentGrades = newValue;
  }

  sumGrades(): number {
    const allGrades = [...this.testGrades, ... this.assignmentGrades]
    return allGrades.reduce((acc, curr) => acc + curr)
  }

  averageGrade(): number {
    const sumGrade = this.sumGrades();
    const divider = this.testGrades.length + this.assignmentGrades.length;

    return sumGrade / divider;
  }
}

const personOne = new Student('202001011', 'Maria da Silva', [1, 2, 3, 4], []);

console.log(personOne);

// personOne.testGrades = [1,2,3,4,5];

// console.log(personOne);

console.log('soma das notas: ' + personOne.sumGrades());
console.log('média das notas: ' + personOne.averageGrade());
