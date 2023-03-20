import Person from "./Person";

class Student extends Person{
  private _enrollment: string = '';
  private _testGrades: number[] = [];
  private _assignmentGrades: number[] = Array();

  constructor (
    name: string,
    birthDate: Date,
  ) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(newValue: string) {
    if (newValue.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres')
    }

    this._enrollment = newValue;
  }

  generateEnrollment(): string {
    //esse método gera um id de inscrição aleatório baseado na data de cadastro da pessoa estudante
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${randomStr}`
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

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.testGrades = [25, 20, 25, 23];
lucas.testGrades = [25, 20, 25, 23];
jessica.assignmentGrades = [50, 45];
tamires.assignmentGrades = [47, 42];
// fernando.assignmentGrades = [45, 45, 45]; // erro

// console.log(carolina);
// console.log(lucas);
// console.log(jessica);
// console.log(tamires);
// console.log(fernando);
