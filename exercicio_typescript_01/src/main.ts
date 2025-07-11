import { CalculadoraSimples } from "./calculadora";

const calc = new CalculadoraSimples();

let resultado = calc.somar(250, 150);
calc.exibirMensagem(calc.gerarMensagem(resultado));

resultado = calc.dividir(600, 3);
calc.exibirMensagem(calc.gerarMensagem(resultado));

resultado = calc.potencia(2, 5);
calc.exibirMensagem(calc.gerarMensagem(resultado));
