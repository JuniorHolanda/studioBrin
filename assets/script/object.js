class MoldProduct {
    constructor(nome, medidas, info, ajuste, corpo, card, bolso, alca, ziper, vivo, tampa, debrum, base, ) {
        this.nome = nome;
        this.medidas = medidas;
        this.info = info;
        this.ajuste = ajuste;
        this.corpo = corpo;
        this.bolso = bolso;
        this.alca = alca;
        this.ziper = ziper;
        this.vivo = vivo;
        this.tampa = tampa;
        this.debrum = debrum;
        this.base = base;
        this.card = card;
    }
}

// Lista com os produtos para serem iterados, as pastas com as partes do produtos devem ser nomeadas em camelCase e identica aos itens deste array, AJUSTE DENTRO DAS CONDIÇÕES DA REPETIÇÃO
const listProduct = [
    'bolsaPraiaDuo',
    'bolsaPst',
    'estojoTriang',
    'miniBagVani',
    'necessaireEvBolso',
    'termicaJl'
];

// sempre que adicionar um produto é necessário adicionar a medida, seguindo a ordem cronológica
const listMedidas = [
    'Lar - 10cm | Alt - 00cm | Comp - 00cm', /*bolsaPraiaDuo*/
    'Lar - 20cm | Alt - 00cm | Comp - 00cm', /*bolsaPst*/
    'Lar - 30cm | Alt - 00cm | Comp - 00cm', /*estojoTriang*/
    'Lar - 40cm | Alt - 00cm | Comp - 00cm', /*miniBagVani*/
    'Lar - 50cm | Alt - 00cm | Comp - 00cm', /*necessaireEvBolso*/
    'Lar - 60cm | Alt - 00cm | Comp - 00cm', /*termicaJl*/
]

// assim como as medidas, essa lista precisa ser preenchida na ordem em que novos produtos são adicionados
const listInfoProduct = [
    'Uma Bolsa perfeita para todas ocasiões', /*bolsaPraiaDuo*/
    'esta é outra bolsa', /*bolsaPst*/
    'este é um estojo', /*estojoTriang*/
    'e isso uma minibag', /*miniBagVani*/
    'essa necessaire', /*necessaireEvBolso*/
    'e essa é uma térmica', /*termicaJl*/
]

// lista com as categorias dos objetos criados na iteração.
export const bolsa =  [];
export const necessaire =  [];
export const estojo =  [];
export const mala =  [];
export const carteira =  [];
export const termica =  [];
export const mochila =  [];
export const portaBloco =  [];
export const diversos =  [];


for (let i = 0; i < listProduct.length; i++){
    // proriedade comum a todos os objetos 
    const nome = listProduct[i];
    const medida = listMedidas[i]
    const info = listInfoProduct[i]

    const ajuste = `assets/img/${nome}/ajuste.jpg`;
    const corpo = `assets/img/${nome}/corpo.png`;
    const card = `assets/img/${nome}/card.jpg`

    // propriedades que variam nos objetos
    let alca = '';
    let ziper = '';
    let vivo = '';
    let tampa = '';
    let debrum = '';
    let bolso = '';
    let base = '';

    // adiciona alça aos aos produtos relativos
    if (nome === 'bolsaPraiaDuo' || nome === 'bolsaPst' || nome === 'miniBagVani' || nome === 'termicaJl'){
        alca = `assets/img/${nome}/alca.png`
    }

    // adiciona ziper aos aos produtos relativos
    if (nome === 'estojoTriang' || nome === 'miniBagVani' || nome === 'necessaireEvBolso' || nome === 'termicaJl' ){
        ziper = `assets/img/${nome}/ziper.png`
    }

    // adiciona vivo aos aos produtos relativos
    if (nome === 'necessaireEvBolso'){
        bolso = `assets/img/${nome}/bolso.png`
    }

    // adiciona vivo aos aos produtos relativos
    if (nome === 'termicaJl'){
       vivo = `assets/img/${nome}/vivo.png`
    }

    // adiciona vivo aos aos produtos relativos
    if (nome === 'termicaJl'){
       vivo = `assets/img/${nome}/vivo.png`
    }

    // adiciona tampa aos aos produtos relativos
    if (nome === 'termicaJl'){
       tampa = `assets/img/${nome}/tampa.png`
    }

    // adiciona debrum aos aos produtos relativos
    if (nome === 'bolsaPraiaDuo'){
       debrum = `assets/img/${nome}/debrum.png`
    }

    // adiciona base aos aos produtos relativos
    if (nome === 'bolsaPraiaDuo'){
       base = `assets/img/${nome}/base.png`
    }
    
    // cria o produto com base na classe MoldProduct
    const newProduct = new MoldProduct (nome , medida , info , ajuste , corpo , card , bolso , alca , ziper , vivo , tampa , debrum , base);
     

    // expressões regulares que vão direcionar o objeto para a respectiva categoria
    let category = listProduct[i]
    
    if (category.match(/^bolsa/)) {
        bolsa.push(newProduct);

    } else if (category.match(/^necessaire/)) {
        necessaire.push(newProduct)

    } else if (category.match(/^estojo/)) {
        estojo.push(newProduct)

    } else if (category.match(/^mala/)) {
        mala.push(newProduct)

    } else if (category.match(/^carteira/)) {
        carteira.push(newProduct)
        
    } else if (category.match(/^termica/)) {
        termica.push(newProduct)

    } else if (category.match(/^mochila/)) {
        mochila.push(newProduct)

    } else if (category.match(/^portaBloco/)) {
        portaBloco.push(newProduct)

    } else{
        diversos.push(newProduct)
    }

    ;
}