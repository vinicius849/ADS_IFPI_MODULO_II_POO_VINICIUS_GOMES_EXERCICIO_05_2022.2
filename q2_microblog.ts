/* 2. Crie uma implementação que simule um migroblog:
a. Crie uma classe Postagem e nela:
a. Crie os atributos:
1. id do tipo number, representando o identificador da
postagem;
2. texto do tipo string, representando um texto da postagem;
3. quantidadeCurtidas do tipo number.
b. Crie um método chamado curtir que incrementa a quantidade
curtidas;
c. Crie um método chamado toString que retorna a concatenação da
postagem com a quantidade de curtidas;

b. Crie uma classe Microblog e nela:
a. Crie um array de classes Postagem;
b. Crie um método que inclua uma postagem passada como
parâmetro no array de postagens;
c. Crie um método de excluir uma postagem que recebe um id
passado por parâmetro. Para isso, efetue uma busca pelo id nas
postagens do array e faça a exclusão de forma análoga à feita na
classe Banco;
d. Crie um método que retorna um array com a postagem mais
curtida.

e. Crie um método curtir em que se passa um id como parâmetro e a
classe microblog pesquisa a postagem e chama seu método curtir
da própria postagem;
f. Crie um método toString que retorna a concatenação do “toString”
de todas as postagens. */

class Postagem {
    id : number;
    texto : string;
    quantCurtidas : number;
    constructor(id : number, texto : string, quantCurtidas : number) {
        this.id = id;
        this.texto = texto;
        this.quantCurtidas = quantCurtidas;
    }
}

function Curtir() {
    return this.quantCurtidas++;
}

function toString(): String {
		return this.texto + this.quantidadeCurtidas;
}

class Microblog {
	postagem: Postagem[] = [];
}

function incluir(postagem : Postagem) : void {
		this.postagem.push(Postagem);
	}

function ExcluirPostagem(postagem : Postagem[] = []): Postagem {

    let postagem: Postagem[];
	let maxCurtidas = 0;
		for (let i: number = 0; i < this.postagens.length; i++) {
			if (this.postagens[i].quantidadeCurtidas > maxCurtidas) {
				postagem = this.postagens[i];
			}
		}
		return ExcluirPostagem;
}

function MaxPostagemCurtida(postagem : Postagem[] = []) : Postagem {
    console.log("Incluindo o número máximo de postagens mais curtida em um array.");

class Momento {
    maxCurtidas : number;
    toString : string;
    constructor(maxCurtidas : number, toString : string) {
        this.maxCurtidas = maxCurtidas;
        this.toString = toString;
    }
}

    let momento : Momento = new Momento(147, "Gostei da vibe!");

    let postagem : Postagem[] = [];
    let maxCurtidas = 149;

function toString(): String {

	let postagensString: String = " ";
		for (let i: number = 0; i< this.postagens.length; i++) {
			postagensString += this.postagens[i].toString() + "\n";
		}
		return postagensString;
	}

    consultar(id: number): Postagem {
		let postagemConsultada: Postagem;
		for (let postagem of this.postagens) {
			if (postagem.id == id) {
				postagemConsultada = postagem;
				break;
			}
		}
		return postagemConsultada;
	}

function curtida(id: number): void {
		let postagemConsultada: Postagem = this.consultar(id);
	
		if (postagemConsultada !== null) {
			postagemConsultada.quantCurtidas++;
		}
	}
}

    let microblog: Microblog = new Microblog();
    let p1: Postagem = new Postagem(1, "texto 1",10);
    let p2: Postagem = new Postagem(2, "texto 2",20);
    let p3: Postagem = new Postagem(3, "texto 3",-1);


microblog.incluir(p1);
microblog.incluir(p2);
microblog.incluir(p3);

console.log(microblog.obterPostagemMaisCurtida().toString());
console.log(microblog.toString());

    let p4: Postagem = new Postagem(4, "texto 4", 0);
microblog.incluir(p4);
microblog.curtir(4);
microblog.curtir(4);

console.log(microblog.consultar(4).toString());