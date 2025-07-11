export class Produto {
    nomeProduto: string;
    valorProduto: number;
    anoProduto: number;
  
    constructor(nomeProduto: string = "", valorProduto: number = 0, anoProduto: number = 0) {
      this.nomeProduto = nomeProduto;
      this.valorProduto = valorProduto;
      this.anoProduto = anoProduto;
    }
  
    exibirProduto(): void {
      console.log("Produto:", this.nomeProduto);
      console.log("Valor: R$", this.valorProduto.toFixed(2));
      console.log("Ano:", this.anoProduto);
    }
  }
  