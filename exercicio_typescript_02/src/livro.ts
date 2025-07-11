import { Autor } from "./autor";

export class Livro {
  titulo: string;
  anoPublicacao: number;
  autor: Autor;

  constructor(titulo: string, anoPublicacao: number, autor: Autor) {
    this.titulo = titulo;
    this.anoPublicacao = anoPublicacao;
    this.autor = autor;
  }

  exibirDetalhes(): void {
    console.log(`Livro: ${this.titulo}`);
    console.log(`Ano: ${this.anoPublicacao}`);
    console.log(`${this.autor.getDadosAutor()}`);
  }
}
