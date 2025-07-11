export class Data {
    private dia!: number;
    private mes!: number;
    private ano!: number;
  
    constructor(dia: number = 1, mes: number = 1, ano: number = 2000) {
      this.setDia(dia);
      this.setMes(mes);
      this.setAno(ano);
    }
  
    setDia(d: number): void {
      if (d >= 1 && d <= 31) {
        this.dia = d;
      } else {
        throw new Error("Dia inválido");
      }
    }
  
    setMes(m: number): void {
      if (m >= 1 && m <= 12) {
        this.mes = m;
      } else {
        throw new Error("Mês inválido");
      }
    }
  
    setAno(a: number): void {
      if (a > 0) {
        this.ano = a;
      } else {
        throw new Error("Ano inválido");
      }
    }
  
    getDataFormatada(): string {
      return `${this.dia.toString().padStart(2, '0')}/${this.mes.toString().padStart(2, '0')}/${this.ano}`;
    }
  }
  