import { Cliente } from "./Cliente.js";

export class Conta {
    static quantidadeContas = 0;
    constructor(cliente, agencia, numero, saldoInicial = 0){
		this._saldo = saldoInicial;
		this._cliente = cliente;
        this._agencia = agencia;
        this._numero = numero;
		Conta.quantidadeContas++;
    }
    
    sacar(valor) {
		return this._sacar(valor);
    }

    _sacar(valor, taxa = 0) {
        if (this._saldo < valor) return 0;
		this._saldo -= valor;
		this._saldo -= valor*taxa;
		return valor;
    }

	depositar(valor) {
		if (valor <= 0) return;
		this._saldo += valor;
	}

	transferir(valor, conta) {
		const valorSacado = this.sacar(valor);
		conta.depositar(valorSacado);
    }
    
    set cliente(novoValor){
		if(novoValor instanceof Cliente)
			this._cliente = novoValor;
	}

	get cliente(){
		return this._cliente;
	}

	get saldo(){
		return this._saldo;
	}
}