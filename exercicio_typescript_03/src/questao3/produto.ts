export class Produto {
    private id!: number;
    private quantidade!: number;
    private nome!: string;
    private preco!: number;
  
    constructor(id: number = 1, quantidade: number = 0, nome: string = "", preco: number = 0) {
      this.setId(id);
      this.setQuantidade(quantidade);
      this.setNome(nome);
      this.setPreco(preco);
    }
  
    setId(id: number): void {
      if (id >= 1 && id <= 9999) this.id = id;
      else throw new Error("ID deve estar entre 1 e 9999.");
    }
  
    setQuantidade(qtd: number): void {
      if (qtd >= 0) this.quantidade = qtd;
      else throw new Error("Quantidade não pode ser negativa.");
    }
  
    setNome(nome: string): void {
      this.nome = nome;
    }
  
    setPreco(preco: number): void {
      if (preco >= 0) this.preco = preco;
      else throw new Error("Preço não pode ser negativo.");
    }
  
    getResumo(): string {
      return `Produto: ${this.nome} | ID: ${this.id} | Quantidade: ${this.quantidade} | Preço: R$ ${this.preco.toFixed(2)}`;
    }
  }
  