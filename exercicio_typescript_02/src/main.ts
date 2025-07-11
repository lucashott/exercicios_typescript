import { Autor } from "./autor";
import { Livro } from "./livro";

const autor = new Autor("Machado de Assis", "Brasileiro");
const livro = new Livro("Dom Casmurro", 1899, autor);

livro.exibirDetalhes();
