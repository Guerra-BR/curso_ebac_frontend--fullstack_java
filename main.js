function Dragao(especie, classe, chama){
    this.classe = classe;
    this.especie = especie;
    this.chama = chama;

    this.ataque = function(nomeDoAtaque){
        console.log(`${especie} atacou com rajada de ${nomeDoAtaque}`)
    }
}

function FuriaDaNoite(nome, caracteristica){
    Dragao.call('Relampago', 'Furia da Noite', 'Plasma')
    this.nome = nome
    this.caracteristica = caracteristica

    this.ataque = function(){
        console.log(`Este Furia da noite atacou com rajada de plasma`)
    }
}

function Nader(nome, caracteristica){
    Dragao.call('Espinho', 'Nader Mortal', 'Magnésio')
    this.nome = nome
    this.caracteristica = caracteristica

    this.ataque = function(){
        console.log(`Este Furia da noite atacou com rajada de magnésio`)
    }
}


const meuDragao = new FuriaDaNoite('Shadow', 'travesso')
const maeDeShadow = new FuriaDaNoite('Darkness', 'harmoniosa')
const dragaoDaAstrid = new Nader('Tempestade', 'Leal')
