import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

	constructor(cliente, agencia, numero, saldoInicial = 0){
		super(cliente, agencia, numero, saldoInicial);
	}

	sacar(valor) {
		return this._sacar(valor, 0.02);
	}
}
