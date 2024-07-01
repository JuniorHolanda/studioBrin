// cria os produtos
class MoldProduct {
  constructor(
    nome,
    medidas,
    info,
    ajuste,
    corpo,
    card,
    bolso,
    alca,
    ziper,
    vivo,
    tampa,
    debrum,
    base,
    detalhe
  ) {
    this.nome = nome;
    this.medidas = medidas;
    this.info = info;
    this.ajuste = ajuste;
    this.corpo = corpo;
    this.card = card;
    this.bolso = bolso;
    this.alca = alca;
    this.ziper = ziper;
    this.vivo = vivo;
    this.tampa = tampa;
    this.debrum = debrum;
    this.base = base;
    this.detalhe = detalhe;
  }
}

// Lista com os produtos para serem iterados, as pastas com as partes do produtos devem ser nomeadas em camelCase e identica aos itens deste array, AJUSTE DENTRO DAS CONDIÇÕES DA REPETIÇÃO
const listProduct = [
  //bolsas
  "bolsaPraiaDuo",
  "bolsaTripCongresso",
  "bolsaPst",
  "bolsaGraci",
  "bolsaPraiaMiu",
  "bolsaAcademia",
  "bolsaCarteiroHb",
  "bolsaColg",
  "bolsaPsico",
  "bolsaSBag",

  //estojo
  "estojoTriang",

  //diversos
  "miniBagVani",
  "organizadorWish",

  //necessaire
  "necessaireEvBolso",
  "necessaireCn",
  "necessairePs",
  "necessaireHope",
  "necessaireVaniDuo",
  "necessaireGran",
  "necessaireVaniVisor",


  //termica
  "termicaJl",
  "termicaAeTri",
  "termicaGer",
  "termicaMiu",

  //mochila
  "mochilaAdvGrande",

  //carteira
  "carteiraSlim",

];

// sempre que adicionar um produto é necessário adicionar a medida, seguindo a ordem cronológica
const listMedidas = [
  //bolsa
  "Lar - 10cm | Alt - 00cm | Comp - 00cm", //bolsaPraiaDuo
  "Lar - 10cm | Alt - 00cm | Comp - 00cm", //bolsaTripCongresso
  "Lar - 20cm | Alt - 00cm | Comp - 00cm", //bolsaPst
  "Lar - 20cm | Alt - 00cm | Comp - 00cm", //bolsaGraci
  "Lar - 20cm | Alt - 00cm | Comp - 00cm", //bolsaPraiaMiu
  "Lar - 20cm | Alt - 00cm | Comp - 00cm", //bolsaAcademia
  "Lar - 20cm | Alt - 00cm | Comp - 00cm", //bolsaCarteiroHb
  "Lar - 20cm | Alt - 00cm | Comp - 00cm", //bolsaColg
  "Lar - 20cm | Alt - 00cm | Comp - 00cm", //bolsaPsico
  "Lar - 20cm | Alt - 00cm | Comp - 00cm", //bolsaSBag

  //estojo
  "Lar - 30cm | Alt - 00cm | Comp - 00cm", //estojoTriang

  //diversos
  "Lar - 40cm | Alt - 00cm | Comp - 00cm", //miniBagVani
  "Lar - 40cm | Alt - 00cm | Comp - 00cm", //organizadorWish

  //necessaire
  "Lar - 50cm | Alt - 00cm | Comp - 00cm", //necessaireEvBolso
  "Lar - 50cm | Alt - 00cm | Comp - 00cm", //necessaireCnBolso
  "Lar - 50cm | Alt - 00cm | Comp - 00cm", //necessairePs
  "Lar - 50cm | Alt - 00cm | Comp - 00cm", //necessaireHope
  "Lar - 50cm | Alt - 00cm | Comp - 00cm", //necessaireVaniDuo
  "Lar - 50cm | Alt - 00cm | Comp - 00cm", //necessaireGran
  "Lar - 50cm | Alt - 00cm | Comp - 00cm", //necessaireVaniVisor
  

  //termica
  "Lar - 60cm | Alt - 00cm | Comp - 00cm", //termicaJl
  "Lar - 60cm | Alt - 00cm | Comp - 00cm", //termicaAeTri
  "Lar - 60cm | Alt - 00cm | Comp - 00cm", //termicaGer
  "Lar - 60cm | Alt - 00cm | Comp - 00cm", //termicaMiu

  //mochila
  "Lar - 60cm | Alt - 00cm | Comp - 00cm", //mochilaAdvGrande

  //carteira
  "Lar - 60cm | Alt - 00cm | Comp - 00cm", //carteiraSlim
];

