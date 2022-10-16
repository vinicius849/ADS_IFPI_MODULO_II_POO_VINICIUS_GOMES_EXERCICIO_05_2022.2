/* 1. Atualize a implementação da classe Banco apresentada em sala de acordo com as
seguintes instruções:
a. Altere o método inserir para que não seja possível contas com mesmo
número;
b. sacar(numero: string, valor: number): pesquisa uma conta e realiza uma
operação de crédito com o valor passado.
c. transferir(numeroCredito: string, numeroDebito: string, valor: number):
realiza uma procura por ambas as contas e chama o método transferir de
uma delas passando a conta de débito e o valor como parâmetros;
d. Crie 3 métodos: um que retorne a quantidade de contas, outro que retorne
o total de dinheiro depositado em todas as contas. Por fim, crie um método
que retorne a média do saldo das contas chamando os dois métodos
anteriores; */

class Banco {
    agencia : number;
    saldo : number;
    transferir : number;
    constructor(agencia : number, saldo : number, transferir : number) {
        this.agencia = agencia;
        this.saldo = saldo;
        this.transferir = transferir;
    }
}
    let banco1 : Banco = new Banco(640111, 2000, 85);
    let banco2 : Banco = new Banco(640552, 6000, 45);

    banco1 !== banco2;

function InserirConta() {
    this.agencia = banco2;
}

class Sacar {
    numero : string;
    valor : number;
    constructor(numero : string, valor : number) {
        this.numero = numero;
        this.valor = valor;
    }
}
    let banco3 : Sacar = new Sacar("640123", 3000);

function CreditarDinheiro() {
    this.numero = (this.valor / 3); // Valor do meu crédito parcelado em 3 vezes.
}

class Transferir {
    numeroCredito : string;
    numeroDebito : string;
    valor : number;
    constructor(numeroCredito : string, numeroDebito : string, valor : number) {
        this.numeroCredito = numeroCredito;
        this.numeroDebito = numeroDebito;
        this.valor = valor;
    }
}

    let banco4 : Transferir = new Transferir("37168", "651241", 1750);

function TransacaoBancaria() {
    (this.numeroDebito / this.numeroDebito === 0);
}

class CustoTotal {
    quantContas : number;
    quantDinheiro : number;
    mediaSaldo : number;
    constructor(quantContas : number, quantDinheiro : number, mediaSaldo : number) {
        this.quantContas = quantContas;
        this.quantDinheiro = quantDinheiro;
        this.mediaSaldo = mediaSaldo;
    }
}
function CasaDePapel() {
    return (this.quantContas = this.agencia + banco1 + banco2 + banco3 + banco4);
}
    console.log(CasaDePapel);

function DinheiroCalculado() {
    return (this.quantDinheiro = 2000 + 6000 + 1000 + 1750);
}
    console.log(DinheiroCalculado);

function Media() {
    return (this.mediaSaldo = 2000 + 6000 + 1000 + 1750 / 4);
}
    console.log(Media);

    let custototal : CustoTotal = new CustoTotal(5, 10750, 2687.5);
    

