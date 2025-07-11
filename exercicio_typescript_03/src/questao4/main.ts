import { Funcionario } from "./funcionario";

const funcionario = new Funcionario("Lucas Hot", 3500, "12345678901");

console.log("Nome:", funcionario.getNome());
console.log("Salário: R$", funcionario.getSalario());
console.log("CPF:", funcionario.getCpf());
