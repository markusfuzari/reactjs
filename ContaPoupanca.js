import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    
    constructor(cliente, agencia, numero, saldoInicial = 0){
		super(cliente, agencia, numero, saldoInicial);
    }
    
}