// assim como as medidas, essa lista precisa ser preenchida na ordem em que novos produtos são adicionados
const listInfoProduct = [

  //bolsa
  "Uma Bolsa perfeita para todas ocasiões", //bolsaPraiaDuo
  "Uma Bolsa perfeita para todas ocasiões", //bolsaTripCongresso
  "esta é outra bolsa", //bolsaPst
  "esta é outra bolsa", //bolsaGraci
  "esta é outra bolsa", //bolsaPraiaMiu
  "esta é outra bolsa", //bolsaAcademia
  "esta é outra bolsa", //bolsaCarteiroHb
  "esta é outra bolsa", //bolsaColg
  "esta é outra bolsa", //bolsaPsico
  "esta é outra bolsa", //bolsaSBag
  
  //estojo
  "este é um estojo", //estojoTriang

  //diversos
  "e isso uma minibag", //miniBagVani
  "e isso uma organizador", //organizadorWish

  //necessaire
  "essa necessaire", //necessaireEvBolso
  "essa necessaire", //necessaireCnBolso
  "essa necessaire", //necessairePs
  "essa necessaire", //necessaireHope
  "essa necessaire", //necessaireVaniDuo
  "essa necessaire", //necessaireGran
  "essa necessaire", //necessaireVaniVisor

  //termica
  "e essa é uma térmica", //termicaJl
  "e essa é uma térmica", //termicaAeTri
  "e essa é uma térmica", //termicaGer
  "e essa é uma térmica", //termicaMiu

  //mochila
  "e essa é uma mochila", //mochilaAdvGrande

  //carteira
  "e essa é uma mochila", //carteiraSlim
];

// lista com as categorias dos objetos criados na iteração.
export const bolsa = [];
export const necessaire = [];
export const estojo = [];
export const mala = [];
export const carteira = [];
export const termica = [];
export const mochila = [];
export const portaBloco = [];
export const diversos = [];

