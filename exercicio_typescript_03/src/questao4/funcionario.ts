export class Funcionario {
    private nome!: string;
    private salario!: number;
    private cpf!: string;
  
    constructor(nome: string = "", salario: number = 0, cpf: string = "") {
      this.setNome(nome);
      this.setSalario(salario);
      this.setCpf(cpf);
    }
  
    setNome(nome: string): void {
      this.nome = nome;
    }
  
    setSalario(salario: number): void {
      this.salario = salario;
    }
  
    setCpf(cpf: string): void {
      if (cpf.length <= 11) this.cpf = cpf;
      else throw new Error("CPF deve ter no máximo 11 caracteres.");
    }
  
    getNome(): string {
      return this.nome;
    }
  
    getSalario(): number {
      return this.salario;
    }
  
    getCpf(): string {
      return this.cpf;
    }
  }
  