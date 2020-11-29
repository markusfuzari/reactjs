import { Cliente } from './Cliente.js';
import { Conta } from './Conta.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente('Ricardo',11122233309);
const cliente2 = new Cliente('Alice',88822233309);
const cliente3 = new Cliente('Maira',88822239999);

const contaCorrente1 = new ContaCorrente(cliente1,1001,1012345,300);
const contaPoupanca1 = new ContaPoupanca(cliente2,1002,1023923,100);
const contaPoupanca2 = new ContaPoupanca(cliente3,1002,1023924,50);

contaCorrente1.transferir(150, contaPoupanca1);
contaPoupanca1.transferir(50, contaPoupanca2);

console.log(contaCorrente1);
console.log(contaPoupanca1);
console.log(contaPoupanca2);
console.log(Conta.quantidadeContas);