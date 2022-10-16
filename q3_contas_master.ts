/* 3. Crie um arquivo chamado app.ts que tenha leitura de dados e um loop semelhante
ao demonstrado abaixo e implemente todas as funcionalidades da classe banco:

import prompt from "prompt-sync";
import { Conta, Banco } from "./banco";

let input = prompt();
let b: Banco = new Banco();
let opcao: String = '';
do {
console.log('\nBem vindo\nDigite uma opção:');
console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
'4 - Depositar 5 - Excluir 6 - Transferir\n' +
'7 – Totalizações' +
'0 - Sair\n');
opcao = input("Opção:");
switch (opcao) {
case "1":
inserir();
break
case "2":
consultar();
break
//...
}
input("Operação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");

function inserir(): void {
console.log("\nCadastrar conta\n");
let numero: string = input('Digite o número da conta:');
let conta: Conta;
conta = new Conta(numero, 0);
b.inserir(conta);
}
//... */

class Conta {
	private _numero: String;
	private _saldo: number;

    constructor(numero: String, saldoInicial: number) {
		this._numero = numero;
		this._saldo = saldoInicial;
	}
	
	get numero(): String {
		return this._numero;
	}

	get saldo(): number {
		return this._saldo;
	}
	
	sacar(valor: number): void {
		if (this._saldo >= valor) {
			this._saldo = this._saldo - valor;
		}
	}

	depositar(valor: number): void {
		this._saldo = this._saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}
}

class Poupanca extends Conta {
	private _taxaJuros: number;

	constructor(numero: String, saldo: number, taxaJuros: number ) {
		super(numero, saldo);
		this._taxaJuros = taxaJuros;
	}

	public renderJuros(): void {
		this.depositar(this.saldo * this._taxaJuros/100);
	}

	get taxaJuros(): number {
		return this._taxaJuros
	}
}

let conta: Conta = new Conta("1", 100);
let poupanca: Poupanca = new Poupanca("2",100,0.5);
poupanca.renderJuros();
console.log(poupanca.saldo);

let poupanca2: Conta = new Poupanca("3",100, 1);
poupanca2.depositar(100);
(<Poupanca> poupanca2).renderJuros();
console.log(poupanca2.saldo);



class Banco {
	private _contas: Conta[] = [];
	
	inserir(conta: Conta): void {
        let contaConsultada = this.consultar(conta.numero);

        if (contaConsultada == null) {
		    this._contas.push(conta);
        }
	}

	consultar(numero: String): Conta {
		let contaConsultada: Conta;
		for (let conta of this._contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				break;
			}
		}
		return contaConsultada;
	}

	private consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this._contas.length; i++) {
			if (this._contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero);
		if (indice != -1) {
			this._contas[indice] = conta;
		}
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this._contas.length; i++) {
				this._contas[i] = this._contas[i+1];
			}

			this._contas.pop();
		} 
	}

	depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}

    sacar(numero: String, valor: number): void {
        let contaConsultada = this.consultar(numero);

        if (contaConsultada != null) {
            contaConsultada.sacar(valor);
        }
    }

    transferir(numeroDebito: string, numeroCredito: string, valor: number){
        let contaCredito: Conta = this.consultar(numeroCredito);
        let contaDebito: Conta = this.consultar(numeroDebito);

        if (contaCredito != null && contaDebito != null) {
            contaDebito.transferir(contaCredito, valor);
        }
    }

    calcularQuantidadeContas(): number {
        return this._contas.length;
    }

    calcularTotalSaldos(): number {
        let totalSaldo: number = 0;
        for (let conta of this._contas) {
            totalSaldo += conta.saldo;
        }

        return totalSaldo;
    }

    calcularMediaSaldos() {
        return this.calcularTotalSaldos()/this.calcularQuantidadeContas();
    }

	renderJuros(numero: String) {
		let contaConsultada = this.consultar(numero);
		
		if (contaConsultada instanceof Poupanca) {
			let poupanca: Poupanca = <Poupanca> contaConsultada;
			poupanca.renderJuros();
		}
	}
}


let banco : Banco = new Banco();

banco.inserir(new Conta("1", 100));
banco.inserir(new Poupanca("2", 100, 0.5));
banco.depositar("2",200);
banco.renderJuros("2");
//console.log(banco.consultar("2").saldo);
banco.renderJuros("1");
console.log(banco.consultar("1").saldo);


/* banco.transferir("1","2",50); 
console.log(banco.consultar("1").saldo); //250
console.log(banco.consultar("2").saldo); //150

let  p: Poupanca = new Poupanca("2", 100, 0.5);
p.depositar(100);

p.renderJuros();
console.log(p.saldo); */

