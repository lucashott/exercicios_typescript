export class Autor {
    nome: string;
    nacionalidade: string;
  
    constructor(nome: string, nacionalidade: string) {
      this.nome = nome;
      this.nacionalidade = nacionalidade;
    }
  
    getDadosAutor(): string {
      return `Autor: ${this.nome} (${this.nacionalidade})`;
    }
  }
  