class Data {
  private _dia: number;
  private _mes: number;
  private _ano: number;

  constructor(
    d: number,
    m: number,
    a: number,
  ) {
    const dateStr = `${a}-${m}-${d}`;
    // verifica se a data é válida
    if (new Date(dateStr).getDate() !== d) {
      this._dia = 1;
      this._mes = 1;
      this._ano = 1900;
    } else {
      this._dia = d;
      this._mes = m;
      this._ano = a;
    }
  }

  get dia(): number {
    return this._dia
  }

  set dia(v: number) {
    this._dia = v
  }

  get mes(): number {
    return this._mes
  }

  set mes(v: number) {
    this._mes = v
  }

  get ano(): number {
    return this._ano
  }

  set ano(v: number) {
    this._ano = v
  }

  getMonthName(): string {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return meses[this.mes - 1]
  }

  isLeapYear(): string {
    return this.ano % 4 === 0 ? 'O ano é bissexto' : 'O ano não é bissexto'
  }

  compare(date: Data): number {
    const currentDate = `${this.ano}-${this.mes}-${this.dia}`
    const compareDate = `${date.ano}-${date.mes}-${date.dia}`

    if (new Date(currentDate) > new Date(compareDate)) return 1;
    if (new Date(currentDate) < new Date(compareDate)) return -1;

    return 0
  }

  format(formatting: string): string {
    const conditions: boolean[] = [
      (!formatting.match(/a{2,4}/g)), // verifica se possui o ano na formatação
      (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)), // verifica se tem o mês na formatação
      (!formatting.match(/d{2}/g)), // verifica se tem o dia na formatação
    ];

    if (conditions.every((cond) => cond)) {
      throw new Error(`O formato passado é inválido: ${formatting}`);
    }

    const day = this.dia > 9 ? this.dia.toString() : `0${this.dia.toString()}`;
    const month = this.mes > 9 
      ? this.mes.toString() 
      : `0${this.mes.toString()}`;
    const year = this.ano.toString();

    const dateFormatting = formatting
      .replace('dd', day).replace('mm', month)
      .replace('M', this.getMonthName())
      .replace('aaaa', year)
      .replace('aa', year.substr(-2));

    return dateFormatting;
  }
}

const testDate = new Data(30, 1, 1996);

console.log(testDate);
console.log(testDate.getMonthName());
console.log(testDate.isLeapYear());

const otherDate = new Data(30, 1, 2021);
console.log(testDate.compare(otherDate));

console.log(testDate.format('dd/mm/aaaa'));
console.log(testDate.format('dd-mm-aaaa'));
console.log(testDate.format('aaaa/mm/dd'));
console.log(testDate.format('aaaa-mm-dd'));
console.log(testDate.format('dd de M de aa'));
console.log(testDate.format('dd, M de aaaa'));