for (let i = 0; i < listProduct.length; i++) {
  // proriedade comum a todos os objetos
  const nome = listProduct[i];
  const medida = listMedidas[i];
  const info = listInfoProduct[i];
  const ajuste = `assets/img/${nome}/ajuste.jpg`;
  const card = `assets/img/${nome}/card.jpg`;

  // propriedades que variam nos objetos
  let alca = "";
  let ziper = "";
  let vivo = "";
  let tampa = "";
  let debrum = "";
  let bolso = "";
  let base = "";
  let detalhe = "";
  let corpo = "";
  
  // adiciona corpo aos aos produtos relativos

  if (

    //bolsa
    nome === "bolsaPst" ||
    nome === "bolsaTripCongresso" ||
    nome === "bolsaGraci" ||
    nome === "bolsaAcademia" ||
    nome === "bolsaCarteiroHb" ||
    nome === "bolsaColg" ||
    nome === "bolsaPsico" ||
    nome === "bolsaPst" ||
    nome === "bolsaSBag" ||
    
    //estojo
    nome === "estojoTriang" ||

    //diversos
    nome === "miniBagVani" ||
    

    //mochila
    nome === "mochilaAdvGrande" ||

    //necessaire
    nome === "necessaireCn" ||
    nome === "necessaireEvBolso" ||
    nome === "necessaireHope" ||
    nome === "necessairePs" ||
    nome === "necessaireVaniVisor" ||

    //termica
    nome === "termicaJl" ||
    nome === "termicaAeTri" ||
    nome === "termicaGer" ||
    nome === "termicaMiu" ||
    
    //carteira
    nome === "carteiraSlim"

  ) {
    corpo = `assets/img/${nome}/corpo.png`;
  }

  // adiciona alça aos aos produtos relativos

  if (
    //bolsa
    nome === "bolsaPraiaDuo" ||
    nome === "bolsaTripCongresso" ||
    nome === "bolsaPst" ||
    nome === "bolsaGraci" ||
    nome === "bolsaPraiaMiu" ||
    nome === "bolsaAcademia" ||
    nome === "bolsaCarteiroHb" ||
    nome === "bolsaColg" ||
    nome === "bolsaPsico" ||
    nome === "bolsaPst" ||
    nome === "bolsaSBag" ||
    

    //diversos
    nome === "miniBagVani" ||

    //termica
    nome === "termicaJl" ||
    nome === "termicaAeTri" || 
    nome === "termicaGer" || 
    nome === "termicaMiu" ||

    //necessaire
    nome === "necessaireCn"

  ) {
    alca = `assets/img/${nome}/alca.png`;
  }

  // adiciona ziper aos aos produtos relativos
  if (
    nome === "estojoTriang" ||
    nome === "bolsaTripCongresso" ||
    nome === "miniBagVani" ||
    nome === "necessaireEvBolso" ||
    nome === "bolsaAcademia" ||
    nome === "bolsaColg" ||
    nome === "bolsaPsico" ||
    nome === "bolsaSBag" ||

    nome === "termicaJl" ||
    nome === "termicaGer" ||
    nome === "termicaMiu" ||

    nome === "mochilaAdvGrande" ||


    nome === "necessaireCn" ||
    nome === "necessairePs" ||
    nome === "necessaireVaniDuo" ||
    nome === "necessaireHope" ||
    nome === "necessaireGran" ||
    nome === "necessaireVaniVisor"
  ) {
    ziper = `assets/img/${nome}/ziper.png`;
  }

  // adiciona bolso aos aos produtos relativos
  if (
    //bolsa
    nome === "bolsaCarteiroHb" ||
    nome === "bolsaColg" ||
    nome === "bolsaPsico" ||
    nome === "bolsaSBag" ||

    //necessaire
    nome === "necessaireEvBolso" ||
    nome === "necessaireCn" ||
    nome === "necessairePs" ||

    //carteira
    nome === "carteiraSlim"
  ) {
    bolso = `assets/img/${nome}/bolso.png`;
  }

  // adiciona vivo aos aos produtos relativos
  if (
    //bolsa
    nome === "bolsaAcademia" ||
    nome === "bolsaCarteiroHb" ||

    //termica
    nome === "termicaJl" ||
    nome === "termicaMiu" ||

    //necessaire
    nome === "necessaireCn" ||
    nome === "necessairePs" ||

    //diversos
    nome === "organizadorWish"
  ) {
    vivo = `assets/img/${nome}/vivo.png`;
  }

  // adiciona tampa aos aos produtos relativos
  if (
    nome === "bolsaTripCongresso" ||
    nome === "termicaJl"
    //nome === ''
  ) {
    tampa = `assets/img/${nome}/tampa.png`;
  }

  // adiciona debrum aos aos produtos relativos
  if (
    nome === "bolsaPraiaDuo" ||
    nome === "mochilaAdvGrande" ||
    nome === "necessaireVaniDuo" ||
    nome === "bolsaPraiaMiu" ||
    nome === "bolsaColg" ||
 

    nome === "termicaAeTri" ||
    nome === "termicaGer"

  ) {
    debrum = `assets/img/${nome}/debrum.png`;
  }

  // adiciona base aos aos produtos relativos
  if (
    nome === "bolsaPraiaDuo" ||

    //necessaire
    nome === "necessaireVaniDuo" ||
    nome === "necessaireVaniVisor"
  ) {
    base = `assets/img/${nome}/base.png`;
  }

  // adiciona detalhe aos aos produtos relativos
  if (
    nome === "mochilaAdvGrande" ||

    nome === "necessaireGran" ||
    nome === "necessaireVaniVisor" ||


    nome === "organizadorWish"

  ) {
    detalhe = `assets/img/${nome}/detalhe.png`;
  }

  // cria o produto com base na classe MoldProduct
  const newProduct = new MoldProduct(
    nome,
    medida,
    info,
    ajuste,
    corpo,
    card,
    bolso,
    alca,
    ziper,
    vivo,
    tampa,
    debrum,
    base,
    detalhe
  );

  // expressões regulares que vão direcionar o objeto para a respectiva categoria
  let category = listProduct[i];

  if (category.match(/^bolsa/)) {
    bolsa.push(newProduct);
  } else if (category.match(/^necessaire/)) {
    necessaire.push(newProduct);
  } else if (category.match(/^estojo/)) {
    estojo.push(newProduct);
  } else if (category.match(/^mala/)) {
    mala.push(newProduct);
  } else if (category.match(/^carteira/)) {
    carteira.push(newProduct);
  } else if (category.match(/^termica/)) {
    termica.push(newProduct);
  } else if (category.match(/^mochila/)) {
    mochila.push(newProduct);
  } else if (category.match(/^portaBloco/)) {
    portaBloco.push(newProduct);
  } else {
    diversos.push(newProduct);
  }
}
